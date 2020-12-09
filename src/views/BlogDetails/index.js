import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
// import { useReduceState } from "../../context";
import "./style.css";

//Components
import DefaultBreadcrumbs from "../../containers/DefaultLayout/DefaultBreadcrumbs";
import SideBar from "../../components/Sidebar";
import Comments from "../../components/Comments";

export default function BlogDetailsPage(props) {
    useEffect(() => {
      
    });
    return (
        <div id="BlogPage">
            {/* <!-- breadcroumb-area --> */}
            <DefaultBreadcrumbs items={[{url:"/blog",label:"Blog"},"Blog details"]} />
            {/* <!-- End breadcroumb-area --> */}
            <div className="zmoto-inner-page">
                <div className="zmovo-blog-details pt-50">
                    <div className="container">
                        <div className="zmovo-blog-contents">
                            <div className="row">
                                <div className="col-12">
                                    <div className="zmovo-product-with-sedbar">
                                        <div className="row">
                                            {/* <!-- Left --> */}
                                            {/* <!-- Right --> */}
                                            <div className="col-lg-9">
                                                <div className="zmovo-blog-dec-contents">
                                                    <div className="zmovo-blog-dec-content">
                                                        <h2>Title blog</h2>
                                                        <div className="zmovo-blog-d-p">
                                                            <img className="mb-30" src="./assets/images/slider/3/1.jpg" alt="" />
                                                            <p>Proin fringilla porttitor eros, auctor facilisis neque fringilla eu. Nulla vitae ultrices justo. Quisque in risus vitae enim fermentum condimentum. Donec eleifend consequat nulla sed faucibus. Etiam sit amet ex ut eros dignissim consequat in non risus. Sed placerat eget diam lobortis mollis. Curabitur at dui vel mauris laoreet euismod ac at nibh. Proin orci sapien, posuere eget hendrerit non, maximus et erat. Curabitur et semper nunc. Cras ultrices pulvinar leo id ultrices. Aenean interdum tempor diam, vel porttitor tellus facilisis ut. Nulla aliquet turpis augue, quis. interdum lectus lobortis eu. Nulla ornare mauris ac congue cursus. </p>
                                                            <p>Donec eu urna sodales, feugiat urna quis, pretium augue. Donec vel massa nec metus dapibus dignissim. Curabitur at nisi mattis, vestibulum enim at, dictum eros. Pellentesque sed arcu et elit mattis pulvinar. Suspendisse et risus lacinia nunc auctor cursus ac sed ipsum. Duis fringilla, tellus eget hendrerit posuere, nisi quam pretium justo, sed consectetur dui felis sit amet dui. Donec luctus dapibus scelerisque. Quisque turpis tortor, venenatis eget mattis ac, viverra sit amet libero. In ut libero sapien. Nam non venenatis mi, vel sodales augue. Donec fringilla nisi vel est placerat, sed tempor est venenatis. Donec non sollicitudin felis. Donec eu urna sodales, feugiat urna quis, pretium augue. Donec vel massa nec.</p>
                                                        </div>
                                                        <div className="social-links">
                                                            <strong>Share :</strong>
                                                            <a href="/" className="socila-fb"><span className="fa fa-facebook"></span></a>
                                                            <a href="/" className="socila-tw"><span className="fa fa-twitter"></span></a>
                                                            <a href="/" className="socila-sk"><span className="fa fa-skype"></span></a>
                                                            <a href="/" className="socila-pin"><span className="fa fa-pinterest"></span></a>
                                                            <a href="/" className="socila-ins"><span className="fa fa-instagram"></span></a>
                                                        </div>
                                                    </div>
                                                    <Comments />
                                                </div>
                                            </div>
                                            {/* <!-- End Right --> */}
                                            <div className="col-lg-3">
                                                <SideBar />
                                            </div>
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

