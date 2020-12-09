import React, { useEffect } from "react";
import VideoItem from "../../components/VideoItem";

export default function ContactPage(props) {
  useEffect(() => { });
  return (
    <div className="zmovo-product-list">
      <div className="row">
        {/* <!-- ITEM --> */}
        {props.data && props.data.map(function (item, key) {
          return (
            <div key={key} className="col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="item" >
                <VideoItem data={item} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}