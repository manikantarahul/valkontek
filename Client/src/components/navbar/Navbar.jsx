import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

import valkontek from "../../assets/valkontek logo.png"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    
    setMenuOpen(false);
   
  };

  const navItems = [
    "Home",
    "About",
    "Services",
    "Products",
    "Clients",
    "Why Choose Us",
    "ContactUs",
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <img src={valkontek} alt="" className="brand"/>

        {/* Desktop Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => {
          const sectionId=item.toLowerCase().replace(/\s/g,"-")
          return(
            <li key={item}>
              <ScrollLink
                to={sectionId}
                smooth={false}
                duration={700}
                 offset={-60} 
                onClick={handleLinkClick}
              >
                {item}
              </ScrollLink>
            </li>
          )
    })}
        </ul>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};




export default Navbar;
