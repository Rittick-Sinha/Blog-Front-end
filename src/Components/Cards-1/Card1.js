import React from 'react';
import './Card1.css'
import img4 from '../assests/image4.png';
const Card1 = () => {
    return (
        <>
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
        </>
    );
}

export default Card1;
