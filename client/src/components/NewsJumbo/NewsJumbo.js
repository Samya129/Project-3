import React from "react";
import "./style.css";

function NewsJumbo() {
  return (
      <section className="newsInclusive">
        <h2>News Articles</h2>
        <div className="container newsContainer">
          <h3>
            News
          </h3>
          <hr></hr>
        <div className="row videoRows">
        <div className="col-md-3 videoApi"><img src="BreakingNews.jpg" alt="BreakingNews"/></div> 
               <div className="col-md-3 videoApi2"><img src="Anderson.jpeg" alt="Anderson Cooper News"/></div> 
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
          </div>
        </div>
      </section>
  );
}
export default NewsJumbo;
