import React from "react";
import "../styles/windBnB.css";

const SingleCard = ({ item }) => {
  return (
    <div className="singleCard">
      <p>{item.title}</p>
      <img src={item.photo} alt={item.title} />
    </div>
  );
};

export default SingleCard;
