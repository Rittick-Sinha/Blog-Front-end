import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";
import Login from '../Login/Login';
import logo from '../assests/brand-logo-white.png'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)', // Black with some transparency
          },
    },
};


const Navbar = () => {

    const [visible, setVisible] = useState(false)

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
                        {/* <li><NavLink to="/signin">SIGN-IN</NavLink></li>
                        <li id='register'><NavLink to="/register">REGISTER</NavLink></li> */}
                        <li><button onClick={() => setVisible(true)}>SIGN-IN</button></li>
                        <Modal isOpen={visible}
                            style={customStyles}
                            onRequestClose={() => setVisible(false)}>
                            <Login />
                            {/* <h1>hello</h1> */}
                        </Modal>
                        <li id='register'>REGISTER</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
