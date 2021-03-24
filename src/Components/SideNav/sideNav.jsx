import React, { Component } from "react";
import "./sidenav.css";
class sideNav extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          data: "20-08-07",
          Para: "Widthdrawal Transfer to Bank-XXX11",
        },
        {
          id1: "$4000",
          text: "Year-to-Date Contribution",
          data: "2020-07-21",
          Para: "Widthdrawal Transfer to Bank-XXX11",
        },
        {
          id1: "$1892",
          text: "Total Internet",
          data: "2020-07-16",
          Para: "Widthdrawal Transfer to Bank-XXX11",
        },
      ],
    };
  }
  render() {
    return (
      <div className="main-sidenav">
         <div className="user-profile">
            <div className="user-detail">
              <img
                src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="profile-name">
              <h3>Hi Mike,</h3>
              <h5>Welcome back.</h5>
            </div>
          </div>
        <div className="main-side-flow">
         
          <div className="day">
            <h5>Today</h5>
          </div>
          <h3>$19,892</h3>
          <h6>Account Balance</h6>
          <div className="bottle-text">
            {this.state.data.map((item) => (
              <div className="bottled-mapped">
                <h3> {item.id1}</h3>
                <h6> {item.text}</h6>
              </div>
            ))}
          </div>
          <button className="btn-btn">
            {" "}
            I want to <i class="arrow down"></i>
          </button>
          <div className="data-flow">
            <h5>Recent Transactions</h5>
            {this.state.data.map((item) => (
              <div className="bottle-mapped">
                <h6> {item.data}</h6>
                <p> {item.Para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default sideNav;
