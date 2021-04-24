import React, { useEffect, useState } from "react";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";

// Create event route
function NewsJumbo() {
  const newsApi = process.env.REACT_APP_NEWS_KEY;
  const [search, setSearch] = useState(""); //holds search term itself
  const [newsResults, setNewsResults] = useState([]); // Actual newsResults
  // useEffect(() => {
  //   // console.log(process.env.REACT_APP_News_Key)
  //   fetch(
  //     "https://api.bing.microsoft.com/v7.0/news/search?q=Georgia+Vote&count=4",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Ocp-Apim-Subscription-Key": newsApi,
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       // setSearch(response.value)
  //       console.log(response.value[0]);
  //       //name of news article, description, image and url link to article.
  //       setNewsResults(response.value);
  //     });
  // }, []);

  return (
    <section className="newsInclusive">
      <div className="container newsContainer container-fluid">
        <h3 className="titleh3">News</h3>
        <hr></hr>
        <br></br>
        <br></br>
            <Carousel className="Size" fade>
              {newsResults.map((news) => {
                console.log(news);
                return (
                  <Carousel.Item key={news.url}>
                    <br></br>
                    <a className="Atag" href={news.url} target="_blank">
                      <img
                        className="d-block newsImage"
                        src={news.image.thumbnail.contentUrl}
                        alt="First slide"
                      />
                    </a>
                    <Carousel.Caption>
                      <h5>{news.name}</h5>
                      <p className="fontColor">{news.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
      </div>
    </section>
  );
}
export default NewsJumbo;
