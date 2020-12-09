import React, { useEffect, useState } from "react";
import { useReduceState } from "../../context";
import "./style.css";
import $ from "jquery";
// import data from "../../api/data.json";

// Components
import Loading from "../../containers/DefaultLayout/DefaultLoading";
import Breadcrumbs from "../../containers/DefaultLayout/DefaultBreadcrumbs";
import SideBar from "../../components/Sidebar";
import Comments from "../../components/Comments";
import ServerList from "./ServerList";

// var _ = require('lodash');
export default function WatchMoviePage(props) {
    const [curentEp, setCurentEp] = useState({ sv: 0, ep: 0 });
    const { state, getDocumentById } = useReduceState();
    const [movieItem, setMovieItem] = useState();
    var loaded = true;
    if (!state.data || (state.data && !state.data.item) || (state.data.item && props.match.params.id !== state.data.item.id)) {
        loaded = false
        getDocumentById("movie",props.match.params.id, () => { loaded = false });
    }
    useEffect(() => {
        setMovieItem(state.data && state.data.item)
        $('#catmenu li.active').addClass('open').children('ul').show();
        $('#catmenu li.has-sub>a').on('click', function () {
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(200);
            } else {
                element.addClass('open');
                element.children('ul').slideDown(200);
                element.siblings('li').children('ul').slideUp(200);
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(200);
            }
        });
    }, [state.data]);
    return movieItem && loaded ? (
        <div id="WatchMoviePage">
            {/* <!-- breadcroumb-area --> */}
            <Breadcrumbs items={[{ url: "/movie/" + movieItem.id, label: movieItem.name }, "Watch movie"]} />
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
                                                    <div className="zmovo-video-container">
                                                        <video id="zmovo-movie" controls src={movieItem.server[curentEp.sv].ep[curentEp.ep].link}></video>
                                                    </div>
                                                    <ServerList data={movieItem.server} setCurentEp={setCurentEp} curentEp={curentEp} />
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
    ) : <Loading />;
}

