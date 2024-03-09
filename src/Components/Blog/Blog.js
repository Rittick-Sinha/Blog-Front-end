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
                    <SearchButton />
                    <div className="categories">
                        <ul>
                            <li>Food</li>
                            <li>Technology</li>
                            <li>Travel</li>
                            <li>Food</li>
                            <li>Tourism</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog;
