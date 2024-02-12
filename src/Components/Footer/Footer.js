import React from 'react';
import blacklogo from '../assests/brand-logo-white.png'
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className="footer-body">
                <div className="footer-links-1">
                    <div className="footer-header">
                        <img src={blacklogo} alt="" />
                    </div>
                    <div className="footer-content">
                        <span>Privacy & Policy</span>
                        <span>Terms & Conditions</span>
                        <span>FAQ</span>
                    </div>
                </div>
                <div className="footer-links-2">
                    <div className="footer-header">
                        USEFUL LINKS
                    </div>
                    <div className="footer-content">
                        <span>Blog</span>
                        <span>About Us</span>
                        <span>Education</span>
                        <span>Contact Us</span>
                    </div>
                </div>
                <div className="footer-links-3">
                    <div className="footer-header">
                        RECENT POSTS
                    </div>
                    <div className="footer-content">

                    </div>
                </div>
                <div className="footer-links-4">
                    <div className="footer-header">
                        SOCIAL MEDIA
                    </div>
                    <div className="footer-content">
                        <div className="social-media-links" id='social-media-links'>
                            <BsInstagram />
                            <BsGithub />
                            <BsLinkedin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
