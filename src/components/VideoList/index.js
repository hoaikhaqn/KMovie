import React, { useEffect } from "react";
import "./style.css";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
const opVideo = {
    items: 1,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: false,
    rewind: true,
    autoplay: true,
    loop: true,
};
export default function VideoList(props) {
    useEffect(() => {})
    return (
        <div className="zmovo-video-list-items">
            {/*<!-- SLIDE MOVIE -->*/}
            <div className="bigplay open1">
                <OwlCarousel options={opVideo}>
                    <div className="item">
                        <div className="zmovo-video-list-ply hover12">
                            <div className="hover-box">
                                <img className="show-video" src="./assets/images/video-play/1.jpg" alt="" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" />
                                <div className="zmovo-h-btn">
                                    <a className="video-play-button show-video" href="/" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA">
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="zmovo-video-list-ply hover12">
                            <div className="hover-box">
                                <img className="show-video" src="./assets/images/video-play/2.jpg" alt="" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" />
                                <div className="zmovo-h-btn">
                                    <a className="video-play-button show-video" href="/" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA">
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
            {/*<!-- END SLIDE MOVIE -->*/}
            <div className="zmovo-v-list-items mt-30">
                <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="zmovo-v-list-item active">
                            <div className="zmovo-v-list-i-img">
                                <img src="./assets/images/video-play/small/1.jpg" alt="" />
                            </div>
                            <div className="zmovo-v-list-content">
                                <div className="zmovo-v-tag c2"><span>English,2019</span></div>
                                <a href="/">The Happy Nutcracker and the </a>
                                <div className="movie-time"><i className="fa fa-clock-o c1"></i><span>2 Hr 3 Min</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <div className="zmovo-v-list-item">
                            <div className="zmovo-v-list-i-img">
                                <img src="./assets/images/video-play/small/2.jpg" alt="" />
                            </div>
                            <div className="zmovo-v-list-content">
                                <div className="zmovo-v-tag c2"><span>English,2019</span></div>
                                <a href="/">I Dream in Another Language </a>
                                <div className="movie-time"><i className="fa fa-clock-o c1"></i><span>2 Hr 3 Min</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <div className="zmovo-v-list-item mt-30">
                            <div className="zmovo-v-list-i-img">
                                <img src="./assets/images/video-play/small/3.jpg" alt="" />
                            </div>
                            <div className="zmovo-v-list-content">
                                <div className="zmovo-v-tag c2"><span>English,2019</span></div>
                                <a href="/">Horror Movie perfming Main </a>
                                <div className="movie-time"><i className="fa fa-clock-o c1"></i><span>2 Hr 3 Min</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <div className="zmovo-v-list-item mt-30">
                            <div className="zmovo-v-list-i-img">
                                <img src="./assets/images/video-play/small/4.jpg" alt="" />
                            </div>
                            <div className="zmovo-v-list-content">
                                <div className="zmovo-v-tag c2"><span>English,2019</span></div>
                                <a href="/">Movie perfming Main Payal Hai</a>
                                <div className="movie-time"><i className="fa fa-clock-o c1"></i><span>2 Hr 3 Min</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- ALL VIEW -->*/}
            <div className="button pt-30 text-center">
                <a href="/" className="btn btn-radus">view all <span className="fa fa-angle-right"></span></a>
            </div>
            {/*<!-- END ALL VIEW -->*/}
        </div>
    );

}
