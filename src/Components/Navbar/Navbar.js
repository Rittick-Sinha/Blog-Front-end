import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";
import Login from '../Login/Login';
import Register from '../Register/Register';
import logo from '../assests/brand-logo-white.png'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { LuAlignJustify } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import './style1.css'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [loginvisible, setloginVisible] = useState(false)
    const [registervisible, setregisterVisible] = useState(false)

    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="" width="150px" />
                </div>
                <div className="nav-list">
                    <button className="toggle-button" onClick={toggleMenu}>
                        {isOpen ? <LuAlignJustify fontSize={'24px'} /> : <RxCross2 fontSize={'24px'} />}
                    </button>
                    {isOpen && (<ul>
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
                    </ul>)}
                </div>
            </div >
        </>
    );
}

export default Navbar;
