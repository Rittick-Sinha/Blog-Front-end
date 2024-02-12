import React from 'react';
import './Navbar.css';
import logo from '../assests/brand-logo-dark.png'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="" width="150px" />
                </div>
                <div className="nav-list">
                    <ul>
                        <li>HOME</li>
                        <li>BLOG</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                        <li>SIGN-IN</li>
                        <li id='register'>REGISTER</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
