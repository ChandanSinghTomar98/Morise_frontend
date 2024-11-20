import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route,Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Cookies from 'js-cookie';
function Layout() {

    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [userToken, setUserToken] = useState('');

   
    useEffect(() => {
        // Get the auth token from the cookie
        const token = Cookies.get('authToken'); // Get the 'authToken' cookie
    
        if (token) {
          setUserToken(token); // Set the token in state
          setIsAuthenticated(true); // Mark user as authenticated
        } else {
          setIsAuthenticated(false); // User is not authenticated
        }
      }, []);

  return (
    <div>
        <Navbar/>

        {
            isAuthenticated===true ?(          
                <div className="flex justify-center">
                {/* Sidebar */}
                <div className="w-[15%] bg-gray-800 text-white">
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