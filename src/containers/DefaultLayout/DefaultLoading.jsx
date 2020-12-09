import React, { useEffect } from "react";
import $ from "jquery";
export default function DefaultLoading() {
    useEffect(() => {
        $("body").addClass("loading");
        return ()=>{
            $("body").removeClass("loading");
        }
    })
    return (
        <div className="zmovo-preloader">
            
        </div>
    );
}
