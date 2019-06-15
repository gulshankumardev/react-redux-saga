import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="app-header">
      <div className="container">
        <img className="logo" src={logo} alt="Reactor" />
        <span className="logo-text">Reactor</span>
      </div>
    </header>
  );
};

export default Header;
