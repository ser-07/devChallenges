import React from "react";
import "../styles/windBnB.css";

const SearchButton = ({ showSearch, setShowSearch }) => {
  return (
    <div className="btn-filter">
      <button
        className="nav-btn"
        onClick={() => {
          setShowSearch(!showSearch);
          console.log("Location Button clicked");
        }}
      >
        Location
      </button>
      <div className="btn-div"></div>
      <button
        className="nav-btn"
        onClick={() => {
          setShowSearch(!showSearch);
          console.log("Guest Button clicked");
        }}
      >
        Add Guest
      </button>
    </div>
  );
};

export default SearchButton;

// Need to add
// 1. Search icon after add guest button
// 2. Dynamic render of Location and guest
