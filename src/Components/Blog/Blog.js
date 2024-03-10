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
            </div>
            <Footer />
        </>
    );
}

export default Blog;
