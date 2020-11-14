import React, { Component,useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import firebase from "firebase";
const Header = ()=>{
  let dispatch = useDispatch();

  // const user = useSelector((state) => state.user.email);
  let history = useHistory();
  const user = useSelector((state) => state.user);

  // let user = "quandat3103@gmail.com"
  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <header className="topbar" data-navbarbg="skin6">
      <nav className="navbar top-navbar navbar-expand-md">
        <div className="navbar-header" data-logobg="skin6">
          {/* This is for the sidebar toggle which is visible on mobile only */}
          <a
            className="nav-toggler waves-effect waves-light d-block d-md-none"
            href="javascript:void(0)"
          >
            <i className="ti-menu ti-close" />
          </a>
          <div className="navbar-brand">
            {/* Logo icon */}
            <NavLink to="/homepage">
              <b className="logo-icon">
                {/* Dark Logo icon */}
                <img
                  src="./assets/images/logo-icon.png"
                  alt="homepage"
                  className="dark-logo"
                />
                {/* Light Logo icon */}
                <img
                  src="./assets/images/logo-icon.png"
                  alt="homepage"
                  className="light-logo"
                />
              </b>
              {/*End Logo icon */}
              {/* Logo text */}
              <span className="logo-text">
                {/* dark Logo text */}
                <img
                  src="./assets/images/logo-text.png"
                  alt="homepage"
                  className="dark-logo"
                />
                {/* Light Logo text */}
                <img
                  src="./assets/images/logo-light-text.png"
                  className="light-logo"
                  alt="homepage"
                />
              </span>
            </NavLink>
          </div>
          <a
            className="topbartoggler d-block d-md-none waves-effect waves-light"
            href="javascript:void(0)"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ti-more" />
          </a>
        </div>

        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav float-left mr-auto ml-3 pl-1">
            {/* ============================================================== */}
            {/* Search */}
            {/* ============================================================== */}

            {/* ============================================================== */}
            {/* User profile and search */}
            {/* ============================================================== */}
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" href="javascript:void(0)">
                <form>
                  <div className="customize-input">
                    <input
                      className="form-control custom-shadow custom-radius border-0 bg-white"
                      type="search"
                      placeholder="Tìm kiếm"
                      aria-label="Search"
                    />
                    <i className="form-control-icon" data-feather="search" />
                  </div>
                </form>
              </a>
            </li>
            {/* Notification */}
            
          </ul>
          {/* ============================================================== */}
          {/* Right side toggle and nav items */}
          {/* ============================================================== */}
          
          <ul className="navbar-nav float-right">
          
            {/* End Notification */}
            {/* ============================================================== */}
            {/* create new */}
            {/* ============================================================== */}
            


            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="javascript:void(0)"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="../assets/images/users/profile-pic.jpg"
                  alt="user"
                  className="rounded-circle"
                  width={40}
                />
                <span className="ml-2 d-none d-lg-inline-block">
                  <span className="text-dark">{user?.email && user?.email.split("@")[0]}</span>{" "}
                  <i data-feather="chevron-down" className="svg-icon" />
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                <a className="dropdown-item" href="javascript:void(0)">
                  <i data-feather="user" className="svg-icon mr-2 ml-1" />
                  Thông tin các nhân
                </a>
                <a className="dropdown-item" href="javascript:void(0)">
                  <i
                    data-feather="credit-card"
                    className="svg-icon mr-2 ml-1"
                  />
                  Trạng thái
                </a>
                <a className="dropdown-item" href="javascript:void(0)">
                  <i data-feather="mail" className="svg-icon mr-2 ml-1" />
                  Tin nhắn
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="javascript:void(0)">
                  <i data-feather="settings" className="svg-icon mr-2 ml-1" />
                  Tuỳ chỉnh
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" onClick={logout}>
                  <i data-feather="power" className="svg-icon mr-2 ml-1" />
                  Đăng xuất
                </a>
                <div className="dropdown-divider" />
                <div className="pl-4 p-3">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-sm btn-info"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </li>
            {/* ============================================================== */}
            {/* User profile and search */}
            {/* ============================================================== */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
