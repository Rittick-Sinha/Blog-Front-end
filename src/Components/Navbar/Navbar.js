import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";
import logo from '../assests/brand-logo-white.png'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="" width="150px" />
                </div>
                <div className="nav-list">
                    <ul>
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="/blog">BLOG</NavLink></li>
                        <li><NavLink to="/about">ABOUT</NavLink></li>
                        <li><NavLink to="/contact">CONTACT</NavLink></li>
                        <li><NavLink to="/signin">SIGN-IN</NavLink></li>
                        <li id='register'><NavLink to="/register">REGISTER</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
