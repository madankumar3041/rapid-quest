import React, { Component } from "react";
import Progress from "../Progressbar/Progress";
import "./mainContent.css";

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id1: "$300,000",
          text: "My Goal",
        },
        {
          id1: "59%",
          text: "Goal Achieved",
        },
        {
          id1: "$300",
          text: "Est. Montly Income",
        },
      ],
    };
  }
  render() {
    return (
      <div className="maincontent">
        <div className="main-col">
        <div className="header-text">
          <h5>Retirement Income</h5>
          <h3>Starting Year 2056</h3>
        </div>
        <div className="bar-text">
          {this.state.data.map((item) => (
            <div className="sub-text-mapped">
              <h3> {item.id1}</h3>
              <h6> {item.text}</h6>
            </div>
          ))}
        </div>
        <div className="charts-box">
          <h5>Contributions Overtime</h5>
          <img src='https://www.mathworks.com/help/matlab/ref/cdata_bar_example.png' alt = "chart" />
        </div>
        <div className="bottom-box">
          <h5>How do I compare to my peers?</h5>
          <h6>These numbers represent current goal achievement</h6>
          <div className="select-dropdown">
            <div className="selecting">
            <span>
              {" "}
              Age:
              <select>
                <option>Under 30</option>
                <option>Under 35</option>
              </select>
            </span>
            <span>
              {" "}
              salary:
              <select>
                <option>k 20 - k 30 </option>
                <option>k 30 - k 40 </option>
              </select>
            </span>
            </div>
            <span>
              {" "}
              Gender:
              <select>
                <option>Male</option>
                <option>Female</option>
              </select>
            </span>
          </div>
        </div>
        <div className="progress-drop">
        <Progress />
        </div>
      </div>
      </div>
    );
  }
}
export default MainContent;
