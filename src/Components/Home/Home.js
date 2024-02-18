import React from 'react';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import logo from '../assests/brand-logo-white.png';
import img from '../assests/img1-01.png';
import img1 from '../assests/quantum-computing.jpg';
import img2 from '../assests/food.png';
import img3 from '../assests/travel.jpg';
import mind from '../assests/mind.jpg';
import magic from '../assests/magic.jpg';
import selfcare from '../assests/selfcare.jpg';
import financial from '../assests/financial.jpg';
import productivity from '../assests/productivity.jpg';
import eco from '../assests/eco.jpg';
import img5 from '../assests/image5.png';
import profile from "../assests/profile.jpg"
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
                    <p>Welcome to our new blog website, your go-to for insightful articles, engaging stories, and valuable resources. Dive into a world where knowledge meets creativity, where curiosity is fueled, and inspiration awaits at every click. Join our community of readers, thinkers, and enthusiasts as we explore, learn, and grow together.</p>
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
                        <span>The Rise of Quantum Computing: Unlocking the Future</span>
                        <span1>Feburary 18, 2024</span1>
                        <p>Explore how quantum computing is revolutionizing industries and reshaping our understanding of computational power.</p>
                        <a href="/#">read more</a>
                    </div>
                </div>
            </div>
            <div className="box4">
                <div className="sub-box">
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={img2} alt="" />
                            </div>
                            <div className="content">
                                <span>Culinary Crossroads: Exploring the Fusion of Flavors</span>
                                <span2>Feburary 12, 2024</span2>
                                <p>Embark on a gastronomic adventure as we delve into the delightful world of fusion cuisine, where cultures collide and flavors unite.</p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={img3} alt="" />
                            </div>
                            <div className="content">
                                <span> Wanderlust Chronicles: Unveiling the Hidden Gems of Southeast Asia</span>
                                <span2>Feburary 10, 2024</span2>
                                <p>Embark on a journey of discovery as we uncover the enchanting allure of Southeast Asia's lesser-known destinations.</p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box5">
                <div className="divison">
                    <div className="sub-divison1">
                        <span>Featured <span1>post</span1></span>
                        <span2>Explore our captivating featured post for insightful perspectives, trending topics, and engaging content that'll keep you hooked!</span2>
                    </div>
                    <div className="sub-divison2">
                        <a href="/#">show more</a>
                    </div>
                </div>
                <div className="divison1">
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={mind} alt="" />
                            </div>
                            <div className="content">
                                <span>The Power of Mindfulness: Nurturing Mental Well-being</span>
                                <span2>December 27, 2023</span2>
                                <p>Discover the transformative benefits of mindfulness practices and cultivate inner peace in a fast-paced world.</p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={eco} alt="" />
                            </div>
                            <div className="content">
                                <span>Eco-Friendly Living: Small Changes, Big Impact</span>
                                <span2>December 27, 2023</span2>
                                <p>Explore simple yet effective ways to adopt a more sustainable lifestyle and contribute to a greener future.</p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={productivity} alt="" />
                            </div>
                            <div className="content">
                                <span>Mastering the Art of Productivity: Strategies for Success</span>
                                <span2>December 27, 2023</span2>
                                <p>Unlock the secrets to maximizing your productivity and achieving your goals with practical tips and proven techniques.</p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={magic} alt="" />
                            </div>
                            <div className="content">
                                <span>The Magic of Storytelling: Connecting Through Narrative</span>
                                <span2>December 26, 2023</span2>
                                <p>Dive into the world of storytelling and learn how harnessing the power of narrative can foster empathy, understanding, and connection.</p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={financial} alt="" />
                            </div>
                            <div className="content">
                                <span>Financial Fitness 101: A Guide to Smart Money Management</span>
                                <span2>December 26, 2023</span2>
                                <p>Take control of your finances and build a secure future with essential financial literacy tips and strategies.</p>
                                <a href="/#"><span>read more</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="sub-card">
                            <div className="img">
                                <img src={selfcare} alt="" />
                            </div>
                            <div className="content">
                                <span>Embracing Self-Care: Prioritizing Your Well-being</span>
                                <span2>December 26, 2023</span2>
                                <p>Explore the importance of self-care practices and discover meaningful ways to nurture your physical, emotional, and mental health.</p>
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
                        <span2>Which TV show are you currently binge-watching?</span2>
                    </div>
                    <div className="content1">
                        <div className="sub-box">
                            <div className="circle"><span>A</span></div>
                            <div className="option">"Stranger Things"</div>
                        </div>
                        <div className="sub-box">
                            <div className="circle"><span>B</span></div>
                            <div className="option">"The Crown"</div>
                        </div>
                        <div className="sub-box">
                            <div className="circle"><span>C</span></div>
                            <div className="option">"The Mandalorian"</div>
                        </div>
                        <div className="sub-box">
                            <div className="circle"><span>D</span></div>
                            <div className="option">"Bridgerton"</div>
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
                        <p>Earth Day, celebrated annually on April 22nd, is a global event promoting environmental awareness and action. It's a day for individuals and communities to come together to engage in activities aimed at protecting and preserving our planet, such as tree planting, cleanups, and educational initiatives.</p>
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
                        <span>"Wow, your blog is incredibly insightful and well-written! I always look forward to reading your posts for inspiration and knowledge."</span>
                        <div className="stroke"></div>
                        <span1>Rittick Sinha</span1>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src={profile} alt="" />
                        </div>
                        <span>"Thank you for sharing your expertise through your blog. Your passion for the subject matter truly shines through in every article."</span>
                        <div className="stroke"></div>
                        <span1>Rittick Sinha</span1>
                    </div>
                    <div className="card">
                        <div className="img">
                            <img src={profile} alt="" />
                        </div>
                        <span>"Your blog has quickly become one of my favorites to follow. I appreciate the variety of topics you cover and the depth of research you put into each post."</span>
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
