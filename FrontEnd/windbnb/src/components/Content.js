import React from "react";
import Cards from "./Cards";
import ContentTitle from "./ContentTitle";

const Content = ({ data }) => {
  // console.log("Title component", data.length);
  return (
    <div>
      <ContentTitle data={data} />
      <Cards data={data} />
    </div>
  );
};

export default Content;
