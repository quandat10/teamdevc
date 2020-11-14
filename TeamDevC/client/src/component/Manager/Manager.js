import React, { Component } from "react";
import Header from "../Header/Header";
import SizeBar from "../SizeBar/SizeBar";

const Manager =()=> {
    const Cards = () => {
      return (
        <div className="row">
                                    {/* Column */}
                                    <div className="col-md-6 col-lg-3 col-xlg-3">
                                        <div className="card card-hover">
                                            <div className="p-2 bg-primary text-center">
                                                <h1 className="font-light text-white">2,064</h1>
                                                <h6 className="text-white">Total Tickets</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Column */}
                                    <div className="col-md-6 col-lg-3 col-xlg-3">
                                        <div className="card card-hover">
                                            <div className="p-2 bg-cyan text-center">
                                                <h1 className="font-light text-white">1,738</h1>
                                                <h6 className="text-white">Responded</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Column */}
                                    <div className="col-md-6 col-lg-3 col-xlg-3">
                                        <div className="card card-hover">
                                            <div className="p-2 bg-success text-center">
                                                <h1 className="font-light text-white">1100</h1>
                                                <h6 className="text-white">Resolve</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Column */}
                                    <div className="col-md-6 col-lg-3 col-xlg-3">
                                        <div className="card card-hover">
                                            <div className="p-2 bg-danger text-center">
                                                <h1 className="font-light text-white">964</h1>
                                                <h6 className="text-white">Pending</h6>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Column */}
                                </div>
      );
    };
    const TablesShow = () => {
      return (
        <div className="table-responsive">
          <table
            id="zero_config"
            className="table table-striped table-bordered no-wrap"
          >
            <thead>
              <tr>
                <th>Status</th>
                <th>Title</th>
                <th>ID</th>
                <th>Product</th>
                <th>Created by</th>
                <th>Date</th>
                <th>Agent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="badge badge-light-warning">Đang mở</span>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="font-weight-medium link"
                  >
                    Bài đăng 1
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="font-bold link">
                    276377
                  </a>
                </td>
                <td>Elegant Admin</td>
                <td>Nguyễn Văn Mạnh</td>
                <td>2018/05/01</td>
                <td>Fazz</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-light-danger">Đã đóng</span>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="font-weight-medium link"
                  >
                    Bài đăng 2
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="font-bold link">
                    1234251
                  </a>
                </td>
                <td>AdminX Admin</td>
                <td>Phan Nhật Huy</td>
                <td>2018/05/11</td>
                <td>Steve</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-light-success">Đang mở</span>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="font-weight-medium link"
                  >
                    Bài đăng 3
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="font-bold link">
                    1020345
                  </a>
                </td>
                <td>Admin-Pro</td>
                <td>Phan Nhật Hoàng</td>
                <td>2018/04/01</td>
                <td>John</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-light-warning">Đang mở</span>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="font-weight-medium link"
                  >
                    Bài đăng 4
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="font-bold link">
                    7810203
                  </a>
                </td>
                <td>Elegant Admin</td>
                <td>Nguyễn Văn Mạnh</td>
                <td>2018/01/01</td>
                <td>Fazz</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-light-warning">Đang mở</span>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="font-weight-medium link"
                  >
                    Bài đăng 5
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="font-bold link">
                    2103450
                  </a>
                </td>
                <td>AdminX Admin</td>
                <td>Phạm Đức Minh</td>
                <td>2018/05/01</td>
                <td>John</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-light-warning">Đang mở</span>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="font-weight-medium link"
                  >
                    Bài đăng 6
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="font-bold link">
                    2140530
                  </a>
                </td>
                <td>Admin-Pro</td>
                <td>Nguyễn Văn Mạnh</td>
                <td>2018/07/01</td>
                <td>Steve</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-light-success">
                    Tạm thời hoãn
                  </span>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="font-weight-medium link"
                  >
                    Bài đăng 7
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="font-bold link">
                    4500123
                  </a>
                </td>
                <td>Elegant Admin</td>
                <td>Phan Nhật Hoàng</td>
                <td>2018/05/10</td>
                <td>Fazz</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-light-danger">Đã đóng</span>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="font-weight-medium link"
                  >
                    Bài đăng 8
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="font-bold link">
                    1230450
                  </a>
                </td>
                <td>Elegant Admin</td>
                <td>Phan Nhật Huy</td>
                <td>2018/05/14</td>
                <td>John</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-light-danger">Đã đóng</span>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="font-weight-medium link"
                  >
                    Bài đăng 9
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="font-bold link">
                    1240503
                  </a>
                </td>
                <td>AdminX Admin</td>
                <td>Nguyễn Đức Minh</td>
                <td>2018/02/01</td>
                <td>Steve</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-light-success">Đang mở</span>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="font-weight-medium link"
                  >
                    Bài đăng 10
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="font-bold link">
                    1250304
                  </a>
                </td>
                <td>Admin-Pro</td>
                <td>Nguyễn Văn Mạnh</td>
                <td>2018/05/21</td>
                <td>Fazz</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-light-success">Đang mở</span>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="font-weight-medium link"
                  >
                    Bài đăng 11
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="font-bold link">
                    1470250
                  </a>
                </td>
                <td>Elegant Admin</td>
                <td>Nguyễn Đức Minh</td>
                <td>2018/05/11</td>
                <td>John</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-light-danger">Đã đóng</span>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="font-weight-medium link"
                  >
                    Bài đăng 12
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="font-bold link">
                    1450023
                  </a>
                </td>
                <td>Admin-Pro</td>
                <td>Trần Quân Đạt</td>
                <td>2018/05/13</td>
                <td>Steve</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-light-warning">Đang mở</span>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="font-weight-medium link"
                  >
                    Bài đăng 13
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="font-bold link">
                    1420530
                  </a>
                </td>
                <td>AdminX Admin</td>
                <td>Nguyễn Văn Mạnh</td>
                <td>2018/10/01</td>
                <td>Fazz</td>
              </tr>
            </tbody>
            {/*<tfoot>*/}
            {/*<tr>*/}
            {/*    <th>Status</th>*/}
            {/*    <th>Title</th>*/}
            {/*    <th>ID</th>*/}
            {/*    <th>Product</th>*/}
            {/*    <th>Created by</th>*/}
            {/*    <th>Date</th>*/}
            {/*    <th>Agent</th>*/}
            {/*</tr>*/}
            {/*</tfoot>*/}
          </table>
          <ul className="pagination float-right">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex={-1}>
                Trước
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Tiếp
              </a>
            </li>
          </ul>
        </div>
      );
    };
    return (
      <div className="pagewrapper">
      <div className="container-fluid">
        {/* ============================================================== */}
        {/* Start Page Content */}
        {/* ============================================================== */}
        {/* basic table */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <Cards />
                <TablesShow />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    );
}

export default Manager;
