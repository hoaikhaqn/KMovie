import React from "react";
import $ from "jquery";

class DefaultFooter extends React.Component {
  componentDidMount() {
    /*Back To Top*/
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 300) {
        $('#back-top').fadeIn();
      }
      else {
        $('#back-top').fadeOut();
      }
    });
    $('#back-top').on('click', function () {
      $("html, body").animate({
        scrollTop: 0
      }
        , 1000);
      return false;
    });
  }
  render() {
    return (
      <footer className="zmovo-footer-area pt-50">
        <div className="zmovo-footer">
          <div className="container">
            <div className="zmovo-footer-top">
              <div className="row">
                <div className="col-sm-3 col-lg-3">
                  <div className="zmoto-instagram-post gradient1">
                    <img src="./assets/images/instagram/1.jpg" alt="" />
                    <a href="/" className="zmoto-instagram-icon"><span className="fa fa-instagram"></span></a>
                  </div>
                </div>
                <div className="col-sm-3 col-lg-3">
                  <div className="zmoto-instagram-post gradient1">
                    <img src="./assets/images/instagram/2.jpg" alt="" />
                    <a href="/" className="zmoto-instagram-icon"><span className="fa fa-instagram"></span></a>
                  </div>
                </div>
                <div className="col-sm-3 col-lg-3">
                  <div className="zmoto-instagram-post gradient1">
                    <img src="./assets/images/instagram/3.jpg" alt="" />
                    <a href="/" className="zmoto-instagram-icon"><span className="fa fa-instagram"></span></a>
                  </div>
                </div>
                <div className="col-sm-3 col-lg-3">
                  <div className="zmoto-instagram-post gradient1">
                    <img src="./assets/images/instagram/4.jpg" alt="" />
                    <a href="/" className="zmoto-instagram-icon"><span className="fa fa-instagram"></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="zmovo-footer-center pt-50">
              <div className="zmovo-ft-widgets">
                <div className="row">
                  <div className="col-sm-6 col-lg-3">
                    <div className="zmovo-ft-widget">
                      <div className="zmovo-ft-widget-titles">
                        <h2 className="zmovo-ft-widget-title">Movies Category</h2>
                      </div>
                      <div className="zmoto-ft-widget-contetn">
                        <ul>
                          <li><a href="/">Movies</a></li>
                          <li><a href="/">Videos</a></li>
                          <li><a href="/">English Movies</a></li>
                          <li><a href="/">China Movies</a></li>
                          <li><a href="/">Tailor</a></li>
                          <li><a href="/">Upcoming Movies</a></li>
                          <li><a href="/">Contact Us</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="zmovo-ft-widget">
                      <div className="zmovo-ft-widget-titles no-text">
                        <h2 className="zmovo-ft-widget-title">information</h2>
                      </div>
                      <div className="zmoto-ft-widget-contetn">
                        <ul>
                          <li><a href="/">About Us</a></li>
                          <li><a href="/">Song</a></li>
                          <li><a href="/">Forums</a></li>
                          <li><a href="/">Place</a></li>
                          <li><a href="/">Hot Collection</a></li>
                          <li><a href="/">Upcoming Events</a></li>
                          <li><a href="/">All Movies</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="zmovo-ft-widget">
                      <div className="zmovo-ft-widget-titles no-text">
                        <h2 className="zmovo-ft-widget-title">Locations</h2>
                      </div>
                      <div className="zmoto-ft-widget-contetn">
                        <ul>
                          <li><a href="/">South Korea</a></li>
                          <li><a href="/">Germany</a></li>
                          <li><a href="/">United States</a></li>
                          <li><a href="/">France</a></li>
                          <li><a href="/">India</a></li>
                          <li><a href="/">New Movies</a></li>
                          <li><a href="/">United Kingdom</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <div className="zmovo-ft-widget">
                      <div className="zmovo-ft-widget-titles">
                        <h2 className="zmovo-ft-widget-title">Newsletter</h2>
                      </div>
                      <div className="zmoto-ft-widget-contetn">
                        <div className="zmovo-ft-newsletter">
                          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anytg embarrassing hidden.</p>
                          <div className="zmovo-ft-newsletter-area pt-30">
                            <div className="zmovo-ft-newsletter">
                              <input type="text" className="form-control" placeholder="Enter Address" />
                              <button type="submit"><span className="fa fa-paper-plane"></span></button>
                            </div>
                          </div>
                        </div>
                        <div className="zmovo-ft-social-widget pt-50">
                          <ul>
                            <li><a href="/"><span className="fa fa-facebook"></span></a></li>
                            <li><a href="/"><span className="fa fa-twitter"></span></a></li>
                            <li><a href="/"><span className="fa fa-linkedin"></span></a></li>
                            <li><a href="/"><span className="fa fa-youtube"></span></a></li>
                            <li><a href="/"><span className="fa fa-instagram"></span></a></li>
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
        <div className="zmovo-footer-buttom">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 col-lg-6">
                <div className="zmovo-ft-menu">
                  <ul>
                    <li><a href="/">Terms</a></li>
                    <li><a href="/">Privacy</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Our Ads</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-7 col-lg-6">
                <div className="zmovo-ft-copyright">
                  <p>CopyRight 2019 Develop by <a href="/" className="c1">Themepul</a> . All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="to-top" id="back-top">
          <i className="fa fa-angle-up"></i>
        </div>
      </footer>
    );
  }
}

export default DefaultFooter
