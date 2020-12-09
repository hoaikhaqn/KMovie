import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
import "./style.css";

// Components
import Episode from "./Episode";

export default function ServerList(props) {
    const data = props.data;
    useEffect(() => {
    
    })
    return (
        <div className="zmovo-list-server">
            {data.map(function (sv, svKey) {
                return (
                    <div className="zmovo-server" key={svKey}>
                        <h4 className="zmovo-server-name"><i className="icofont-server"></i>{sv.name}</h4>
                        <ul className="zmovo-server-list">
                            {sv.ep.map(function (ep, epKey) {
                                return (
                                    <Episode key={epKey} setCurentEp={props.setCurentEp} dataEp={{sv:svKey,ep:epKey}} data={ep} active={svKey===props.curentEp.sv && epKey===props.curentEp.ep}/>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    );

}

