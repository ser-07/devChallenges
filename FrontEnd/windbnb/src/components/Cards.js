import React from "react";
import SingleCard from "./SingleCard";
import "../styles/windBnB.css";

const Cards = ({ data }) => {
  // console.log(data);
  return (
    <div className="cards">
      {data.map((item) => {
        // console.log(item);
        return <SingleCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Cards;
