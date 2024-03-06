import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MovingCard from '../Moving_card/Moving_card';
import profile from '../assests/profile.jpg'
import './About.css';
const About = () => {

    return (
        <>
            <Navbar />
            <div className="about-body">
                <div className="box1">
                    <div className="sub-box1">
                        <div className="img">
                            <img src={profile} width='320px' alt="" />
                        </div>
                        <span>Rittick Sinha</span>
                        <span1>Founder</span1>
                    </div>
                    <div className="sub-box2">
                        <div className="content">
                            <span>About us</span>
                            <span1>
                                Step into the captivating realm of <b>Ektour Blog</b>, where a tapestry of narratives, musings, and sparks of creativity await! More than a mere blog, we stand as a bustling hub, a virtual haven for the spirited souls who find solace and joy in the art of expression. Within our digital walls, a vibrant community of writers, thinkers, and visionaries converges, linked by a profound adoration for the written craft and the limitless realms it unveils.
                                <br /><br />
                                Here, each post is a portal, beckoning you to journey through a myriad of stories and ideas that dance with life. Whether you're drawn to tales of adventure that transport you to distant lands, or in search of poignant reflections that stir the depths of your soul, <b>Ektour Blog</b> offers a cornucopia of inspiration.
                                <br /><br />
                                But we are more than just a repository of words. We are a living, breathing entity, fueled by the passion and creativity of our diverse contributors. From the seasoned wordsmiths who weave intricate plots to the budding poets penning verses of raw emotion, every voice finds a home here.</span1>
                        </div>
                    </div>
                </div>
                <div className="boxx2">
                    <div className="card">
                        <span>our <span1>story</span1></span>
                        <div className="content">
                            <span2>Founded in 2024, <b>Ektour Blog</b> began with a simple idea: to provide a platform where voices from all walks of life could come together to share their stories, experiences, and insights. What started as a small venture has now blossomed into a vibrant hub of diverse perspectives, thought-provoking discussions, and enriching content.</span2>
                        </div>
                    </div>
                    <div className="card">
                        <span>our <span1>Mission</span1></span>
                        <div className="content">
                            <span2>At <b>Ektour Blog</b>, our mission is clear: to empower individuals to express themselves freely, to learn from one another, and to foster a sense of belonging within our community. We strive to create a space where creativity knows no bounds, where curiosity is celebrated, and where every voice is heard.</span2>
                        </div>
                    </div>
                    <div className="card">
                        <span>What We <span1>Offer</span1></span>
                        <div className="content">
                            <span2>Whether you're a seasoned writer, a budding blogger, or someone simply looking for inspiration, <b>Ektour Blog</b> has something for you. From in-depth articles on a wide range of topics to personal essays that tug at the heartstrings, our content is as diverse as our community.</span2>
                        </div>
                    </div>
                </div>
                <div className="boxx3">
                    <p>Some Testimonial</p>
                    <p1>What People Say About Us</p1>
                    <MovingCard />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
