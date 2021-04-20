import React from "react";
import Navbar from "../../components/CommunityNavbar/CommunityNavbar";
import CommunityJumbo from "../../components/CommunityJumbotron/CommunityJumbotron";
import NewsJumbo from "../../components/NewsJumbo/NewsJumbo";
import CommunityCards from "../../components/CommunityCards/CommunityCards";
import "./style.css"

function CommunityPage() {
  return (
  <div>
     <Navbar />
      <div className="container jumboCards">

        <div className="container img-fluid jumbotronContainer">
          <CommunityJumbo />
          <NewsJumbo />
        </div>

        <CommunityCards/>

      </div>
  </div>
    
  );
}
export default CommunityPage;
