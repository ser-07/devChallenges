import React from "react";
import { MdAddShoppingCart, MdAttachFile, MdNotStarted } from "react-icons/md";
import "./buttonstyle.css";

const Button = ({
  color,
  varient,
  startIcon,
  endIcon,
  size = "md",
  disabled,
  disableShadow,
  btnname,
}) => {
  // console.log(color);

  let icon1;
  let icon2;
  let iconClass = "";
  switch (startIcon) {
    case "cart":
      icon1 = <MdAddShoppingCart />;
      iconClass = "icon";
      break;
    case "start":
      icon1 = <MdNotStarted />;
      iconClass = "icon";
      break;
    case "attach":
      icon1 = <MdAttachFile />;
      iconClass = "icon";
      break;
    default:
      icon1 = null;
  }

  switch (endIcon) {
    case "cart":
      icon2 = <MdAddShoppingCart />;
      iconClass = "icon";
      break;
    case "start":
      icon2 = <MdNotStarted />;
      iconClass = "icon";
      break;
    case "attach":
      icon2 = <MdAttachFile />;
      iconClass = "icon";
      break;
    default:
      icon2 = null;
  }

  return (
    <button
      className={`btn ${color} ${varient} ${iconClass} ${size} ${
        disabled ? "disabled" : ""
      } ${disableShadow ? "disableShadow" : ""}`}
    >
      {startIcon && <span>{icon1}</span>}
      {btnname}
      {startIcon === undefined && endIcon && <span>{icon2}</span>}
    </button>
  );
};

Button.defaultProps = {
  btnname: "Default",
};

export default Button;
