import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Contact.css';
const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact-body">
                <div className="box1">
                    <div className="sub-box1">
                        <span>We’d love to
                            hear from you</span>
                        <div className="email">
                            <span1>Email us</span1>
                            <a href="mailto: sinharittick5@gmail.com">sinharittick5@gmail.com</a>
                        </div>
                        <div className="connect">
                            <span2>Connect with me.</span2>
                            <div className="icons">
                                <a href="https://www.instagram.com/rittick.sinha/" target='blank'><BsInstagram /></a>
                                <a href="https://github.com/Rittick-Sinha" target='blank'><BsGithub /></a>
                                <a href="https://www.linkedin.com/in/rittick-sinha-1a4a87166/" target='blank'><BsLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box2">
                    <div className="sub-box2">
                        <span>Send a <span1>message</span1></span>
                        <form >
                            <input type="text" placeholder="Your Name" name="text" />
                            <input type="text" placeholder="Your Email" name="text" />
                            <input type="text" placeholder="Your Subject" name="text" className='subject' />
                            <textarea type="text" placeholder="Your Message" name="text" className='message' />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
