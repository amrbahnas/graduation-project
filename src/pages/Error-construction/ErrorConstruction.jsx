import React from "react";
import "./ErrorConstruction.css";
import { Link } from "react-router-dom";
import SimpleNav from "./../../components/SimpleNav/SimpleNav";
const ErrorConstruction = () => {
  return (
    <div className="error-construction">
      <SimpleNav />
      <div className="error-construction-wrapper">
        <img src="assets/images/error-construction.svg" alt="" />
        <span>Performance features coming soon!</span>
        <p>
          We are currently working on expanding this feature to the english
          experience. But for immediate value you can go to English Dashboard!
        </p>
        <Link to={-1}>Go Back</Link>
      </div>
    </div>
  );
};

export default ErrorConstruction;
