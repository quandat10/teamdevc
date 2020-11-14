import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./register.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("ENV --->", process.env.REACT_APP_REGISTER_REDIRECT_URL);
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email đã được gửi đến ${email}. Nhấn vào link để xác nhận đăng ký.`
    );
    // save user email in local storage
    window.localStorage.setItem("emailForRegistration", email);
    // clear state
    setEmail("");
  };

  const registerForm = () => {
    return (
      <div className="row">
        <div className="col-lg-12">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoFocus
            />
            <br/>
            <button type="submit" className="btn btn-block btn-dark">
              Đăng ký
            </button>
          </form>
        </div>
        <div className="col-lg-12 text-center"></div>
        <div className="col-lg-12 text-center mt-5">
          Bạn đã có tài khoản{" "}
          {/* <a href="#" className="text-danger">
            Đăng nhập
          </a> */}
          <NavLink to='/login' className='text-danger'>
            Đăng nhập
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* <div className="preloader">
        <div className="lds-ripple">
          <div className="lds-pos" />
          <div className="lds-pos" />
        </div>
      </div> */}
      <div
        className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative"
        style={{
          background:
            "url(../assets/images/big/auth-bg.jpg) no-repeat center center",
        }}
      >
        <div className="auth-box row text-center">
          {/* <div
            className="col-lg-7 col-md-5 modal-bg-img"
            style={{
              backgroundImage: "url(../assets/images/big/register.jpg)",
            }}
          ></div> */}
          <div className="col-lg-12 col-md-7 bg-white">
            <div className="p-3">
              <br/>
              <img src="../assets/images/big/icon.png" alt="wrapkit" />
              <h2 className="mt-3 text-center">Đăng ký</h2>
              <form className="mt-4">
              {registerForm()}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
