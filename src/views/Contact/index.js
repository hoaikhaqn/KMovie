import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useReduceState } from "../../context";
import "./style.css";

// import $ from "jquery";
// Components
import DefaultBreadcrumbs from "../../containers/DefaultLayout/DefaultBreadcrumbs";

export default function ContactPage(props) {
  useEffect(() => {});
  return (
    <div id="ContactPage">
      {/* <!-- breadcroumb-area --> */}
      <DefaultBreadcrumbs items={"Contact"} />
      {/* <!-- End breadcroumb-area --> */}
      <div className="zmoto-inner-page">
        <div className="zmovo-contact-page">
          <div className="container">
            <div className="map-area pt-50 pb-50">
              <iframe className="map" id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.546533663025!2d106.68555631462236!3d10.76938899232628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f22b55da96d%3A0xf87808a9d6e3ab03!2zMTQwIELDuWkgVGjhu4sgWHXDom4sIFBoxrDhu51uZyBQaOG6oW0gTmfFqSBMw6NvLCBRdeG6rW4gMSwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1567754671932!5m2!1sen!2s" width="568" height="568" frameBorder="0" allowFullScreen="" title="contact"></iframe>
            </div>
            <div className="zmovo-contactpage-area">
              <div className="row">
                <div className="col-lg-9">
                  <div className="comment-respond">
                    <h2 className="title">Leave a Comment</h2>
                    <div className="respons-box">
                      <div className="form">
                        <form action="#">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="name">Nick Name :</label>
                                <input id="name" className="form-control form-mane" required="" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="email">E-mail :</label>
                                <input id="email" className="form-control form-email" required="" type="email" />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="message">Write a Message :</label>
                            <textarea id="message" className="form-control form-comment" cols="10" rows="8" name="comment" required=""></textarea>
                          </div>
                          <div className="buttons">
                            <a href="/" className="btn btn-buttons">Submit</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="contact-widget">
                    <h5 className="contact-widget-title no-margin"><span>Contact info</span></h5>
                    <div className="textwidget">
                      <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed loram ipsum</p>
                      <ul>
                        <li>
                          <label><i className="fa fa-map-marker"></i></label> dambo dika,USA rode #420</li>
                        <li>
                          <label><i className="fa fa-envelope"></i></label><a href="/">zmovo@gamil.com</a></li>
                        <li>
                          <label><i className="fa fa-phone"></i></label>(+990 ) 987 25 145</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}