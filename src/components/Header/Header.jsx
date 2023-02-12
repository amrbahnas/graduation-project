import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <h1>
          The best offer on the market
          <span>for your childrens</span>
        </h1>
        <Link to="/signup">Get started</Link>
        <Link to="">Learn more</Link>
      </div>
    </header>
  );
};

export default Header;
