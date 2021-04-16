import React, { useEffect } from "react";
import "./style.css";
import axios from "axios";

function NewsJumbo() {
  useEffect(() => {
    axios.get(
      "https://bing-news-search1.p.rapidapi.com/news/trendingtopics?textFormat=Raw&safeSearch=Off",
      {
        headers: {
          "x-search-location": "Georgia",
          "x-bingapis-sdk": "true",
          "x-rapidapi-key": "45ddc71006msh100d431d8ce72d4p13d9f4jsn32ec95c8283c",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "useQueryString": true
        },
      }
    ).then((response)=>{
console.log(response)
    })

  }, []);

  return (
    <section className="newsInclusive">
      <div className="container newsContainer">
        <h3>News</h3>
        <hr></hr>
        <div className="row videoRows">
          <div className="col-md-3 videoApi">
            <img src="BreakingNews.jpg" alt="BreakingNews" />
          </div>
          <div className="col-md-3 videoApi2">
            <img src="Anderson.jpeg" alt="Anderson Cooper News" />
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </section>
  );
}
export default NewsJumbo;
