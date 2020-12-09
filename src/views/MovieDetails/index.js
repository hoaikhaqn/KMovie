import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useReduceState } from "../../context";
import "./style.css";
import $ from "jquery";
// import data from "../../api/data.json";

// Components
// import Loading from "../../containers/DefaultLayout/DefaultLoading";
import Breadcrumbs from "../../containers/DefaultLayout/DefaultBreadcrumbs";
import SideBar from "../../components/Sidebar";
import Comments from "../../components/Comments";
import TrailerPopup from "./TrailerPopup";
import MovieDecs from "./MovieDecs";
import MovieStory from "./MovieStory";
import Tags from "./MovieTags";
// import SocialLink from "../../components/SocialLink";

// var _ = require("lodash");

export default function MovieDetailsPage(props) {
  const { state, getDocumentById } = useReduceState();
  const [movieItem, setMovieItem] = useState();
  if (!state.data || (state.data && !state.data.item) || (state.data.item && props.match.params.id !== state.data.item.id)) {
    getDocumentById("movie",props.match.params.id);
  }
  useEffect(() => {
    setMovieItem(state.data && state.data.item)
  }, [state.data]);
  if (movieItem) {
    $(".main-page").addClass("fadeIn");
  }
  return (
    <div id="MovieDetailsPage" className="main-page fadeOut">
      {movieItem ? 
      <Breadcrumbs items={[
        {url:`/loai/${Object.keys(movieItem.type)[0]}`,label:movieItem.type[Object.keys(movieItem.type)[0]]},
        {url:`/the-loai/${Object.keys(movieItem.genre)[0]}`,label:movieItem.genre[Object.keys(movieItem.genre)[0]]},
        movieItem.name
      ]} /> :""}
      {/* <!-- End breadcroumb-area --> */}
      <div className="zmoto-inner-page">
        <div className="zmovo-blog-details pt-30">
          <div className="container">
            <div className="zmovo-blog-contents">
              <div className="row">
                <div className="col-12">
                  <div className="zmovo-product-with-sedbar">
                    <div className="row">
                      {/* <!-- Left --> */}
                      <div className="col-lg-9">
                        <div className="zmovo-blog-dec-contents">
                          <div className="zmovo-slider-area slider3">
                            <div className="items" id="slider3">
                              {/* Trailer Popup */}
                              {movieItem ? (
                                <div className="item">
                                  <TrailerPopup item={movieItem} />
                                  <div className="zmovo-slider-contents" style={{ backgroundImage: "url(./assets/images/movie/" + movieItem.id + "/" + movieItem.banner + ")" }}>
                                    <div id="openTrailer" className="curpoint zmovo-slider-premium-tag">
                                      <span className="c2-bg">Trailer</span>
                                    </div>
                                    <div className="zmovo-slide-content">
                                      {/* Movie Desc */}
                                      <MovieDecs item={movieItem} />
                                    </div>
                                  </div>
                                </div>
                              ) : ""}
                            </div>
                          </div>
                          <div className="zmovo-blog-dec-content pt-30">
                            <MovieStory item={movieItem} />
                            <Tags tags={movieItem && movieItem.tags}/>
                          </div>
                          <Comments />
                        </div>
                      </div>
                      {/* <!-- End Left --> */}
                      {/* <!-- Right --> */}
                      <div className="col-lg-3">
                        <SideBar />
                      </div>
                      {/* <!-- End Right --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
