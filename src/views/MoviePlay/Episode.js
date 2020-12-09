import React, { useEffect } from "react";
import "./style.css";

export default function Episode(props) {
    useEffect(() => {
        
    })
    function onChangeEp(dataEp){
        props.setCurentEp({sv:dataEp.sv,ep:dataEp.ep});
    }
    return (
        <li onClick={()=>{onChangeEp(props.dataEp)}} className={"episode " + (props.active ? "active":"")}>
            <span>{props.data.label}</span>
        </li>
    );

}

