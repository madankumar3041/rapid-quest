import React from "react";
import './progress.css'
function Progress() {
  return (
    <div class="set-size charts-container">
  <div class="pie-wrapper progress-78 style-2">
    <span class="label">78<span class="smaller">%</span></span>
    <div class="pie">
      <div class="left-side half-circle"></div>
      <div class="right-side half-circle"></div>
    </div>
    <div class="shadow"></div>
  </div>
  <div class="pie-wrapper progress-95 style-2">
    <span class="label">95<span class="smaller">%</span></span>
    <div class="pie">
      <div class="left-side half-circle"></div>
      <div class="right-side half-circle"></div>
    </div>
    <div class="shadow"></div>
  </div>
  <div class="pie-wrapper progress-59 style-2">
    <span class="label">59<span class="smaller">%</span></span>
    <div class="pie">
      <div class="left-side half-circle"></div>
      <div class="right-side half-circle"></div>
    </div>
    <div class="shadow"></div>
  </div>
  <div className="progress-title">
    <h6>Avearge</h6>
    <h6>Top</h6>
    <h5>Me</h5>
  </div>
</div>
  );
}

export default Progress;
