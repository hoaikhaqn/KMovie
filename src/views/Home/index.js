import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useReduceState } from "../../context";
import "./style.css";

// import data from "../../api/data.json";

import $ from "jquery";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";

//Components
// import Loading from "../../containers/DefaultLayout/DefaultLoading";
import Slider from "../../components/Slider";
import VideoList from "../../components/VideoList";
import VideoItem from "../../components/VideoItem";
import FullBanner from "../../components/FullBanner";

// Constant
const opBox = {
  items: 5,
  margin: 30,
  nav: true,
  navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  dots: false,
  rewind: false,
  autoplay: true,
  autoplayTimeout: 2000,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    480: {
      items: 3
    },
    768: {
      items: 4
    },
    1024: {
      items: 5
    }
  }
};
// var _ = require('lodash');
export default function HomePage(props) {
  // setMovieItem
  const { 
    firebase, 
    // setMovieItem
  } = useReduceState();
  const [theater, settheater] = useState();
  const [feature, setfeature] = useState();
  const [series, setseries] = useState();
  const [anime, setanime] = useState();

  useEffect(() => {
    if (!theater) {
      firebase.getDocWithCondition(
        "movie",
        { where: ["type",{id:"phim-chieu-rap",name:"Phim chiếu rạp"}], limit: 10 },
        settheater);
    }
    if (!feature) {
      firebase.getDocWithCondition(
        "movie",
        { where: ["type",{id:"phim-le",name:"Phim lẻ"}], limit: 10 },
        setfeature
      );
    }
    if (!series) {
      firebase.getDocWithCondition(
        "movie",
        { where: ["type",{id:"phim-bo",name:"Phim bộ"}], limit: 10 },
        setseries
      );
    }
    if (!anime) {
      firebase.getDocWithCondition(
        "movie",
        { where: ["genre",{id:"hoat-hinh",name:"Hoạt hình"}], limit: 10 },
        setanime
      );
    }
    // setDocument("dr-stone-2019",data)
  },[theater, feature, series, anime, firebase]);
  
  if (theater && feature && series && anime) {
    $(".main-page").addClass("fadeIn");
  }
  return (
    <div id="HomePage" className="main-page fadeOut">
      {/*<!-- SLIDER SECTION --->*/}
      <Slider />
      {/*<!-- END SLIDER SECTION --->*/}
      {/* <!-- NEW ARRIVALS --> */}
      {theater && theater.length > 0 ? (
        <div className="zmovo-new-arrivals arow-icon">
          <div className="container">
            <div className="zmovo-arrivals-items">
              <div className="zmovo-hadidng pt-50 pb-30">
                <h2>
                  <span className="text-uppercase">Phim chiếu rạp mới</span>
                </h2>
              </div>
              {/* <!-- items --> */}
              <div className="items" id="new-arrivle">
                <OwlCarousel options={opBox}>
                  {/* <!-- ITEM --> */}
                  {theater.map(function (item, key) {
                    return (
                      <div className="item" key={key}>
                        <VideoItem data={item} />
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
              {/* <!-- end items --> */}
              {/* <!-- ALL VIEW --> */}
              <div className="button pt-50 text-center">
                  <Link to="/loai/phim-chieu-rap" className="btn btn-radus">Xem tất cả<span className="fa fa-angle-right"></span></Link>
              </div>
              {/* <!-- END ALL VIEW --> */}
            </div>
          </div>
        </div>
      ) : (
          ""
        )}
      {/* <!-- END NEW ARRIVALS --> */}
      {/* <!-- NEW ARRIVALS --> */}
      {feature && feature.length > 0 ? (
        <div className="zmovo-new-arrivals arow-icon">
          <div className="container">
            <div className="zmovo-arrivals-items">
              <div className="zmovo-hadidng pt-50 pb-30">
                <h2>
                  <span className="text-uppercase">Phim lẻ mới</span>
                </h2>
              </div>
              {/* <!-- items --> */}
              <div className="items" id="new-arrivle">
                <OwlCarousel options={opBox}>
                  {/* <!-- ITEM --> */}
                  {feature.map(function (item, key) {
                    return (
                      <div className="item" key={key}>
                        <VideoItem data={item} />
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
              {/* <!-- end items --> */}
              {/* <!-- ALL VIEW --> */}
              <div className="button pt-50 text-center">
                <Link to="/loai/phim-le" className="btn btn-radus">Xem tất cả<span className="fa fa-angle-right"></span></Link>
              </div>
              {/* <!-- END ALL VIEW --> */}
            </div>
          </div>
        </div>
      ) : (
          ""
        )}
      {/* <!-- END NEW ARRIVALS --> */}
      {/* <!-- NEW ARRIVALS --> */}
      {series && series.length > 0 ? (
        <div className="zmovo-new-arrivals arow-icon">
          <div className="container">
            <div className="zmovo-arrivals-items">
              <div className="zmovo-hadidng pt-50 pb-30">
                <h2>
                  <span className="text-uppercase">Phim bộ mới</span>
                </h2>
              </div>
              {/* <!-- items --> */}
              <div className="items" id="new-arrivle">
                <OwlCarousel options={opBox}>
                  {/* <!-- ITEM --> */}
                  {series.map(function (item, key) {
                    return (
                      <div className="item" key={key}>
                        <VideoItem data={item} />
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
              {/* <!-- end items --> */}
              {/* <!-- ALL VIEW --> */}
              <div className="button pt-50 text-center">
                <Link to="/loai/phim-bo" className="btn btn-radus">Xem tất cả<span className="fa fa-angle-right"></span></Link>
              </div>
              {/* <!-- END ALL VIEW --> */}
            </div>
          </div>
        </div>
      ) : (
          ""
        )}
      {/* <!-- END NEW ARRIVALS --> */}
      {/* <!-- NEW ARRIVALS --> */}
      {anime && anime.length > 0 ? (
        <div className="zmovo-new-arrivals arow-icon">
          <div className="container">
            <div className="zmovo-arrivals-items">
              <div className="zmovo-hadidng pt-50 pb-30">
                <h2>
                  <span className="text-uppercase">Anime mới cập nhật</span>
                </h2>
              </div>
              {/* <!-- items --> */}
              <div className="items" id="new-arrivle">
                <OwlCarousel options={opBox}>
                  {/* <!-- ITEM --> */}
                  {anime.map(function (item, key) {
                    return (
                      <div className="item" key={key}>
                        <VideoItem data={item} />
                      </div>
                    );
                  })}
                </OwlCarousel>
              </div>
              {/* <!-- end items --> */}
              {/* <!-- ALL VIEW --> */}
              <div className="button pt-50 text-center">
                <Link to="/the-loai/hoat-hinh" className="btn btn-radus">Xem tất cả<span className="fa fa-angle-right"></span></Link>
              </div>
              {/* <!-- END ALL VIEW --> */}
            </div>
          </div>
        </div>
      ) : (
          ""
        )}
      {/* <!-- END NEW ARRIVALS --> */}
      {/*<!-- VIDEO PLYLIST SECTION -->*/}
      <div className="zmovo-video-plylist-section arow-icon">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="zmovo-video-list-inner">
                <div className="zmovo-hadidng pt-50 pb-30">
                  <h2>
                    <span>Suggested Movies</span>
                  </h2>
                </div>
                <VideoList />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="zmovo-video-list-inner">
                <div className="zmovo-hadidng pt-50 pb-30">
                  <h2>
                    <span>Suggested Movies</span>
                  </h2>
                </div>
                <VideoList />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- END VIDEO PLYLIST SECTION -->*/}
      {/* <!-- FULL WIDHT BANNER --> */}
      <FullBanner />
      {/* <!-- END FULL WIDHT BANNER --> */}
    </div>
  );
}
