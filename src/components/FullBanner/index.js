import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import "./style.css";
const opFullWidthBanner = {
    items: 1,
    nav: false,
    dots: true,
    rewind: false,
    autoplay: true,
    loop: true,
};
export default function FullBanner(props) {
    useEffect(() => {})

    return (
        <div className="zmovo-fullwidht-banner pt-50">
            <div className="zmovo-fullwidth-b-inner">
                <div className="zmovo-full-banner-bg" style={{ backgroundImage: "url(./assets/images/full-banner.jpg)" }}>
                    <div className="zmovo-slide-content">
                        <div className="container">
                            <div className="items" id="banner">
                                <OwlCarousel  options={opFullWidthBanner}>
                                    <div className="item">
                                        <div className="zmovo-slide-ply-btn text-center">
                                            <a href="/" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup">
                                                <img src="./assets/images/play-button.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="zmovo-slider-contetn">
                                            <div className="zmovo-slider-premium-tag">
                                                <span className="c1-bg">Trailer</span>
                                            </div>
                                            <h2>Upcoming Movies 2019</h2>
                                            <a href="/">The Nutcracker and the Four Realms</a>
                                            <div className="zmovo-v-tag c2">
                                                <span>Romance, English, 2019</span>
                                            </div>
                                            <div className="movie-time"><i className="fa fa-clock-o"></i><span>2 Hr 3 Min</span></div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="zmovo-slide-ply-btn text-center">
                                            <a href="/" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup">
                                                <img src="./assets/images/play-button.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="zmovo-slider-contetn">
                                            <div className="zmovo-slider-premium-tag">
                                                <span className="c1-bg">Trailer</span>
                                            </div>
                                            <h2>Upcoming Movies 2019</h2>
                                            <a href="/">The Nutcracker and the Four Realms</a>
                                            <div className="zmovo-v-tag c2">
                                                <span>Romance, English, 2019</span>
                                            </div>
                                            <div className="movie-time"><i className="fa fa-clock-o"></i><span>2 Hr 3 Min</span></div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="zmovo-slide-ply-btn text-center">
                                            <a href="/" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup">
                                                <img src="./assets/images/play-button.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="zmovo-slider-contetn">
                                            <div className="zmovo-slider-premium-tag">
                                                <span className="c1-bg">Trailer</span>
                                            </div>
                                            <h2>Upcoming Movies 2019</h2>
                                            <a href="/">The Nutcracker and the Four Realms</a>
                                            <div className="zmovo-v-tag c2">
                                                <span>Romance, English, 2019</span>
                                            </div>
                                            <div className="movie-time"><i className="fa fa-clock-o"></i><span>2 Hr 3 Min</span></div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="zmovo-slide-ply-btn text-center">
                                            <a href="/" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" className="video-popup">
                                                <img src="./assets/images/play-button.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="zmovo-slider-contetn">
                                            <div className="zmovo-slider-premium-tag">
                                                <span className="c1-bg">Trailer</span>
                                            </div>
                                            <h2>Upcoming Movies 2019</h2>
                                            <a href="/">The Nutcracker and the Four Realms</a>
                                            <div className="zmovo-v-tag c2">
                                                <span>Romance, English, 2019</span>
                                            </div>
                                            <div className="movie-time"><i className="fa fa-clock-o"></i><span>2 Hr 3 Min</span></div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}