import React, { useState } from "react";
import Header from "../Header/Header";
import SizeBar from "../SizeBar/SizeBar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Campain = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [App_secret, setAppsecret] = useState();
  const [App_id, setAppid] = useState();

  const [Page_id, setPageid] = useState();
  const [Accesstoken, setAccesstoken] = useState();
  const [Keyword, setKeyword] = useState();

  const handleSubmit = () => {
    return axios.post(`${process.env.REACT_APP_API}/campaign`, {
      email: user.email,
      app_secret: App_secret,

      app_id: App_id,
      page_id: Page_id,

      access_token: Accesstoken,
      Keyword: Keyword,
      flag: "0",
    });
  };
  return (
    <div className="pagewrapper">
      <div className="row">
        <div className="card">
          <div className="card-body">
            <div className="card-header text-center">Cách lấy tham số</div>
            <ul className="nav nav-pills bg-nav-pills nav-justified mb-3">
              <li className="nav-item">
                <a
                  href="#App_secret"
                  data-toggle="tab"
                  aria-expanded="false"
                  className="nav-link rounded-0 active"
                >
                  <i className="mdi mdi-home-variant d-lg-none d-block mr-1" />
                  <span className="d-none d-lg-block">App_secret</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#App_id"
                  data-toggle="tab"
                  aria-expanded="true"
                  className="nav-link rounded-0"
                >
                  <i className="mdi mdi-account-circle d-lg-none d-block mr-1" />
                  <span className="d-none d-lg-block">App_id</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#Page_id"
                  data-toggle="tab"
                  aria-expanded="false"
                  className="nav-link rounded-0"
                >
                  <i className="mdi mdi-settings-outline d-lg-none d-block mr-1" />
                  <span className="d-none d-lg-block">Page_id</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#Accesstoken"
                  data-toggle="tab"
                  aria-expanded="false"
                  className="nav-link rounded-0"
                >
                  <i className="mdi mdi-settings-outline d-lg-none d-block mr-1" />
                  <span className="d-none d-lg-block">Accesstoken</span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="App_secret">
                <p>App_secret</p>
                <p className="mb-0">
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.
                </p>
              </div>
              <div className="tab-pane show" id="App_id">
                <p>App_id</p>
                <p className="mb-0">
                  Leggings occaecat dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                  sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                  enim.
                </p>
              </div>
              <div className="tab-pane" id="Page_id">
                <p>Page_id</p>
                <p className="mb-0">
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                  arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.
                </p>
              </div>
              <div className="tab-pane" id="Accesstoken">
                <p>Accesstoken</p>
                <p className="mb-0">Accesstoken</p>
              </div>
            </div>
          </div>{" "}
          {/* end card-body*/}
        </div>

        <div className="col-lg-8">
          <div className="card text-center">
            <form onSubmit={handleSubmit}>
              <div className="form-group ">
                <small
                  id="name1"
                  className="badge badge-default badge-info form-text text-white float-left"
                >
                  App secret
                </small>

                <input
                  className="form-control"
                  id="uname"
                  type="text"
                  placeholder="App_secret"
                  value={App_secret}
                  onChange={(e) => setAppsecret(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                {/* <label className="text-dark">App_id</label> */}
                <small
                  id="name1"
                  className="badge badge-default badge-warning form-text text-white float-left"
                >App id</small>

                <input
                  className="form-control"
                  id="pwd"
                  type="text"
                  placeholder="App_id"
                  value={App_id}
                  onChange={(e) => setAppid(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                {/* <label className="text-dark">Page_id</label> */}
                <small
                  id="name1"
                  className="badge badge-default badge-danger form-text text-white float-left"
                >Page id</small>
                <input
                  className="form-control"
                  id="pwd"
                  type="text"
                  placeholder="Page_id"
                  value={Page_id}
                  onChange={(e) => setPageid(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                {/* <label className="text-dark">Accesstoken</label> */}
                <small
                  id="name1"
                  className="badge badge-default badge-success form-text text-white float-left"
                >Accesstoken</small>
                <input
                  className="form-control "
                  id="pwd"
                  type="text"
                  placeholder="Accesstoken"
                  value={Accesstoken}
                  onChange={(e) => setAccesstoken(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                {/* <label className="text-dark">Keyword</label> */}
                <small
                  id="name1"
                  className="badge badge-default badge-info form-text text-white float-left"
                >Keyword</small>
                <input
                  className="form-control"
                  id="pwd"
                  type="text"
                  placeholder="Keyword"
                  value={Keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-success btn-rounded">
                <i className="fas fa-check" /> Tạo Campaign
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
        </div>
      </div>
    </div>
  );
};

export default Campain;
