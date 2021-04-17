import React from "react";
import "./style.css";
import { cards } from "../../cardInfo";

function CommunityCards() {
  return cards.map(() => {
    <div className="Container cardContainer">
      <div className="row firstRow">
        {/* this column can be outside of the loop on line 9? */}
        <div className="col-md-1"></div>
        <div className="col">
          <div className="card mt-2 cardBackground">
            <div className="card-body">
              <h5 className="card-title">{cards.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">{cards.description}</p>
            </div>
          </div>
        </div>
        {/* One card */}
        <div className="col">
          <div className="card mt-2 cardBackground">
            <div className="card-body">
              <h5 className="card-title">
                Disability Service Petition {cards.title}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">{cards.description}</p>
            </div>
          </div>
        </div>
        {/* One card */}
        <div className="col">
          <div className="card mt-2 cardBackground">
            <div className="card-body">
              <h5 className="card-title">Phone Bank Drive {cards.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">{cards.description}</p>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>;
  });
}

export default CommunityCards;
