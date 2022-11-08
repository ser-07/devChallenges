import React from "react";
import "../styles/windBnB.css";

const SingleCard = ({ item }) => {
  return (
    <div className="singleCard">
      <img src={item.photo} alt={item.title} />
      <div className="singleCard-details-lines">
        <div className="singleCard-details-line1">
          {item.superHost && <p className="superhost-line">SuperHost</p>}
          <div className="item-line">
            <div className="item-line-type">
              <p>{item.type}</p>
              {item.beds && <p>. {item.beds} beds</p>}
            </div>
            <div>
              <p className="rating-p">{item.rating}</p>
            </div>
          </div>
        </div>
        <div className="singleCard-details-line2">
          <p className="SingleCard-title">{item.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
