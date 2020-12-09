import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
// import { useReduceState } from "../../context";
import "./style.css";

//Components
import DefaultBreadcrumbs from "../../containers/DefaultLayout/DefaultBreadcrumbs";
// import SideBar from "../../components/Sidebar";

export default function BlogPage(props) {
    useEffect(() => {

    });
    return (
        <div id="BlogPage">
            {/* <!-- breadcroumb-area --> */}
            <DefaultBreadcrumbs items={["Blog"]} />
            {/* <!-- End breadcroumb-area --> */}
            <div className="zmoto-inner-page">
                <div className="zmovo-blog-page pt-50">
                    <div className="container">
                        <div className="zmovo-blog-contents">
                            <div className="row">
                                <div className="col-12">
                                    <div className="zmovo-product-with-sedbar">
                                        <div className="row">
                                            {/* <!-- Left --> */}
                                            <div className="col-lg-9">
                                                <div className="zmovo-blog-items">
                                                    <div className="zmovo-blog-item">
                                                        <div className="zmovo-blog-img">
                                                            <img src="./assets/images/blog/1.jpg" alt="" />
                                                        </div>
                                                        <div className="zmovo-blog-dec pt-30">
                                                            <div className="zmovo-blog-date">
                                                                <a href="/"><span className="fa fa-clock-o"></span>1 May 2019</a>
                                                            </div>
                                                            <div className="zmovo-b-title">
                                                                <a href="/">Krisnah Appadoo Architecture Design 2019</a>
                                                            </div>
                                                            <p>Proin fringilla porttitor eros, auctor facilisis neque fringilla eu. Nulla vitae ultrices justo. Quisque in risus vitae enim fermentum condimentum. consequat nulla sed faucibus. Etiam sit amet ex ut eros dignissim consequat in non risus. Sed placerat eget diam lobortis mollis. Curabitur at laoreet euismod ac at nibh. Proin orci sapien, posuere eget hendrerit non, </p>
                                                            <div className="zmovo-blog-meta">
                                                                <ul>
                                                                    <li className="postby"><a href="/">By Job doe</a> ....</li>
                                                                    <li><a href="/"><span className="fa fa-heart-o"></span>50</a></li>
                                                                    <li><a href="/"><span className="fa fa-comments-o"></span>80 Comments</a></li>
                                                                </ul>
                                                                <div className="zmovo-blog-social-share">
                                                                    <div className="zmovo-blog-share-icon">
                                                                        <span className="fa fa-share-alt"></span>
                                                                        <ul className="zmovo-b-social-icons">
                                                                            <li><a href="/"><span className="fa fa-facebook"></span></a></li>
                                                                            <li><a href="/"><span className="fa fa-twitter"></span></a></li>
                                                                            <li><a href="/"><span className="fa fa-google-plus"></span></a></li>
                                                                            <li><a href="/"><span className="fa fa-linkedin"></span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="zmovo-blog-item pt-30">
                                                        <div className="zmovo-blog-img">
                                                            <img src="./assets/images/blog/2.jpg" alt="" />
                                                        </div>
                                                        <div className="zmovo-blog-dec pt-30">
                                                            <div className="zmovo-blog-date">
                                                                <a href="/"><span className="fa fa-clock-o"></span>1 May 2019</a>
                                                            </div>
                                                            <div className="zmovo-b-title">
                                                                <a href="/">Appadoo Architecture Krisnah Design 2015</a>
                                                            </div>
                                                            <p>Proin fringilla porttitor eros, auctor facilisis neque fringilla eu. Nulla vitae ultrices justo. Quisque in risus vitae enim fermentum condimentum. consequat nulla sed faucibus. Etiam sit amet ex ut eros dignissim consequat in non risus. Sed placerat eget diam lobortis mollis. Curabitur at laoreet euismod ac at nibh. Proin orci sapien, posuere eget hendrerit non, </p>
                                                            <div className="zmovo-blog-meta">
                                                                <ul>
                                                                    <li className="postby"><a href="/">By Job doe</a> ....</li>
                                                                    <li><a href="/"><span className="fa fa-heart-o"></span>50</a></li>
                                                                    <li><a href="/"><span className="fa fa-comments-o"></span>80 Comments</a></li>
                                                                </ul>
                                                                <div className="zmovo-blog-social-share">
                                                                    <div className="zmovo-blog-share-icon">
                                                                        <span className="fa fa-share-alt"></span>
                                                                        <ul className="zmovo-b-social-icons">
                                                                            <li><a href="/"><span className="fa fa-facebook"></span></a></li>
                                                                            <li><a href="/"><span className="fa fa-twitter"></span></a></li>
                                                                            <li><a href="/"><span className="fa fa-google-plus"></span></a></li>
                                                                            <li><a href="/"><span className="fa fa-linkedin"></span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="zmovo-blog-item pt-30">
                                                        <div className="zmovo-blog-img">
                                                            <img src="./assets/images/blog/3.jpg" alt="" />
                                                        </div>
                                                        <div className="zmovo-blog-dec pt-30">
                                                            <div className="zmovo-blog-date">
                                                                <a href="/"><span className="fa fa-clock-o"></span>1 May 2019</a>
                                                            </div>
                                                            <div className="zmovo-b-title">
                                                                <a href="/">Appadoo Krisnah Architecture Design 2018</a>
                                                            </div>
                                                            <p>Proin fringilla porttitor eros, auctor facilisis neque fringilla eu. Nulla vitae ultrices justo. Quisque in risus vitae enim fermentum condimentum. consequat nulla sed faucibus. Etiam sit amet ex ut eros dignissim consequat in non risus. Sed placerat eget diam lobortis mollis. Curabitur at laoreet euismod ac at nibh. Proin orci sapien, posuere eget hendrerit non, </p>
                                                            <div className="zmovo-blog-meta">
                                                                <ul>
                                                                    <li className="postby"><a href="/">By Job doe</a> ....</li>
                                                                    <li><a href="/"><span className="fa fa-heart-o"></span>50</a></li>
                                                                    <li><a href="/"><span className="fa fa-comments-o"></span>80 Comments</a></li>
                                                                </ul>
                                                                <div className="zmovo-blog-social-share">
                                                                    <div className="zmovo-blog-share-icon">
                                                                        <span className="fa fa-share-alt"></span>
                                                                        <ul className="zmovo-b-social-icons">
                                                                            <li><a href="/"><span className="fa fa-facebook"></span></a></li>
                                                                            <li><a href="/"><span className="fa fa-twitter"></span></a></li>
                                                                            <li><a href="/"><span className="fa fa-google-plus"></span></a></li>
                                                                            <li><a href="/"><span className="fa fa-linkedin"></span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="zmovo-blog-item pt-30">
                                                        <div className="zmovo-blog-img">
                                                            <img src="./assets/images/blog/4.jpg" alt="" />
                                                        </div>
                                                        <div className="zmovo-blog-dec pt-30">
                                                            <div className="zmovo-blog-date">
                                                                <a href="/"><span className="fa fa-clock-o"></span>1 May 2019</a>
                                                            </div>
                                                            <div className="zmovo-b-title">
                                                                <a href="/">Proin fringilla Architecture Design 2019</a>
                                                            </div>
                                                            <p>Proin fringilla porttitor eros, auctor facilisis neque fringilla eu. Nulla vitae ultrices justo. Quisque in risus vitae enim fermentum condimentum. consequat nulla sed faucibus. Etiam sit amet ex ut eros dignissim consequat in non risus. Sed placerat eget diam lobortis mollis. Curabitur at laoreet euismod ac at nibh. Proin orci sapien, posuere eget hendrerit non, </p>
                                                            <div className="zmovo-blog-meta">
                                                                <ul>
                                                                    <li className="postby"><a href="/">By Job doe</a> ....</li>
                                                                    <li><a href="/"><span className="fa fa-heart-o"></span>50</a></li>
                                                                    <li><a href="/"><span className="fa fa-comments-o"></span>80 Comments</a></li>
                                                                </ul>
                                                                <div className="zmovo-blog-social-share">
                                                                    <div className="zmovo-blog-share-icon">
                                                                        <span className="fa fa-share-alt"></span>
                                                                        <ul className="zmovo-b-social-icons">
                                                                            <li><a href="/"><span className="fa fa-facebook"></span></a></li>
                                                                            <li><a href="/"><span className="fa fa-twitter"></span></a></li>
                                                                            <li><a href="/"><span className="fa fa-google-plus"></span></a></li>
                                                                            <li><a href="/"><span className="fa fa-linkedin"></span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pagination-wrapper pt-50">
                                                        <nav aria-label="navigations">
                                                            <ul className="pagination">
                                                                <li className="page-item"><a className="page-link pagefirst" href="/"><i className="fa fa-angle-left"></i></a></li>
                                                                <li className="page-item"><a className="page-link" href="/">1</a></li>
                                                                <li className="page-item active"><a className="page-link" href="/">2</a></li>
                                                                <li className="page-item active"><a className="page-link" href="/">3</a></li>
                                                                <li className="page-item"><a className="page-link lastpage" href="/"><i className="fa fa-angle-right"></i></a></li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Left --> */}
                                            {/* <!-- Right --> */}
                                            <div className="col-lg-3">
                                                <div className="zmovo-widget">
                                                    <h2 id="hidden-cat" className="widget-title mb-30 hidden-cat"><span>top 10 movie</span></h2>
                                                    <div className="zmovo-category-menu catmenu" id="catmenu">
                                                        <ul>
                                                            <li className="active"><a href="/">Home</a></li>
                                                            <li className='has-sub'><a href="/">Romantic Movies</a>
                                                                <ul>
                                                                    <li className='has-sub'><a href="/">Tamil</a>
                                                                        <ul>
                                                                            <li><a href="/">New Tamil</a></li>
                                                                            <li><a href="/">New English</a></li>
                                                                            <li><a href="/">New Hindi</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className='has-sub'><a href="/">China</a>
                                                                        <ul>
                                                                            <li><a href="/">New Tamil</a></li>
                                                                            <li><a href="/">New English</a></li>
                                                                            <li><a href="/">New Hindi</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className='has-sub'><a href="/">English</a>
                                                                        <ul>
                                                                            <li><a href="/">New Tamil</a></li>
                                                                            <li><a href="/">New English</a></li>
                                                                            <li><a href="/">New Hindi</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='has-sub'><a href="/">Top 10 Movies</a>
                                                                <ul>
                                                                    <li className='has-sub'><a href="/">Tamil</a>
                                                                        <ul>
                                                                            <li><a href="/">New Tamil</a></li>
                                                                            <li><a href="/">New English</a></li>
                                                                            <li><a href="/">New Hindi</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className='has-sub'><a href="/">China</a>
                                                                        <ul>
                                                                            <li><a href="/">New Tamil</a></li>
                                                                            <li><a href="/">New English</a></li>
                                                                            <li><a href="/">New Hindi</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className='has-sub'><a href="/">English</a>
                                                                        <ul>
                                                                            <li><a href="/">New Tamil</a></li>
                                                                            <li><a href="/">New English</a></li>
                                                                            <li><a href="/">New Hindi</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='has-sub'><a href="/">Ratting Movies</a>
                                                                <ul>
                                                                    <li className='has-sub'><a href="/">Action English</a>
                                                                        <ul>
                                                                            <li><a href="/">New Tamil</a></li>
                                                                            <li><a href="/">New English</a></li>
                                                                            <li><a href="/">New Hindi</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='has-sub'><a href="/">New Movies</a>
                                                                <ul>
                                                                    <li className='has-sub'><a href="/">Tamil</a>
                                                                        <ul>
                                                                            <li><a href="/">New Tamil</a></li>
                                                                            <li><a href="/">New English</a></li>
                                                                            <li><a href="/">New Hindi</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='has-sub'><a href="/">2019 All Movies</a>
                                                                <ul>
                                                                    <li className='has-sub'><a href="/">Hindi</a>
                                                                        <ul>
                                                                            <li><a href="/">Action Movie</a></li>
                                                                            <li><a href="/">Hot Movie</a></li>
                                                                            <li><a href="/">Horan Movie</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className='has-sub'><a href="/">Product 1</a>
                                                                        <ul>
                                                                            <li><a href="/">Sub Product</a></li>
                                                                            <li><a href="/">Sub Product</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='has-sub'><a href="/">TV Seris</a>
                                                                <ul>
                                                                    <li className='has-sub'><a href="/">TV English</a>
                                                                        <ul>
                                                                            <li><a href="/">TV English old</a></li>
                                                                            <li><a href="/">TV English</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='has-sub'><a href="/">Serials</a>
                                                                <ul>
                                                                    <li className='has-sub'><a href="/">Serials English</a>
                                                                        <ul>
                                                                            <li><a href="/">Serials Hot</a></li>
                                                                            <li><a href="/">Serials old</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className='has-sub'><a href="/">China Movies</a>
                                                                <ul>
                                                                    <li className='has-sub'><a href="/">China Action</a>
                                                                        <ul>
                                                                            <li><a href="/">China Action New</a></li>
                                                                            <li><a href="/">China Hot Action</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="zmovo-widget">
                                                    <div className="zmovo-video-list-inner">
                                                        <h2 className="widget-title mb-30 mt-30"><span>Recent Comment</span></h2>
                                                        <div className="zmovo-video-list-items">
                                                            <div className="zmovo-v-list-items mt-30">
                                                                <div className="zmovo-v-list-item mt-30">
                                                                    <div className="zmovo-v-list-i-img">
                                                                        <img src="./assets/images/blog/small/1.jpg" alt="" />
                                                                    </div>
                                                                    <div className="zmovo-v-list-content">
                                                                        <a href="/">Enim Porta Proin</a>
                                                                        <div className="zmovo-v-tag c1"><span>English,2019</span></div>
                                                                        <div className="movie-time"><a href="/"><i className="fa fa-comments c1"></i><span>10 Comments</span></a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="zmovo-v-list-item mt-30">
                                                                    <div className="zmovo-v-list-i-img">
                                                                        <img src="./assets/images/blog/small/2.jpg" alt="" />
                                                                    </div>
                                                                    <div className="zmovo-v-list-content">
                                                                        <a href="/">Porta Enim Proin</a>
                                                                        <div className="zmovo-v-tag c1"><span>English,2019</span></div>
                                                                        <div className="movie-time"><a href="/"><i className="fa fa-comments c1"></i><span>20 Comments</span></a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="zmovo-v-list-item mt-30">
                                                                    <div className="zmovo-v-list-i-img">
                                                                        <img src="./assets/images/blog/small/3.jpg" alt="" />
                                                                    </div>
                                                                    <div className="zmovo-v-list-content">
                                                                        <a href="/">Proin Enim Porta</a>
                                                                        <div className="zmovo-v-tag c1"><span>English,2019</span></div>
                                                                        <div className="movie-time"><a href="/"><i className="fa fa-comments c1"></i><span>4 Comments</span></a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="zmovo-v-list-item mt-30">
                                                                    <div className="zmovo-v-list-i-img">
                                                                        <img src="./assets/images/blog/small/4.jpg" alt="" />
                                                                    </div>
                                                                    <div className="zmovo-v-list-content">
                                                                        <a href="/">Lnim Porta Proin</a>
                                                                        <div className="zmovo-v-tag c1"><span>English,2019</span></div>
                                                                        <div className="movie-time"><a href="/"><i className="fa fa-comments c1"></i><span>2 Comments</span></a></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="zmovo-widget">
                                                    <div className="zmovo-video-list-inner">
                                                        <h2 className="widget-title mb-30 mt-30"><span>Recent Post</span></h2>
                                                        <div className="zmovo-video-list-items">
                                                            <div className="zmovo-v-list-items mt-30">
                                                                <div className="zmovo-v-list-item mb-30">
                                                                    <div className="zmovo-v-list-i-img">
                                                                        <img src="./assets/images/blog/small/3.jpg" alt="" />
                                                                    </div>
                                                                    <div className="zmovo-v-list-content">
                                                                        <a href="/">Cras Nam</a>
                                                                        <p>Nam aliquam et purus</p>
                                                                        <div className="movie-time"><i className="fa fa-user c1"></i><span>Jec</span></div>
                                                                    </div>
                                                                </div>
                                                                <div className="zmovo-v-list-item mb-30">
                                                                    <div className="zmovo-v-list-i-img">
                                                                        <img src="./assets/images/blog/small/2.jpg" alt="" />
                                                                    </div>
                                                                    <div className="zmovo-v-list-content">
                                                                        <a href="/">Nam Cras</a>
                                                                        <p>purus Nam aliquam et</p>
                                                                        <div className="movie-time"><i className="fa fa-user c1"></i><span>Jec</span></div>
                                                                    </div>
                                                                </div>
                                                                <div className="zmovo-v-list-item mt-30">
                                                                    <div className="zmovo-v-list-i-img">
                                                                        <img src="./assets/images/blog/small/4.jpg" alt="" />
                                                                    </div>
                                                                    <div className="zmovo-v-list-content">
                                                                        <a href="/">Porta Proin</a>
                                                                        <p>Aliquam Nam et purus</p>
                                                                        <div className="movie-time"><i className="fa fa-user c1"></i><span>Jec</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- End Right --> */}
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