import React from "react";
import { ReactComponent as ReactLogo } from "../assets/logo.svg";
import SearchButton from "./SearchButton";
import "../styles/windBnB.css";

const Header = ({ data }) => {
  return (
    <div className="header">
      <ReactLogo className="logo" />
      <SearchButton />
    </div>
  );
};

export default Header;
