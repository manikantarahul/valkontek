import {useState} from 'react';
import { Link as ScrollLink } from "react-scroll";

import { Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css'; // Custom CSS

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    
    setMenuOpen(false);
   
  };
   const navItems = [
    "About",
    "Services",
    "Products",
    "Clients",
    "ContactUs",
  ];
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section about">
          <h2 className="logo-text"><span>Val</span>kontek</h2>
          <p>
            Driving Innovation, Powering Possibilities. Leading provider of embedded IoT services, automotive electronics, and cutting-edge technology solutions.
          </p>
          <div className="socials">
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="social-icon"><Linkedin /></a>
            <a href="https://x.com/"           aria-label="Twitter" className="social-icon"><Twitter /></a>
            <a href="https://www.facebook.com" aria-label="Facebook" className="social-icon"><Facebook /></a>
            <a href="https://www.instagram.com"aria-label="Instagram" className="social-icon"><Instagram /></a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
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
            
        </div>

        <div className="footer-section services">
          <h3>Our Services</h3>
          <ul>
            <li>Automotive Electronics</li>
            <li>Embedded Systems</li>
            <li>IoT Solutions</li>
            <li>Industrial Automation</li>
            <li>Edge-AI Development</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p><MapPin className="icon" /> #201, SM Reddy Complex, Capital Park Lane, Near Image Gardens,
Madhapur, Hyderabad, TS 500081, India – 560001</p>
          <p><Phone className="icon" /> +91 85558 41414</p>
          <p><Mail className="icon" /> info@valkontek.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Valkontek Embedded IoT Services Pvt. Ltd. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;
