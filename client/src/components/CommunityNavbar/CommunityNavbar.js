import React from "react";
import "./style.css";

function CommunityNavbar() {
  return (
    <nav className="navbar navbar-expand-lg backgroundNav">
      <a className="navbar-brand" href="#"
        >UnifyingOurVote</a
      >
      <div
        className="collapse navbar-collapse topnav-right"
        id="navbarSupportedContent"
      >
        <button className="logOff" type="submit">Log Off</button>
      </div>
    </nav>
  );
}
export default CommunityNavbar;
