import React, { useEffect } from "react";
// import { Link } from 'react-router-dom';
// import $ from "jquery";
import "./style.css";

export default function SideBar(props) {
    useEffect(() => {

    })
    return (
        <div className="zmovo-comments">
            <div className="comment-area pt-30">
                <h2 className="title">comment's(10)</h2>
                <ol className="comment-list">
                    <li className="single-comment">
                        <div className="comment-body">
                            <div className="comment-img">
                                <img src="./assets/images/author/1.png" alt="" />
                            </div>
                            <div className="comment-content">
                                <div className="comment-header">
                                    <h3 className="comment-title">Kosmi Kotalia</h3>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                <div className="blog-details-reply-box">
                                    <div className="comment-time">30 minits ago</div>
                                    <div className="comment-reply">
                                        <a href="/" className="Repost">Repost</a>
                                        <a href="/" className="reply">reply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
                <ol className="comment-list-reply">
                    <li className="single-comment">
                        <div className="comment-body">
                            <div className="comment-img">
                                <img src="./assets/images/author/2.png" alt="" />
                            </div>
                            <div className="comment-content">
                                <div className="comment-header">
                                    <h3 className="comment-title">Kosmi Kotalia</h3>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                <div className="blog-details-reply-box">
                                    <div className="comment-time">30 minits ago</div>
                                    <div className="comment-reply">
                                        <a href="/" className="Repost">Repost</a>
                                        <a href="/" className="reply">reply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
                <ol className="comment-list">
                    <li className="single-comment">
                        <div className="comment-body">
                            <div className="comment-img">
                                <img src="./assets/images/author/3.png" alt="" />
                            </div>
                            <div className="comment-content">
                                <div className="comment-header">
                                    <h3 className="comment-title">Kosmi Kotalia</h3>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                <div className="blog-details-reply-box">
                                    <div className="comment-time">30 minits ago</div>
                                    <div className="comment-reply">
                                        <a href="/" className="Repost">Repost</a>
                                        <a href="/" className="reply">reply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
                {/* <!-- COMMENT RESPOND --> */}
                <div className="comment-respond">
                    <h2 className="title">Leave a Comment</h2>
                    <div className="respons-box">
                        <div className="form">
                            <form>
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
                {/* <!-- END COMMENT RESPOND --> */}
            </div>
        </div>
    );
}
