import React, { useEffect } from "react";
import "./style.css";

// import $ from "jquery";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';

//Components
import DefaultBreadcrumbs from "../../containers/DefaultLayout/DefaultBreadcrumbs";
import VideoList from "../../components/VideoList";
import FullBanner from "../../components/FullBanner";

// Contants
const opOurTeam = {
  items: 4,
  nav: true,
  margin: 30,
  dots: false,
  navText: ['<i className="fa fa-angle-left"></i>', '<i className="fa fa-angle-right"></i>'],
  rewind: false,
  autoplay: true,
  loop: true,
};
export default function AboutPage(props) {
  useEffect(() => {})
  return (
    <div id="AboutPage">
      {/* <!-- breadcroumb-area --> */}
      <DefaultBreadcrumbs items={["About"]} />
      {/* <!-- End breadcroumb-area --> */}
      <div className="zmoto-inner-page">
        <div className="zmovo-about-page">
          <div className="zmovo-abouts pt-50">
            <div className="container">
              <div className="row align-items-start">
                <div className="col-lg-7">
                  <div className="zmovo-about-content">
                    <h2>Welcome To <span className="c1">Our Website</span></h2>
                    <p>Proin fringilla vulputate lorem quis congue. Mauris lacinia gravida ultrices. Phasellus consectetur pellentesque. Vestibulum eu ligula cursus nisi ultrices laoreet iaculis sed lum non dolor fermentum, consequat risus non, auctor nisi. Nunc sodales blandit lum auctor nibh varius metus volutpat, et sollicitudin massa ornare. Donec rutrum urna tempor, a euismod massa porttitor. Donec at sapien non orci blandit placerat nec vitae diam dui, facilisis eget risus a, scelerisque molestie sem. Suspendisse convallis, lorem bus feugiat, elit turpis rutrum justo, eget dapibus leo eros quis tellus. Suspendisse varius fermentum varius fermentum.</p>
                    <p className="pt-30">Proin fringilla vulputate lorem quis congue. Mauris lacinia gravida ultrices. Phasellus consectetur pellentesque. Vestibulum eu ligula cursus nisi ultrices laoreet iaculis sed lum non dolor fermentum, consequat risus non,</p>
                    <div className="zmovo-signature pt-4">
                      <img src="./assets/images/signture.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="zmovo-about-img">
                    <img src="./assets/images/about.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="zmovo-counters pt-50">
            <div className="container align-items-center">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="zmovo-counter-items">
                    <div className="zmovo-counter-number">
                      <span>56,825</span>
                    </div>
                    <div className="zmovo-counter-text">
                      <h4>Clients</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="zmovo-counter-items">
                    <div className="zmovo-counter-number">
                      <span>50,825</span>
                    </div>
                    <div className="zmovo-counter-text">
                      <h4>Commits</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="zmovo-counter-items">
                    <div className="zmovo-counter-number">
                      <span>825</span>
                    </div>
                    <div className="zmovo-counter-text">
                      <h4>Team Members</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="zmovo-counter-items">
                    <div className="zmovo-counter-number">
                      <span>50%</span>
                    </div>
                    <div className="zmovo-counter-text">
                      <h4>First years of use</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- team member --> */}
          <div className="zmovo-team-section arow-icon">
            <div className="container">
              <div className="zmovo-hadidng pt-50 pb-30">
                <h2><span>Our Team</span></h2>
              </div>
              <div className="zmovo-teams" id="team">
                <OwlCarousel options={opOurTeam}>
                  <div className="item">
                    <div className="zmovo-team">
                      <img src="./assets/images/team/1.jpg" alt="" />
                      <div className="zmovo-team-content">
                        <div className="zmovo-team-social">
                          <ul>
                            <li className="tfb"><a href="/"><span className="fa fa-facebook"></span></a></li>
                            <li className="ttw"><a href="/"><span className="fa fa-twitter"></span></a></li>
                            <li className="tin"><a href="/"><span className="fa fa-instagram"></span></a></li>
                          </ul>
                        </div>
                        <div className="zmovo-team-title">
                          <a href="/">Jon kmpro kellys</a>
                          <h4>director</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="zmovo-team">
                      <img src="./assets/images/team/2.jpg" alt="" />
                      <div className="zmovo-team-content">
                        <div className="zmovo-team-social">
                          <ul>
                            <li className="tfb"><a href="/"><span className="fa fa-facebook"></span></a></li>
                            <li className="ttw"><a href="/"><span className="fa fa-twitter"></span></a></li>
                            <li className="tin"><a href="/"><span className="fa fa-instagram"></span></a></li>
                          </ul>
                        </div>
                        <div className="zmovo-team-title">
                          <a href="/">Jon kmpro kellys</a>
                          <h4>director</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="zmovo-team">
                      <img src="./assets/images/team/3.jpg" alt="" />
                      <div className="zmovo-team-content">
                        <div className="zmovo-team-social">
                          <ul>
                            <li className="tfb"><a href="/"><span className="fa fa-facebook"></span></a></li>
                            <li className="ttw"><a href="/"><span className="fa fa-twitter"></span></a></li>
                            <li className="tin"><a href="/"><span className="fa fa-instagram"></span></a></li>
                          </ul>
                        </div>
                        <div className="zmovo-team-title">
                          <a href="/">Jon kmpro kellys</a>
                          <h4>director</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="zmovo-team">
                      <img src="./assets/images/team/4.jpg" alt="" />
                      <div className="zmovo-team-content">
                        <div className="zmovo-team-social">
                          <ul>
                            <li className="tfb"><a href="/"><span className="fa fa-facebook"></span></a></li>
                            <li className="ttw"><a href="/"><span className="fa fa-twitter"></span></a></li>
                            <li className="tin"><a href="/"><span className="fa fa-instagram"></span></a></li>
                          </ul>
                        </div>
                        <div className="zmovo-team-title">
                          <a href="/">Jon kmpro kellys</a>
                          <h4>director</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
          {/* <!-- end team member --> */}
          {/* <!-- FULL WIDHT BANNER --> */}
          <FullBanner />
          {/* <!-- END FULL WIDHT BANNER --> */}
          {/* <!-- VIDEO PLYLIST SECTION --> */}
          <div className="zmovo-video-plylist-section arow-icon">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="zmovo-video-list-inner">
                    <div className="zmovo-hadidng pt-50 pb-30">
                      <h2><span>Suggested Movies</span></h2>
                    </div>
                    <VideoList />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="zmovo-video-list-inner">
                    <div className="zmovo-hadidng pt-50 pb-30">
                      <h2><span>Action Movies</span></h2>
                    </div>
                    <VideoList />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END VIDEO PLYLIST SECTION --> */}
        </div>
      </div>
    </div>
  );
}