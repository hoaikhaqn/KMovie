import React, { useEffect, useState } from "react";
import { useReduceState } from "../../context";
import { Link } from 'react-router-dom';
// import $ from "jquery";
import "./style.css";

export default function SideBar(props) {
    const { firebase } = useReduceState();
    const [topTrailers, setTopTrailers] = useState();
    const [topFuture, setTopFuture] = useState();
    const [topSeries, setTopSeries] = useState();
    useEffect(() => {
        if (!topTrailers) {
            firebase.getDocWithCondition("movie", { where: ["status", 0], orderBy: ["view", "desc"] }, setTopTrailers);
        }
        if (!topFuture) {
            firebase.getDocWithCondition("movie", { 
                where: ["type",{id:"phim-le",name:"Phim lẻ"}], 
                limit: 5, orderBy: ["view", "desc"] }, setTopFuture);
        }
        if (!topSeries) {
            firebase.getDocWithCondition("movie", {  
                where: ["type",{id:"phim-bo",name:"Phim bộ"}], 
                limit: 5, orderBy: ["view", "desc"] }, setTopSeries);
        }
    }, [topTrailers,topFuture,topSeries,firebase])
    return (
        <div className="zmovo-sidebar">
            <div className="zmovo-widget">
                <div className="zmovo-video-list-inner">
                    <h2 className="widget-title mb-30"><span>Top trailer</span></h2>
                    <div className="zmovo-m-list-items mt-30">
                        {topTrailers && topTrailers.map(function (item, key) {
                            return (
                                <div key={key} className="zmovo-m-item">
                                    <Link to={`/phim/${item.id}`}>
                                        <div className="zmovo-m-item-img">
                                            <img className="" src={`./assets/images/movie/${item.id}/${item.poster}`} alt="poster" />
                                        </div>
                                        <div className="zmovo-m-item-content">
                                            <div className="zmovo-m-item-c1"><span>{item.name}</span></div>
                                            <div className="zmovo-m-item-text"><span>{item.subname}</span></div>
                                            <div className="zmovo-m-item-time"><span>{item.time}</span></div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="zmovo-widget">
                <div className="zmovo-video-list-inner">
                    <h2 className="widget-title mb-30"><span>Top phim lẻ</span></h2>
                    <div className="zmovo-m-list-items mt-30">
                        {topFuture && topFuture.map(function (item, key) {
                            return (
                                <div key={key} className="zmovo-m-item">
                                    <Link to={`/phim/${item.id}`}>
                                        <div className="zmovo-m-item-img">
                                            <img className="" src={`./assets/images/movie/${item.id}/${item.poster}`} alt="poster" />
                                        </div>
                                        <div className="zmovo-m-item-content">
                                            <div className="zmovo-m-item-c1"><span>{item.name}</span></div>
                                            <div className="zmovo-m-item-text"><span>{item.subname}</span></div>
                                            <div className="zmovo-m-item-time"><span>{item.time}</span></div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="zmovo-widget">
                <div className="zmovo-video-list-inner">
                    <h2 className="widget-title mb-30"><span>Top phim bộ</span></h2>
                    <div className="zmovo-m-list-items mt-30">
                        {topSeries && topSeries.map(function (item, key) {
                            return (
                                <div key={key} className="zmovo-m-item">
                                    <Link to={`/phim/${item.id}`}>
                                        <div className="zmovo-m-item-img">
                                            <img className="" src={`./assets/images/movie/${item.id}/${item.poster}`} alt="poster" />
                                        </div>
                                        <div className="zmovo-m-item-content">
                                            <div className="zmovo-m-item-c1"><span>{item.name}</span></div>
                                            <div className="zmovo-m-item-text"><span>{item.subname}</span></div>
                                            <div className="zmovo-m-item-time"><span>{item.time}</span></div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
