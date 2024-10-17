import React from 'react'
import '../Styles/header.css'; 
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="header">
    <Link to={"/"}><h1 className="header-title" >Movies-Now</h1></Link> 
    <nav className="header-nav">
        <ul>
            <li><Link to={"/"} class='header-links'>Home</Link></li>
            <li><Link to={"/bookings"} class='header-links'>My Bookings</Link></li>
        </ul>
    </nav>
   </header>
  )
}
export default Header
