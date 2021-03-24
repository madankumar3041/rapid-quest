import React from "react";
import "./sidebar.css";

function sidebar() {
  return (
    <div className="main-sidebar">
      <div className="search-icon">
        <i class="fa fa-search"></i>
      </div>
      <div className="home-icon">
      <i class="fa fa-home" aria-hidden="true"></i>
      </div>
      <div className="note-icon">
      <i class="fa fa-credit-card" aria-hidden="true"></i>
      </div>
      <div className="detail-icon">
      <i class="fa fa-address-card-o" aria-hidden="true"></i>
      </div>
      <div className="web-icon">
      <i class="fa fa-user" aria-hidden="true"></i>
      </div>
      <div className="notifi-icon">
        
      <i class="fa fa-bell-o" aria-hidden="true"></i>
      </div>
      <div className="next-icon">
      <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default sidebar;
