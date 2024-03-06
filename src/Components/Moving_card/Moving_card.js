import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Style.css';
import profile from "../assests/profile.jpg"
const MovingCard = () => {
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
        }
    };
    return (
        <>
            <div className="moving-card">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={1500}
                    centerMode
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={responsive}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay={false}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable>
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
                        <span>"Wow, your blog is incredibly insightful and well-written! I always look forward to reading your posts for inspiration and knowledge."</span>
                        <div className="stroke"></div>
                        <span1>Rittick Sinha</span1>
                    </div>
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
                        <span>"Wow, your blog is incredibly insightful and well-written! I always look forward to reading your posts for inspiration and knowledge."</span>
                        <div className="stroke"></div>
                        <span1>Rittick Sinha</span1>
                    </div>
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
                        <span>"Wow, your blog is incredibly insightful and well-written! I always look forward to reading your posts for inspiration and knowledge."</span>
                        <div className="stroke"></div>
                        <span1>Rittick Sinha</span1>
                    </div>
                </Carousel>
            </div>
        </>
    );
}

export default MovingCard;
