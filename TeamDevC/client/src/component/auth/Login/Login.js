import React, { Component, useState,useEffect } from "react";
import { Switch, Link, Redirect, Route } from "react-router-dom";
import Report from "../../Report/Report";
import Manager from "../../Manager/Manager";
import HomePage from "../../Homepage/HomePage";
import Sentiment from "../../Sentiment/Sentiment";
import { auth, googleAuthProvider } from "../../firebase";
import firebase from "firebase";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { collapseToast, toast } from "react-toastify";

import axios from 'axios'

const createOrUpdateUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/create-or-update-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

const Login = ({ history }) => {
  let dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("user : ",user?.email)

    if (user!= null && user.token!=null) history.push("/");
  }, [user]);


  // loading = ()=>{
  //   return (
  //     <div className="preloader">
  //     <div className="lds-ripple">
  //       <div className="lds-pos" />
  //       <div className="lds-pos" />
  //     </div>
  //   </div>
  //   )
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table(email, password);
    setLoading(true);

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      // console.log(result);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      // console.log(`idTokenResult :  ${idTokenResult.token}`);
      // createOrUpdateUser(idTokenResult.token)
      // .then(
      //   (res)=>console.log("CREATE OR UPDATE RES",res)
      // )
      // .catch()
      // dispatch({
      //   type: "LOGGED_IN_USER",
      //   payload: {
      //     email: user.email,
      //     token: idTokenResult.token,
      //   },
      // });
      // history.push("/homepage");
      createOrUpdateUser(idTokenResult.token)
        .then((res) => {
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              campaigns: res.data.campaigns,
              _id: res.data._id,

            },
          });
        })
        .catch();

      history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(
        "Tài khoản hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại !"
      );
      setLoading(false);
    }
  };
  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();


        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const loginForm = () => {
    return (
      <div className="row">
        <div className="col-lg-12 text-left">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                className="form-control"
                id="uname"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Mật khẩu</label>
              <input
                className="form-control"
                id="pwd"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </div>
            <br />
            <button type="submit" className="btn btn-block btn-dark">
              Đăng Nhập
            </button>
            <br />

            {/* <button
              type="submit"
              className="btn btn-circle btn-light"
              onClick={googleLogin}
            >
              G
            </button> */}
          </form>
        </div>
        <div className="col-lg-12 text-center"></div>
        <div className="col-lg-12 text-center mt-5">
          Bạn chưa có tài khoản{" "}
          <Link to="/register" className="text-danger">
            Đăng ký
          </Link>{" "}
        </div>
      </div>
    );
  };
  return (
    <div>
      {loading ? (
              <div className="preloader">
              <div className="lds-ripple">
                <div className="lds-pos" />
                <div className="lds-pos" />
              </div>
            </div>
      ):(<div
        className="auth-wrapper d-flex no-block justify-content-center align-items-center position-relative"
        style={{
          background:
            "url(../assets/images/big/auth-bg.jpg) no-repeat center center",
        }}
      >
        <div className="auth-box row text-center">
          <div className="col-lg-12 col-md-7 bg-white">
            <div className="p-3">
              <img src="../assets/images/big/icon.png" alt="wrapkit" />
              <h2 className="mt-3 text-center">Đăng nhập</h2>
              <form className="mt-4">{loginForm()}</form>
            </div>
          </div>
        </div>
      </div>)}
      
    </div>
  );
};

export default Login;
