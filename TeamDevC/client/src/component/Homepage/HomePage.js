import { render } from "@testing-library/react";
import React, { Component, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import SizeBar from "../SizeBar/SizeBar";
import "./homepage.css";
import { useSelector } from "react-redux";

const HomePage = ({ history }) => {
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (!user || !user.token) history.push("/login");
  }, [user]);

  const Title = () => {
    return (
      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-7 align-self-center ">
            <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">
              Dashboard
            </h3>
            <div className="d-flex align-items-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 p-0">
                  <li className="breadcrumb-item">
                    <NavLink to="/campain" class="btn btn-danger btn-rounded">
                      <i className="far fa-heart" /> Tạo chiến dịch mới
                    </NavLink>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const HeaderHome = () => {
    return (
      <div className="card-group">
        <div className="card border-right">
          <div className="card-body">
            <div className="d-flex d-lg-flex d-md-block align-items-center">
              <div>
                <div className="d-inline-flex align-items-center">
                  <h2 className="text-dark mb-1 font-weight-medium">236</h2>
                  <span className="badge bg-primary font-12 text-white font-weight-medium badge-pill ml-2 d-lg-block d-md-none">
                    +18.33%
                  </span>
                </div>
                <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">
                  New Clients
                </h6>
              </div>
              <div className="ml-auto mt-md-3 mt-lg-0">
                <span className="opacity-7 text-muted">
                  <i data-feather="user-plus" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-right">
          <div className="card-body">
            <div className="d-flex d-lg-flex d-md-block align-items-center">
              <div>
                <h2 className="text-dark mb-1 w-100 text-truncate font-weight-medium">
                  <sup className="set-doller">$</sup>18,306
                </h2>
                <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">
                  Earnings of Month
                </h6>
              </div>
              <div className="ml-auto mt-md-3 mt-lg-0">
                <span className="opacity-7 text-muted">
                  <i data-feather="dollar-sign" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-right">
          <div className="card-body">
            <div className="d-flex d-lg-flex d-md-block align-items-center">
              <div>
                <div className="d-inline-flex align-items-center">
                  <h2 className="text-dark mb-1 font-weight-medium">1538</h2>
                  <span className="badge bg-danger font-12 text-white font-weight-medium badge-pill ml-2 d-md-none d-lg-block">
                    -18.33%
                  </span>
                </div>
                <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">
                  New Projects
                </h6>
              </div>
              <div className="ml-auto mt-md-3 mt-lg-0">
                <span className="opacity-7 text-muted">
                  <i data-feather="file-plus" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="d-flex d-lg-flex d-md-block align-items-center">
              <div>
                <h2 className="text-dark mb-1 font-weight-medium">864</h2>
                <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">
                  Projects
                </h6>
              </div>
              <div className="ml-auto mt-md-3 mt-lg-0">
                <span className="opacity-7 text-muted">
                  <i data-feather="globe" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Chart1 = () => {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Total Sales</h4>
            {/*<div id="campaign-v2" className="mt-2" style={{height: '283px', width: '100%'}} />*/}
            <Bar
              data={{
                labels: ["Quý 1", "Quý 2", "Quý 3", "Quý 4", "Quý 5"],
                datasets: [
                  {
                    label: "Population (millions)",
                    backgroundColor: [
                      "#3e95cd",
                      "#8e5ea2",
                      "#3cba9f",
                      "#e8c3b9",
                      "#c45850",
                    ],
                    data: [2478, 5267, 734, 784, 433],
                  },
                ],
              }}
              options={{
                legend: { display: false },
                title: {
                  display: true,
                  text: "Chiến lược marketing 2020",
                },
              }}
            />
            <ul className="list-style-none mb-0">
              <li>
                <i className="fas fa-circle text-primary font-10 mr-2" />
                <span className="text-muted">Direct Sales</span>
                <span className="text-dark float-right font-weight-medium">
                  $2346
                </span>
              </li>
              <li className="mt-3">
                <i className="fas fa-circle text-danger font-10 mr-2" />
                <span className="text-muted">Referral Sales</span>
                <span className="text-dark float-right font-weight-medium">
                  $2108
                </span>
              </li>
              <li className="mt-3">
                <i className="fas fa-circle text-cyan font-10 mr-2" />
                <span className="text-muted">Affiliate Sales</span>
                <span className="text-dark float-right font-weight-medium">
                  $1204
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const Chart2 = () => {
    return (
      <div className="col-md-6 col-lg-8">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-start">
              <h4 className="card-title mb-0">Bảng tăng trưởng</h4>
            </div>
            <div className="pl-4 mb-5">
              <Line
                data={{
                  labels: [
                    1500,
                    1600,
                    1700,
                    1750,
                    1800,
                    1850,
                    1900,
                    1950,
                    1999,
                    2050,
                  ],
                  datasets: [
                    {
                      data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                      label: "Quý 1",
                      borderColor: "#3e95cd",
                      fill: false,
                    },
                    {
                      data: [
                        282,
                        350,
                        411,
                        502,
                        635,
                        809,
                        947,
                        1402,
                        3700,
                        5267,
                      ],
                      label: "Quý 2",
                      borderColor: "#8e5ea2",
                      fill: false,
                    },
                    {
                      data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                      label: "Quý 3",
                      borderColor: "#3cba9f",
                      fill: false,
                    },
                    {
                      data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                      label: "Quý 4",
                      borderColor: "#e8c3b9",
                      fill: false,
                    },
                    {
                      data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                      label: "Quý 5",
                      borderColor: "#c45850",
                      fill: false,
                    },
                  ],
                }}
                options={{
                  title: {
                    display: true,
                    text: "Phân tích độ tăng trưởng qua các quý",
                  },
                  legend: {
                    display: true,
                    position: "bottom",
                  },
                }}
              />
            </div>
            <ul className="list-inline text-center mt-4 mb-0">
              <li className="list-inline-item text-muted font-italic">
                Lợi nhuận
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const Chart3 = () => {
    return (
      <div className="col-md-6 col-lg-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Hoạt động gần đây</h4>
            <div className="mt-4 activity">
              <div className="d-flex align-items-start border-left-line pb-3">
                <div>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-info btn-circle mb-2 btn-item"
                  >
                    <i data-feather="activity" />
                  </a>
                </div>
                <div className="ml-3 mt-2">
                  <h5 className="text-dark font-weight-medium mb-2">
                    Bài đăng mới
                  </h5>
                  <p className="font-14 mb-2 text-muted">
                    Phan Nhật Huy <br /> đã gửi bản báo cáo tháng 11.
                  </p>
                  <span className="font-weight-light font-14 text-muted">
                    10 phút trước
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-start border-left-line pb-3">
                <div>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-danger btn-circle mb-2 btn-item"
                  >
                    <i data-feather="message-square" />
                  </a>
                </div>
                <div className="ml-3 mt-2">
                  <h5 className="text-dark font-weight-medium mb-2">
                    Yêu cầu mới
                  </h5>
                  <p className="font-14 mb-2 text-muted">
                    Nguyễn Văn Mạnh vừa khởi tạo hỗ trợ <br />
                    về chiến lược mới
                  </p>
                  <span className="font-weight-light font-14 text-muted">
                    1 tiếng trước
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-start border-left-line">
                <div>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-cyan btn-circle mb-2 btn-item"
                  >
                    <i data-feather="bell" />
                  </a>
                </div>
                <div className="ml-3 mt-2">
                  <h5 className="text-dark font-weight-medium mb-2">
                    Thông báo mới !
                  </h5>
                  <p className="font-14 mb-2 text-muted">
                    1 thông báo từ Phạm Đức <br /> Minh
                  </p>
                  <span className="font-weight-light font-14 mb-1 d-block text-muted">
                    1 ngày trước
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const ShowDetails = () => {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <h4 className="card-title">Bảng xếp hạng</h4>
                <div className="ml-auto">
                  <div className="dropdown sub-dropdown">
                    <button
                      className="btn btn-link text-muted dropdown-toggle"
                      type="button"
                      id="dd1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i data-feather="more-vertical" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dd1"
                    >
                      <a className="dropdown-item" href="#">
                        Thêm
                      </a>
                      <a className="dropdown-item" href="#">
                        Cập nhật
                      </a>
                      <a className="dropdown-item" href="#">
                        Xoá
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table no-wrap v-middle mb-0">
                  <thead>
                    <tr className="border-0">
                      <th className="border-0 font-14 font-weight-medium text-muted">
                        Nhóm trưởng
                      </th>
                      <th className="border-0 font-14 font-weight-medium text-muted px-2">
                        Dự án
                      </th>
                      <th className="border-0 font-14 font-weight-medium text-muted">
                        Team
                      </th>
                      <th className="border-0 font-14 font-weight-medium text-muted text-center">
                        Trạng thái
                      </th>
                      <th className="border-0 font-14 font-weight-medium text-muted text-center">
                        Thời gian
                      </th>
                      <th className="border-0 font-14 font-weight-medium text-muted">
                        Lợi nhuận
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-top-0 px-2 py-4">
                        <div className="d-flex no-block align-items-center">
                          <div className="mr-3">
                            <img
                              src="../assets/images/users/widget-table-pic1.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={45}
                              height={45}
                            />
                          </div>
                          <div className>
                            <h5 className="text-dark mb-0 font-16 font-weight-medium">
                              Nguyễn Văn Mạnh
                            </h5>
                            <span className="text-muted font-14">
                              manhnv@gmail.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="border-top-0 text-muted px-2 py-4 font-14">
                        Elite Admin
                      </td>
                      <td className="border-top-0 px-2 py-4">
                        <div className="popover-icon">
                          <a
                            className="btn btn-primary rounded-circle btn-circle font-12"
                            href="javascript:void(0)"
                          >
                            DS
                          </a>
                          <a
                            className="btn btn-danger rounded-circle btn-circle font-12 popover-item"
                            href="javascript:void(0)"
                          >
                            SS
                          </a>
                          <a
                            className="btn btn-cyan rounded-circle btn-circle font-12 popover-item"
                            href="javascript:void(0)"
                          >
                            RP
                          </a>
                          <a
                            className="btn btn-success text-white rounded-circle btn-circle font-20"
                            href="javascript:void(0)"
                          >
                            +
                          </a>
                        </div>
                      </td>
                      <td className="border-top-0 text-center px-2 py-4">
                        <i
                          className="fa fa-circle text-primary font-12"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="In Testing"
                        />
                      </td>
                      <td className="border-top-0 text-center font-weight-medium text-muted px-2 py-4">
                        35
                      </td>
                      <td className="font-weight-medium text-dark border-top-0 px-2 py-4">
                        $96K
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-4">
                        <div className="d-flex no-block align-items-center">
                          <div className="mr-3">
                            <img
                              src="../assets/images/users/huy.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={45}
                              height={45}
                            />
                          </div>
                          <div className>
                            <h5 className="text-dark mb-0 font-16 font-weight-medium">
                              Phan Nhật Huy
                            </h5>
                            <span className="text-muted font-14">
                              huypn@gmail.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-muted px-2 py-4 font-14">
                        Real Homes WP Theme
                      </td>
                      <td className="px-2 py-4">
                        <div className="popover-icon">
                          <a
                            className="btn btn-primary rounded-circle btn-circle font-12"
                            href="javascript:void(0)"
                          >
                            DS
                          </a>
                          <a
                            className="btn btn-danger rounded-circle btn-circle font-12 popover-item"
                            href="javascript:void(0)"
                          >
                            SS
                          </a>
                          <a
                            className="btn btn-success text-white rounded-circle btn-circle font-20"
                            href="javascript:void(0)"
                          >
                            +
                          </a>
                        </div>
                      </td>
                      <td className="text-center px-2 py-4">
                        <i
                          className="fa fa-circle text-success font-12"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Done"
                        />
                      </td>
                      <td className="text-center text-muted font-weight-medium px-2 py-4">
                        32
                      </td>
                      <td className="font-weight-medium text-dark px-2 py-4">
                        $85K
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-4">
                        <div className="d-flex no-block align-items-center">
                          <div className="mr-3">
                            <img
                              src="../assets/images/users/hoang.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={45}
                              height={45}
                            />
                          </div>
                          <div className>
                            <h5 className="text-dark mb-0 font-16 font-weight-medium">
                              Phan Nhật Hoàng
                            </h5>
                            <span className="text-muted font-14">
                              hoangpn@gmail.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-muted px-2 py-4 font-14">
                        MedicalPro WP Theme
                      </td>
                      <td className="px-2 py-4">
                        <div className="popover-icon">
                          <a
                            className="btn btn-primary rounded-circle btn-circle font-12"
                            href="javascript:void(0)"
                          >
                            DS
                          </a>
                          <a
                            className="btn btn-danger rounded-circle btn-circle font-12 popover-item"
                            href="javascript:void(0)"
                          >
                            SS
                          </a>
                          <a
                            className="btn btn-cyan rounded-circle btn-circle font-12 popover-item"
                            href="javascript:void(0)"
                          >
                            RP
                          </a>
                          <a
                            className="btn btn-success text-white rounded-circle btn-circle font-20"
                            href="javascript:void(0)"
                          >
                            +
                          </a>
                        </div>
                      </td>
                      <td className="text-center px-2 py-4">
                        <i
                          className="fa fa-circle text-primary font-12"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Done"
                        />
                      </td>
                      <td className="text-center text-muted font-weight-medium px-2 py-4">
                        29
                      </td>
                      <td className="font-weight-medium text-dark px-2 py-4">
                        $81K
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-4">
                        <div className="d-flex no-block align-items-center">
                          <div className="mr-3">
                            <img
                              src="../assets/images/users/minh.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={45}
                              height={45}
                            />
                          </div>
                          <div className>
                            <h5 className="text-dark mb-0 font-16 font-weight-medium">
                              Phạm Đức Minh
                            </h5>
                            <span className="text-muted font-14">
                              minhpd@gmail.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-muted px-2 py-4 font-14">
                        Hosting Press HTML
                      </td>
                      <td className="px-2 py-4">
                        <div className="popover-icon">
                          <a
                            className="btn btn-primary rounded-circle btn-circle font-12"
                            href="javascript:void(0)"
                          >
                            DS
                          </a>
                          <a
                            className="btn btn-success text-white font-20 rounded-circle btn-circle"
                            href="javascript:void(0)"
                          >
                            +
                          </a>
                        </div>
                      </td>
                      <td className="text-center px-2 py-4">
                        <i
                          className="fa fa-circle text-danger font-12"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="In Progress"
                        />
                      </td>
                      <td className="text-center text-muted font-weight-medium px-2 py-4">
                        23
                      </td>
                      <td className="font-weight-medium text-dark px-2 py-4">
                        $80K
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MainHome = () => {
    return (
      <div className="pagewrapper">
        <Title />
        <HeaderHome />
        <div className="container-fluid">
          <Chart1 />
          <div className="row">
            <Chart2 />
            <Chart3 />
          </div>
          <ShowDetails />
        </div>
      </div>
    );
  };

  return <MainHome />;
};

export default HomePage;
