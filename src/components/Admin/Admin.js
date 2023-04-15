import React, { useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';

const Admin = () => {
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
          <a href="#" className="nav__brand">
            <h2>
              <span> Fitness  </span> <span className="sec">Fiber</span>
            </h2>
          </a>
          <ul className={active}>
            <li className="nav__item">
              <Link to='/portal/home' className="nav__link">          
                Dashboard
                </Link>
            </li>
            <li className="nav__item">
              <Link to='/admin/addequipment' className="nav__link">          
                Add Equipments
                </Link>
            </li>
    
            <li className="nav__item">
            <Link to='/admin/testimonialview' className="nav__link">
                Testimonial
                </Link>
            </li>
            <li className="nav__item">
            <Link to='/admin/contactview' className="nav__link">
               User Contact
                </Link>
            </li>
           
            <li className="nav__item">
            <Link to="/" className="nav__link">
                <span>Logout</span>
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
  )
}

export default Admin 














