import React from "react";
import "./style.css";
import { cards } from "../../cardInfo";

function CommunityCards() {
  return (
    <div className="Container cardContainer card">
      <div
        className="row firstRow"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* this column can be outside of the loop on line 9? */}
        {/* <div className="col-md-1"></div> */}
        {
          cards.map(card => {
            return(
          <div className="col-md-4">
            <div className="card mt-2 cardBackground">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">
                  {card.description}... <br />
                  <a id="linkToEvent" href=""> 
                    Click to read more
                  </a>
                </p>
              </div>
            </div>
          </div>
          )
          })
        }
      </div>
    </div>
    // </div>
  );
}

export default CommunityCards;
