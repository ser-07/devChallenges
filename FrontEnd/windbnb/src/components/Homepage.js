import React from "react";
import Header from "./Header";
import Content from "./Content";
import { useState, useEffect } from "react";
import staydata from "../db/stays.json";

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(staydata);
  }, []);

  // console.log(data);

  return (
    <div>
      <Header data={data} />
      <Content data={data} />
    </div>
  );
};

export default Homepage;
