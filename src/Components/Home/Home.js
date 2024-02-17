import React from 'react';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import logo from '../assests/brand-logo-white.png';
import img from '../assests/img-01.png';
import img1 from '../assests/image1.png';
import img2 from '../assests/image2.png';
import img3 from '../assests/image3.png';
import img4 from '../assests/image4.png';
import img5 from '../assests/image5.png';
import img6 from '../assests/image6.png';
import profile from "../assests/profile.jpg"
import profile1 from "../assests/profile1.jpeg"
import { MdNightlife } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { IoFastFood } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import './Home.css';
const Home = () => {
    return (
        <>
            <NavBar />
            <div className="box1">
                <div className="content">
                    <span>Blog</span>
                    <img src={logo} alt="" />
                    <p>Explore our dynamic blog for captivating content on a variety of topics. From trends to tips and inspiring stories, join our community as we learn and share together!</p>
                    <a href='/#'>LEARN MORE</a>
                </div>
                <div className="layer">
                    <img src={img} alt="" width="620px" /></div>
            </div>
            <div className="box2">
                <div className="sub-content1">
                    <span1>Our Mission</span1>
                    <span2>WHAT WE ARE <span3>WORKING</span3> FOR</span2>
                    <p>Our mission is to inform, inspire, and connect through engaging content on our blog. Join us as we share stories, insights, and ideas to enrich your journey. </p>
                </div>
                <div className="sub-content2">
                    <div className="card">
                        <MdNightlife />
                        <span1>Personal Blogs</span1>
                        <span2>These are typically reflections of the author's personal experiences, thoughts, and opinions. </span2>
                    </div>
                    <div className="card">
                        <SiYourtraveldottv />
                        <span1>Travel Blogs</span1>
                        <span2>Travel blogs inspire and inform readers about destinations worldwide with experiences, tips, itineraries, and guides.</span2>
                    </div>
                    <div className="card">
                        <IoFastFood />
                        <span1>Food Blogs</span1>
                        <span2>Food blogs share recipes, cooking tips, and restaurant reviews for food enthusiasts and home cooks.</span2>
                    </div>
                    <div className="card">
                        <GrTechnology />
                        <span1>Tech Blogs</span1>
                        <span2>Tech blogs offer insights on technology products, services, and trends for enthusiasts and professionals.</span2>
                    </div>
                </div>
            </div>
            <div className="box3">
                <div className="sub-content1">
                    <span1>latest <span2>post</span2></span1>
                    <p>Our latest blog post explores sustainable travel, featuring eco-friendly destinations and tips to reduce your carbon footprint while exploring the world.</p>
                </div>
                <div className="sub-content2">
                    <div className="img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="content">
                        <span>Lorem ipsum dolor sit amet</span>
                        <span1>September 7, 2023</span1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <a href="/#">read more</a>
                    </div>
                </div>
            </div>
            <div className="box4">
                <div className="sub-box">
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="content">
                                <span>Blog Title</span>
                                <span2>September 7, 2023</span2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="content">
                                <span>Blog Title</span>
                                <span2>September 7, 2023</span2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
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
                        <div className="sub-card">
                            <div className="img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="content">
                                <span>Blog Title</span>
                                <span2>September 7, 2023</span2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="content">
                                <span>Blog Title</span>
                                <span2>September 7, 2023</span2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="content">
                                <span>Blog Title</span>
                                <span2>September 7, 2023</span2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="content">
                                <span>Blog Title</span>
                                <span2>September 7, 2023</span2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="content">
                                <span>Blog Title</span>
                                <span2>September 7, 2023</span2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="content">
                                <span>Blog Title</span>
                                <span2>September 7, 2023</span2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                <a href="/#"><span>read more</span></a>
                            </div>
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
            <div className="box7">
                <div className="card">
                    <div className="img">
                        <img src={img5} alt="" />
                    </div>
                    <div className="content">
                        <span>April <span1>22</span1><span3>nd</span3></span>
                        <span2>Earth Day</span2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                        <a href="/#">learn more</a>
                    </div>
                </div>
            </div>
            <div className="box8">
                <div className="sub-content1">
                    <span>featured <span1>comments</span1></span>
                </div>
                <div className="sub-content2">
                    <div className="card">
                        <div className="img">
                            <img src={profile} alt="" />
                        </div>
                        <span>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”</span>
                        <div className="stroke"></div>
                        <span1>Rittick Sinha</span1>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src={profile} alt="" />
                        </div>
                        <span>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”</span>
                        <div className="stroke"></div>
                        <span1>Rittick Sinha</span1>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src={profile} alt="" />
                        </div>
                        <span>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”</span>
                        <div className="stroke"></div>
                        <span1>Rittick Sinha</span1>
                    </div>
                </div>
                <div className="sub-content3">
                    <div className="arrow1">
                        <IoIosArrowBack />
                    </div>
                    <div className="arrow2">
                        <IoIosArrowForward />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Home;
