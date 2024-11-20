import React, { useState,useEffect ,useContext} from 'react'
import { BrowserRouter as Router, Routes, Route,Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Cookies from 'js-cookie';
import { AuthContext } from '../context/AuthContext';
function Layout() {

    const { isAuthenticated, login, logout } = useContext(AuthContext);
    const [userToken, setUserToken] = useState('');
    const username = Cookies.get('authToken')
   console.log("username",username)
  

  return (
    <div>
        <Navbar/>

        {
            isAuthenticated ?(          
                <div className="flex justify-center">
                {/* Sidebar */}
                <div className="w-[15%] h-screen text-white">
                  <Sidebar />
                </div>
              
                {/* Main Content Area */}
                <div className="w-[85%]">
                  <div className="container mx-auto p-4">
                    <Outlet /> {/* Nested route content goes here */}
                  </div>
                </div>
              </div>
                    ) :(<Outlet/>)
        }
  
     
        <Footer/>

      
    </div>
  )
}

export default Layout