import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CommunityJumbo from "../../components/CommunityJumbotron/CommunityJumbo";
import NewsJumbo from "../../components/NewsJumbo/NewsJumbo";
// import Capitol from "../../assets/images/Capitol"

function CommunityPage() {
  return (
    <div>
      <Navbar />
      <div class="container jumbotronContainer">
        <CommunityJumbo />
        <NewsJumbo />
      </div>
    </div>
  );
}
export default CommunityPage;
