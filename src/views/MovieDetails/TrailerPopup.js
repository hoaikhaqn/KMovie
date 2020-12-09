import React, { useEffect } from "react";
import $ from "jquery";

export default function TrailerPopup({ item }) {
  useEffect(() => {
    $("#openTrailer").click(function() {
      $(".zmovo-trailer-popup").show();
      var symbol = $(".zmovo-trailer-popup iframe")[0].src.indexOf("?") > -1 ? "&" : "?";
      $(".zmovo-trailer-popup iframe")[0].src += symbol + "autoplay=1";
    });
    $("#closeTrailer").click(function() {
      $(".zmovo-trailer-popup").hide();
      var symbol = $(".zmovo-trailer-popup iframe")[0].src.indexOf("?") > -1 ? "&" : "?";
      $(".zmovo-trailer-popup iframe")[0].src += symbol + "autoplay=1";
    });
  });
  return (
    <div className="zmovo-trailer-popup" style={{ display: "none" }}>
      <div className="zmovo-popup-container">
        <i id="closeTrailer" className="icon-close icofont-close-line"></i>
        <iframe
          title="myFrame"
          width="560"
          height="315"
          src={item.trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
