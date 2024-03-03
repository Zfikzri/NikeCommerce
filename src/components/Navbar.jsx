import React, { useState } from 'react'
import "./Navbar.css"

 function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  return (
    <nav>
     <div className="logo">
      <h2>Nike</h2>
     </div>
     <ul>
      <li><a href="#home" className={activeLink === "Home" ? "active" : ""} onClick={() => handleLinkClick("Home")}>Home</a></li>
      <li><a href="#about" className={activeLink === "About" ? "active" : ""} onClick={() => handleLinkClick("About")}>About</a></li>
      <li><a href="#service" className={activeLink === "Service" ? "active" : ""} onClick={() => handleLinkClick("Service")}>Services</a></li>
      <li><a href="#menu" className={activeLink === "Menu" ? "active" : ""} onClick={() => handleLinkClick("Menu")}>Menu</a></li>
      <li><a href="#contact" className={activeLink === "Contact Us" ? "active" : ""} onClick={() => handleLinkClick("Contact Us")}>Contact Us</a></li>
     </ul>
    </nav>
  )
}
export default Navbar;