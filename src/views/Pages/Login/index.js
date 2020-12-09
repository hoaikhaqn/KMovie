import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useReduceState } from "../../../context";
import "./style.css";
import $ from "jquery";

export default function LoginPage(props) {
    const { firebase } = useReduceState();
    const [account, setAccount] = useState();
    const [error,setError] = useState();

    const handleUsernameChange = event => {
        var username = event.target.value;
        setAccount({ ...account, username });
        setError({});
    }
    const handlePasswordChange = event => {
        var password = event.target.value;
        setAccount({ ...account, password });
        setError({});
    }
    const onSubmitLogin = event => {
        event.preventDefault();
        if(!error || account.username < 6){
            setError({...error,username:"Từ 6 kí tự trở lên"})
            return;
        }
        if(!error || account.password < 6){
            setError({...error,username:"Từ 6 kí tự trở lên"})
            return;
        }
        if(error && !error.account){
            $(".ico-loading").show();
            firebase.getDocWithMultiCondition("account", { where: [["username", account.username], ["password", account.password]] },
                (res) => {
                    $(".ico-loading").hide();
                    if (res.length > 0) {
                        $("#tip-account").text("");
                        props.history.push("/")
                    } else {
                        setError({...error,account:"Thông tin tài khoản chưa đúng"})
                    }
                }
            );
        }
    }
    useEffect(() => {

    })
    return (
        <div className="zmovo-inner-page">
            <div className="zmovo-login-page">
                <div className="container">
                    <div className="zmovo-login-page-wrap">
                        <div className="zmovo-page-login">
                            <form onSubmit={onSubmitLogin}>
                                <div className="zmovo-login-input-top">
                                    <div className="form-group">
                                        <p className="tip">{error && error.username}</p>
                                        <input name="zmovo-username" onChange={handleUsernameChange} className="form-control" type="text" placeholder="Tên đăng nhập" />
                                    </div>
                                    <div className="form-group">
                                        <p className="tip">{error && error.password}</p>
                                        <input name="zmovo-password" onChange={handlePasswordChange} className="form-control" type="password" placeholder="Mật khẩu" />
                                    </div>
                                    <p className="tip">{error && error.account}</p>
                                </div>
                                <div className="zmovo-remember-me">
                                    <input type="checkbox" id="remember" className="checkbox" />
                                    <label htmlFor="remember">Ghi nhớ đăng nhập</label>
                                </div>
                                <div className="zmovo-login-fb">
                                    <ul>
                                        <li className="log-fb"><a href="/"><span className="fa fa-facebook"></span>Facebook</a></li>
                                        <li className="log-goo"><a href="/"><span className="fa fa-google"></span>Google</a></li>
                                    </ul>
                                </div>
                                <div className="zmovo-login-btns">
                                    <button className="zmovo-login-btn">ĐĂNG NHẬP <i style={{ display: "none" }} className="ico-loading fa fa-circle-o-notch fa-spin"></i></button>
                                </div>
                                <div className="zmovo-forgate">
                                    <div className="zmovo-register-me">
                                        <Link to="/register">ĐĂNG KÝ</Link>
                                    </div>
                                    <div className="zmovo-forgate-me">
                                        <a href="/">Quên mật khẩu  ?</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
