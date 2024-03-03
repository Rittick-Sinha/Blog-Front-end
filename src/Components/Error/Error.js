import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Error.css';
import img1 from '../assests/Error.png';
const Error = () => {
    return (
        <>
            <Navbar />
            <div className="error-body">
                <div className="box1">
                    <img src={img1} alt="" />
                </div>
                <div className="box2">
                    <div className="content">
                        <span2>404</span2>
                        <span>What on <span1>earth</span1> are you doing here!?</span>
                        <span3>The page you are looking for was moved, removed, renamed or might never existed....</span3>
                        <NavLink to='/'>homepage</NavLink>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Error;
