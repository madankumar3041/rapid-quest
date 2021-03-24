import React from "react";
import "./mobile.css";
function MobileSideBar() {
  return (
    <div className="sidebar-container">
      <div className="main-sidebars">
        <div className="home-icons">
          <i class="fa fa-home" aria-hidden="true"></i>
        </div>
        <div className="note-icons">
          <i class="fa fa-credit-card" aria-hidden="true"></i>
        </div>
        <div className="detail-icons">
          <i class="fa fa-address-card-o" aria-hidden="true"></i>
        </div>
        <div className="web-icons">
          <i class="fa fa-user" aria-hidden="true"></i>
        </div>
        <div className="search-icons">
          <i class="fa fa-search"></i>
        </div>
      </div>
      <div className="notifi-ico">
        <i class="fa fa-bell-o" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default MobileSideBar;
