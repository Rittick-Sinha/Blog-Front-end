import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";
import Login from '../Login/Login';
import Register from '../Register/Register';
import logo from '../assests/brand-logo-white.png'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './style1.css'


const Navbar = () => {

    const [loginvisible, setloginVisible] = useState(false)
    const [registervisible, setregisterVisible] = useState(false)

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
                        <li><button onClick={() => setloginVisible(true)}>SIGN-IN</button></li>
                        <Modal open={loginvisible}
                            onClose={() => setloginVisible(false)}
                            center>
                            <Login />
                        </Modal>
                        <li><button onClick={() => setregisterVisible(true)}>REGISTER</button></li>
                        <Modal open={registervisible}
                            onClose={() => setregisterVisible(false)}
                            center>
                            <Register />
                        </Modal>
                    </ul>
                </div>
            </div >
        </>
    );
}

export default Navbar;
