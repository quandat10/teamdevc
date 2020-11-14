import React, { Component } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Header from "../Header/Header";
import SizeBar from "../SizeBar/SizeBar";

const Sentiment = () => {
  const MainSentiment = () => {
    return (
      <div className="container-fluid">
        <div className="row">
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
                          data: [
                            86,
                            114,
                            106,
                            106,
                            107,
                            111,
                            133,
                            221,
                            783,
                            2478,
                          ],
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
                          data: [
                            168,
                            170,
                            178,
                            190,
                            203,
                            276,
                            408,
                            547,
                            675,
                            734,
                          ],
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
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <Doughnut
                data={{
                  labels: ["Negative", "Positive", "Normal"],
                  datasets: [
                    {
                      label: "Population (millions)",
                      backgroundColor: ["#FF0000", "#40FF00", "#6E6E6E"],
                      data: [2478, 5267, 734],
                    },
                  ],
                }}
                option={{
                  title: {
                    display: true,
                    text: "Predicted world population (millions) in 2050",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="pagewrapper">
        <MainSentiment />
      </div>
  );
};

export default Sentiment;
