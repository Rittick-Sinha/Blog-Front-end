import React from 'react';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import logo from '../assests/brand-logo-white.png';
import img1 from '../assests/image1.png';
import img2 from '../assests/image2.png';
import img3 from '../assests/image3.png';
import img4 from '../assests/image4.png';
import img5 from '../assests/image5.png';
import img6 from '../assests/image6.png';

import { BsRecycle } from "react-icons/bs";
import './Home.css';
const Home = () => {
    return (
        <>
            <NavBar />
            <div className="box1">
                <div className="layer">
                    <div className="content">
                        <span>Blog</span>
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href='/#'>LEARN MORE</a>
                    </div>
                </div>
            </div>
            <div className="box2">
                <div className="sub-content1">
                    <span1>Our Mission</span1>
                    <span2>WHAT WE ARE <span3>WORKING</span3> FOR</span2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                </div>
                <div className="sub-content2">
                    <div className="card">
                        <BsRecycle />
                        <span1>Recycling</span1>
                        <span2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </span2>
                    </div>
                    <div className="card">
                        <BsRecycle />
                        <span1>Eco System</span1>
                        <span2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </span2>
                    </div>
                    <div className="card">
                        <BsRecycle />
                        <span1>Water Refine</span1>
                        <span2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </span2>
                    </div>
                    <div className="card">
                        <BsRecycle />
                        <span1>Tourism</span1>
                        <span2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </span2>
                    </div>
                </div>
            </div>
            <div className="box3">
                <div className="sub-content1">
                    <span1>latest <span2>post</span2></span1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                </div>
                <div className="sub-content2">
                    <img src={img1} alt="" />
                    <div className="content">
                        <span>Lorem ipsum dolor sit amet</span>
                        <span1>September 7, 2023</span1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <a href="/#">read more</a>
                    </div>
                </div>
            </div>
            <div className="box4">
                <div className="card">
                    <div className="img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="content">
                        <span1>Lorem ipsum dolor sit amet</span1>
                        <span2>Environment, Go green</span2>
                        <span3>September 7, 2023</span3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <a href="/#">Read more</a>
                    </div>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="content">
                        <span1>Lorem ipsum dolor sit amet</span1>
                        <span2>Environment, Go green</span2>
                        <span3>September 7, 2023</span3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <a href="/#">Read more</a>
                    </div>
                </div>
            </div>
            <div className="box5">
                <div className="divison">
                    <div className="sub-divison1">
                        <span>latest <span1>post</span1></span>
                        <span2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </span2>
                    </div>
                    <div className="sub-divison2">
                        <a href="/#">show more</a>
                    </div>
                </div>
                <div className="divison1">
                    <div className="card">
                        <div className="img">
                            <img src={img4} alt="" />
                        </div>
                        <div className="content">
                            <span>Blog Title</span>
                            <span1>Environment, Go green</span1>
                            <span2>September 7, 2023</span2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                            <a href="/#">read more</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src={img4} alt="" />
                        </div>
                        <div className="content">
                            <span>Blog Title</span>
                            <span1>Environment, Go green</span1>
                            <span2>September 7, 2023</span2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                            <a href="/#">read more</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src={img4} alt="" />
                        </div>
                        <div className="content">
                            <span>Blog Title</span>
                            <span1>Environment, Go green</span1>
                            <span2>September 7, 2023</span2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                            <a href="/#">read more</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src={img4} alt="" />
                        </div>
                        <div className="content">
                            <span>Blog Title</span>
                            <span1>Environment, Go green</span1>
                            <span2>September 7, 2023</span2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                            <a href="/#">read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box6">
                <div className="layer">
                    <div className="content">
                        <span>polls <span1>& surveys</span1></span>
                        <span2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </span2>
                    </div>
                    <div className="content1">
                        <div className="sub-box">
                            <div className="circle"><span>A</span></div>
                            <div className="option">Lorem ipsum</div>
                        </div>
                        <div className="sub-box">
                            <div className="circle"><span>B</span></div>
                            <div className="option">Lorem ipsum</div>
                        </div>
                        <div className="sub-box">
                            <div className="circle"><span>C</span></div>
                            <div className="option">Lorem ipsum</div>
                        </div>
                        <div className="sub-box">
                            <div className="circle"><span>D</span></div>
                            <div className="option">Lorem ipsum</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
