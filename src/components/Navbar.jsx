import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      {/* <nav>
        <input type="checkbox" id="toggler" />
        <label for="toggler">
          <i class="ri-menu-line">ffefe</i>
        </label>

        <div className="navbar">
          <NavLink to="/">
            <span className="logo">ALTCODE</span>
          </NavLink>
          <ol className="navigation">
            <NavLink to="/">
              <li className="nav-link">Home</li>
            </NavLink>
            <NavLink to="/price">
              <li className="nav-link">Pricing</li>
            </NavLink>
            <NavLink to="/why-us">
              <li className="nav-link">Why Us</li>
            </NavLink>
            <NavLink to="/works">
              <li className="nav-link">Our Work</li>
            </NavLink>
          </ol>

          <NavLink to="/contact">
            <span className="nav-link nav-link__button">Contact Us</span>
          </NavLink>
        </div>
      </nav> */}

      <nav class="navbar">
        <a href="/" class="logo">
          <span>ALTCODE</span>
        </a>
        <input type="checkbox" id="toggler" />
        <label for="toggler">
          <i class="ri-menu-line">X</i>
        </label>

        <div class="menu">
          <ol className="list">
            <NavLink to="/">
              <li className="nav-link">Home</li>
            </NavLink>
            <NavLink to="/price">
              <li className="nav-link">Pricing</li>
            </NavLink>
            <NavLink to="/why-us">
              <li className="nav-link">Why Us</li>
            </NavLink>
            <NavLink to="/works">
              <li className="nav-link">Our Work</li>
            </NavLink>
            <NavLink to="/contact" className="nav-link__hidden">
              <li className="nav-link">Contact Us</li>
            </NavLink>
          </ol>
        </div>

        <NavLink to="/contact" className="button__hidden">
          <span className="nav-link nav-link__button">Contact Us</span>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
