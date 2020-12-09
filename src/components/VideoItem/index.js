import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import "./style.css";

export default function VideoItem(props) {
    useEffect(()=>{
        
    })
    return (
        <div className="zmovo-video-item-box" title={props.data.name+" - "+props.data.subname}>
            <div className="zmovo-video-box-inner">
                <div className="zmovo-video-item-tag">
                    <span>{`${props.data.ribbon}`}</span>
                </div> 
                <Link to={"/phim/" + props.data.id}>
                    <div className="zmovo-v-box-img gradient">
                        <img src={"./assets/images/movie/" + props.data.id + "/" + props.data.poster} alt="" />
                        <div className="ply-btns">
                            <img src="./assets/images/play-button.png" alt="" />
                        </div>
                    </div>
                </Link>
                <div className="zmovo-v-box-content">
                <Link to={"/phim/" + props.data.id}>{props.data.name} </Link>
                    <div className="zmovo-v-tag c2">
                        <span>{props.data.subname}</span>
                    </div>
                    <div className="movie-time"><span>{props.data.time}</span></div>
                    <div className="like-icon">
                        <a href="/"><span className="fa fa-heart-o"></span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}