import React from "react";
import { ReactComponent as ReactLogo } from "../assets/logo.svg";
import SearchButton from "./SearchButton";
import "../styles/windBnB.css";

const Header = ({ data, showSearch, setShowSearch }) => {
  return (
    <div className="header">
      <ReactLogo className="logo" />
      <SearchButton showSearch={showSearch} setShowSearch={setShowSearch} />
    </div>
  );
};

export default Header;
