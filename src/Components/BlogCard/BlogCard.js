import React from 'react';
import './blogcard.css';
import mind from '../assests/mind.jpg';
import eco from '../assests/eco.jpg';
import financial from '../assests/financial.jpg';
import selfcare from '../assests/selfcare.jpg';
import magic from '../assests/magic.jpg';
import productivity from '../assests/productivity.jpg';

const BlogCard = () => {
    return (
        <>
            <div className="blog-card">
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
            <div className="blog-card">
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
            <div className="blog-card">
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
            <div className="blog-card">
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
            <div className="blog-card">
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
            <div className="blog-card">
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
        </>
    );
}

export default BlogCard;
