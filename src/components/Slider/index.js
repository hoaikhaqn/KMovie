import React, { useEffect } from "react";
import "./style.css";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
const opSLideshow = {
    items: 1,
    nav: true,
    dots: false,
    navText: ['<i class="icofont-long-arrow-left"></i>', '<i class="icofont-long-arrow-right"></i>'],
    rewind: true,
    autoplay: true,
    loop: true,
};
export default function Slider(props) {
    useEffect(()=>{})
    return (
        <div className="slider-module">
            {/*<!-- SLIDER SECTION --->*/}
            <div className="zmovo-slider-area">
                <OwlCarousel options={opSLideshow}>
                    <div className="item">
                        <div className="zmovo-slider-contents">
                            <img src="./assets/images/slider/1/1.jpg" alt="" />
                            <div className="zmovo-slide-content">
                                <div className="container">
                                    <div className="zmovo-slider-contetn">
                                        <div className="zmovo-slider-premium-tag">
                                            <span className="c2-bg">premium</span>
                                            <label>Period Adventure</label>
                                        </div>
                                        <a href="/">IT 2</a>
                                        <div className="zmovo-slide-cat">
                                            <ul>
                                                <li><span>Category : </span>English Movies - 2018</li>
                                                <li><span>Genre : </span>Action, Horror </li>
                                            </ul>
                                        </div>
                                        <div className="zmovo-slide-ply-btn">
                                            <a href="/" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup"><img src="./assets/images/play-button.png" alt="" />Play Trailer</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="zmovo-slider-contents">
                            <img src="./assets/images/slider/1/2.jpg" alt="" />
                            <div className="zmovo-slide-content">
                                <div className="container">
                                    <div className="zmovo-slider-contetn">
                                        <div className="zmovo-slider-premium-tag">
                                            <span className="c2-bg">premium</span>
                                            <label>Period Adventure</label>
                                        </div>
                                        <a href="/">Alpha</a>
                                        <div className="zmovo-slide-cat">
                                            <ul>
                                                <li><span>Category : </span>English Movies - 2019</li>
                                                <li><span>Genre : </span>Action, Horror </li>
                                            </ul>
                                        </div>
                                        <div className="zmovo-slide-ply-btn">
                                            <a href="/" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup"><img src="./assets/images/play-button.png" alt="" />Play Trailer</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}