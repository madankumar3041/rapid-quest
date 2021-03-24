import React from "react";
import "./Rightmain.css";

function RightContent() {
  return (
    <div className="right-main">
      <div className="contest">
        <div className="div-content">
          <h5>Retirement Strategy</h5>
        </div>
        <div className="meter-progress">
          <h>Employee Contribution</h>
        <meter id="disk_d" value="0.6"></meter>
        12%
        </div>
        <div className="meter-progress">
          <h>Retirement Age</h>
        <meter id="disk_d" value="0.6"></meter>
        65
        </div>
        <div className="boxing-dotted">
          <h5>Employer Contribution</h5> <h4> 8.4%</h4>
        </div>
        <div className="boxing-dotten">
          <h5>Interest Rate</h5> <h4>5%</h4>
        </div>
        <button className="btn-button">Update</button>
        <div className="midflow">
          <a href="#">
            {" "}
            View Help Docs<i class="arrow-line right"></i>
          </a>
        </div>
      </div>
      <div className="artflow">
        <p>Are you considering a</p>
        <span>Housing Advance?</span>
        <h6>Limited time reduced interest.</h6>
        <a href="#">
          {" "}
          Learn More<i class="arrow-line right"></i>
        </a>
      </div>
    </div>
  );
}

export default RightContent;
