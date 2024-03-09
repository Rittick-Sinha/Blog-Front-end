import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import BlogCard from '../BlogCard/BlogCard'
import SearchButton from '../Search button/Search';
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
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog;
