import React from 'react'
import { BrowserRouter as Router, Routes, Route,Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
function Layout() {


  return (
    <div>
        <Footer/>
        <Outlet/>
    </div>
  )
}

export default Layout