import React from "react";
import "../styles/windBnB.css";

const SearchButton = () => {
  return (
    <div className="btn-filter">
      <button className="nav-btn">Location</button>
      <div className="btn-div"></div>
      <button className="nav-btn">Add Guest</button>
    </div>
  );
};

export default SearchButton;

// Need to add
// 1. Search icon after add guest button
// 2. Dynamic render of Location and guest
