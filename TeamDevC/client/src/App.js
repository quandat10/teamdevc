import "./component/Header/Header.js";
import "./component/SizeBar/SizeBar.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Report from "./component/Report/Report";
import Manager from "./component/Manager/Manager";
import Header from "./component/Header/Header";
import HomePage from "./component/Homepage/HomePage";
import Sentiment from "./component/Sentiment/Sentiment";
import SizeBar from "./component/SizeBar/SizeBar";
import React, { Component, useEffect } from "react";

import Login from "./component/auth/Login/Login";
import Register from "./component/auth/Register/Register.js";
import RegisterComplete from "./component/auth/Register/RegisterComplete.js";

import { auth } from "./component/firebase";
import { useDispatch, useSelector } from "react-redux";
import Campain from "./component/Campain/Campain.js";

const App = () => {
  // state = {
  //   sideNavLeft: false,
  // };

  const dispatch = useDispatch();
  //to check firebase auth state
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });
    //cleanup
    return () => unsubcribe();
  }, []);
  const user = useSelector((state) => state.user);
  console.log("email : ",user?.email);

  return (
    
    <>

      <ToastContainer />
      <div
      iv
      id="main-wrapper"
      data-theme="light"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
      data-boxed-layout="full"
    >
      {user && (<Header/>)}
      {user && (<SizeBar/>)}
      <Switch>
        <Redirect from="/" exact to="/homepage" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/register" component={Register} />
        <Route path="/homepage" exact component={HomePage} />
        <Route path="/manager" exact component={Manager} />
        <Route path="/sentiment" exact component={Sentiment} />
        <Route path="/report" exact component={Report} />
        <Route path="/campain" exact component={Campain} />




      </Switch>
    </div>

    </>
  );
};

export default App;
