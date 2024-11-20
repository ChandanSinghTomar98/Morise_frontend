import React from 'react'
import { BrowserRouter as Router, Routes, Route,Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Achievements from '../pages/Achievements';
function Layout() {


  return (
    <div>
        <Footer/>
        <Outlet/>
        {/* <Achievements/> */}
    </div>
  )
}

export default Layout