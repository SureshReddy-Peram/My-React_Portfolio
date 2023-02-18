import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {FaReact, FaBars} from 'react-icons/fa'
import {HiX} from 'react-icons/hi'

import './Navbar.scss';

const data = [ {
                label:"HOME",
                to : "/"
               },
               {
                label:"ABOUT ME",
                to: "/about"
               }, {
                label:"SKILLS",
                to: "/skills"
               }, {
                label:"RESUME",
                to: "/resume"
               }, {
                label:"PORTFOLIO",
                to: "/portfolio"
               },
               {
                label:"CONTACT",
                to: "/contact"
               }
              ];

const Navbar = () => {

  const [menuIcon, setMenuIcon] = useState(false);

  const handleMenuIcon = () => {
    setMenuIcon(!menuIcon);
  }

  return (
    <div>      
        <nav className="navbar">
         <div className="navbar_container">
          <Link to="/" className="navbar_container_logo ">
            <FaReact size={40} />            
          </Link>        
         </div>
         <ul className="navbar_container_menu">
           {data.map((item, index) => (
            <li key={index} className="navbar_menu_item  m-2">
              <Link to={item.to} className="navbar_menu_link">
                {item.label}
              </Link>
            </li>
           ))}
         </ul>

         <div className="nav_icon" onClick={handleMenuIcon}>
          {menuIcon? <HiX size={40} /> : <FaBars size={40} />} 
         </div>

        </nav>      
    </div>
  )
}

export default Navbar;
