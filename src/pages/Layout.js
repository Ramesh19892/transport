import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
        <nav>
            <ul>
                <li><Link to='/home' >Home</Link></li>
                <li><Link to='/blog' >Blog</Link></li>
                <li><Link to='/contact' >Contact</Link></li>
                
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default Layout