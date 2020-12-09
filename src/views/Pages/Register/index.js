import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useReduceState } from "../../../context";
import "./style.css";
import $ from "jquery";


export default function RegisterPage(props) {
    const { firebase } = useReduceState();
    const [account, setAccount] = useState();
    var validate = true;
    function required(cb){
        $("#frmRegister .form-group").each(function() {
            if($(this).find("input").data("required") && $(this).find("input").val() === ""){
                $(this).find(".tip").text("This field is required").show();
                validate = false;
                $(this).find("input").focus();
                return false;
            }
        })
        cb && cb();
    }
    const handleUsernameChange = event => {
        var username = event.target.value;
        if (username.length < 6) {
            $("#tip-username").text("Từ 6 kí tự trở lên").show();
            validate = false;
        }
        else {
            $("#tip-username").text("").hide();
        }
        setAccount({ ...account, username})
    }
    const handleEmailChange = event => {
        var email = event.target.value;
        console.log(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
        if (email.length < 1) {
            $("#tip-email").text("Không được đê trống email").show();
            validate = false;
        }
        else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))) { 
            $("#tip-email").text("Email không hợp lệ").show();
            validate = false;
        }
        else {
            $("#tip-email").text("").hide();
        }
        setAccount({ ...account,email})
    }

    const onSubmitLogin = event => {
        event.preventDefault();
        required(()=>{
            if (validate) {
                $(".ico-loading").show();
                $("#btnSubmit").attr("disabled", true);
                var idTime = new Date();
                firebase.setDocument("account",idTime.getTime().toString(),account,
                    (res) => {
                        $(".ico-loading").hide();
                        if(res){
                            alert("SUCCESSFULL")
                        }else{
                            alert("FELL")
                            $("#btnSubmit").attr("disabled",false);
                        }
                    }
                );
            }
        });
    }
    useEffect(()=>{
    
    })
    return (
        <div className="zmovo-inner-page">
            <div className="zmovo-login-page">
                <div className="zmovo-login-page-wrap">
                    <div className="container">
                        <div className="zmovo-page-login">
                            <form id="frmRegister" onSubmit={onSubmitLogin}>
                                <div className="zmovo-login-input-top">
                                    <div className="form-group">
                                        <p className="tip" style={{ display: "none" }} id="tip-username"></p>
                                        <input data-required="true" className="form-control" onChange={handleUsernameChange} type="text" placeholder="Nhập họ tên" />
                                    </div>
                                    <div className="form-group">
                                        <p className="tip" style={{ display: "none" }} id="tip-email"></p>
                                        <input data-required="true" className="form-control" onChange={handleEmailChange} type="text" placeholder="Địa chỉ email" />
                                    </div>
                                    <div className="form-group">
                                        <p className="tip" style={{ display: "none" }} id="tip-password"></p>
                                        <input data-required="true" className="form-control" type="password" placeholder="Mật khẩu" />
                                    </div>
                                    <div className="form-group">
                                        <p className="tip" style={{ display: "none" }} id="tip-repassword"></p>
                                        <input data-required="true" className="form-control" type="password" placeholder="Xác nhận mật khẩu" />
                                    </div>
                                </div>
                                <div className="zmovo-login-btns">
                                    <button id="btnSubmit" className="zmovo-login-btn">ĐĂNG NHẬP <i style={{ display: "none" }} className="ico-loading fa fa-circle-o-notch fa-spin"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
