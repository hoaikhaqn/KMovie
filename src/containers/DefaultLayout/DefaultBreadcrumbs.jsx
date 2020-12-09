import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
// import $ from "jquery";

export default function DefaultBreadcrumb(props) {
  useEffect(() => {
  })
  return (
    <div className="zmovo-breadcrumb">
      <div className="zmovo-breadcrumb-area">
        <div className="zmovo-breadcrumb-bg">
          <div className="container">
            <div className="zmovo-breadcrumb-inner text-center">
              <ul>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                {
                  props.items && props.items.map(function(item, idx) {
                    return (
                      <li key={idx}>
                        {item.url ? <Link to={item.url}>{item.label}</Link> : <span>{item}</span>}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
