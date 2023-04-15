
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Avatar } from "@mui/material";

function Navbar({add}) {
 
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <div>
    <nav className="nav">
   
        <h2>
           <span> Fitness  </span> <span className="sec">Fiber</span>
        </h2>
      
      <ul className={active}>
        <li className="nav__item">
          <Link to='/portal/home' className="nav__link">          
            Home
            </Link>

        </li>
       
        <li className="nav__item">
        <Link to='/portal/testimonial' className="nav__link">
            Testimonial
            </Link>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
        <Link to="/portal/cart" className="nav__link">          
            Cart<span><AddShoppingCartIcon/></span>{add}
            </Link>
        </li>
        <li className="nav__item">
        <Link to="/portal/login" className="nav__link">
            <span>Login</span>
            </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
   
    </div>
  );
}

export default Navbar;
