import React from "react";
import Navbar from "../../components/CommunityNavbar";
import CommunityJumbo from "../../components/CommunityJumbotron";
import NewsJumbo from "../../components/NewsJumbo";
import CommunityCards from "../../components/CommunityCards";
import "./style.css"
import CreateEventButton from "../../components/CreateEventButton";

function CommunityPage() {
  return (
  <div>
     <Navbar />
      <div className="container jumboCards">

        <div className="container img-fluid jumbotronContainer container-fluid">
          <CommunityJumbo />
          <NewsJumbo />
        </div>

        <CommunityCards/>

      </div>
      <CreateEventButton/> 
  </div>
    
  );
}
export default CommunityPage;
