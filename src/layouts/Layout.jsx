import React from 'react'
import { BrowserRouter as Router, Routes, Route,Outlet } from 'react-router-dom';
function Layout() {

    
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Layout