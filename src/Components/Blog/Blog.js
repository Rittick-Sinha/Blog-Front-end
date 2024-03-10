import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BlogCard from '../BlogCard/BlogCard'
import SearchButton from '../Search button/Search';
import img1 from "../assests/travel.jpg";
import img2 from "../assests/food.png";
import './blog.css';
const Blog = () => {
    return (
        <>
            <Navbar />
            <div className="blog-body">
                <div className="boxx1">
                    <BlogCard />
                </div>
                {/* <div className="boxx2">
                    <div className="content">
                        <SearchButton />
                        <div className="categories">
                            <span>Categories</span>
                            <span1>Food</span1>
                            <span1>Technology</span1>
                            <span1>Travel</span1>
                            <span1>Food</span1>
                            <span1>Tourism</span1>
                        </div>
                        <div className="recent-post">
                            <div className="header">
                                RECENT POSTS
                            </div>
                            <div className="card">
                                <div className="img">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="content">
                                    <span>Culinary Crossroads: Exploring the Fusion of Flavors</span>
                                    <span2>Feburary 12, 2024</span2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="content">
                                    <span> Wanderlust Chronicles: Unveiling the Hidden Gems of Southeast Asia</span>
                                    <span2>Feburary 10, 2024</span2>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="content">
                                    <span> Wanderlust Chronicles: Unveiling the Hidden Gems of Southeast Asia</span>
                                    <span2>Feburary 10, 2024</span2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer />
        </>
    );
}

export default Blog;
