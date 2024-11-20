import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
function Layout() {

 const [value,setValue]=useState(true)

  return (
    <div>
        <Navbar/>

        {
            value ?(          
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