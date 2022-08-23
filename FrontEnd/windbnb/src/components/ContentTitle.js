import React from "react";
import "../styles/windBnB.css";

const ContentTitle = ({ data }) => {
  return (
  <div className="title-row">
      <h3>Stays in Place</h3>
      <p>10 stays</p>
  </div>)
};

export default ContentTitle;


// Updates required:
// 1. h2 place name to be added dynamically
// 2. number of avaibale stays to be updates dynamically