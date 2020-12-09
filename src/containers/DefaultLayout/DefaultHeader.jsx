import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
// import $ from "jquery";
import DefaultHeaderDropdown from "./DefaultHeaderDropdown";


export default function DefaultHeader(props) {
  useEffect(() => {

  })
  return (
    <header className="zmovo-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 zmovo-logos">
            <div className="zmovo-logo">
              <Link to="/"><img src="./assets/images/logo.png" alt="" /></Link>
            </div>
          </div>
          <div className="col-lg-8 zmovo-menus">
            <DefaultHeaderDropdown/>
            <div className="zmovo-hidden-search" id="opensearch">
              <input type="search" onKeyDown={props.handelKeyword} placeholder="Enter the movie Name" />
            </div>
          </div>
          <div className="col-lg-2 zmovo-t-right">
            <div className="zmovo-header-right">
              <div className="zmovo-top-search">
                <div className="zmovo-ser-icon" id="clicksearch" ><span className="fa fa-search"></span></div>
              </div>
              <div className="zmovo-login">
                <Link to="/login" className="btn login-btn"><span className="fa fa-user"></span> Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )

}