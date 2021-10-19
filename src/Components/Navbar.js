import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { Button } from "./Button";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
};

useEffect(() => {
    showButton()
}, []);

window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick=
          {closeMobileMenu}>
            TLF <i className="fas fa-utensils" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <i className="fas fa-home"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/get"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <i className="far fa-heart"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/map"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <i className="fas fa-map-marker-alt"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/home"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                <i className="far fa-user"></i>
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'><i className="far fa-user"></i></Button>} 
        </div>
      </nav>
    </>
  );
}

export default Navbar;
