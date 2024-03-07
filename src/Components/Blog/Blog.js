import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BlogCard from '../BlogCard/BlogCard'
import './blog.css';
const Blog = () => {
    return (
        <>
            <Navbar />
            <div className="blog-body">
                <div className="boxx1">
                    <BlogCard />
                </div>
                <div className="boxx2">
                    
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog;
