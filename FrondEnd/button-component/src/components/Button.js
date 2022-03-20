import React from "react";
import "./buttonstyle.css";

const Button = ({ color, varient }) => {
  console.log(color);

  return <button className={`btn ${color} ${varient}`}>Button</button>;
};

export default Button;
