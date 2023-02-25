import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <div className="error-nav">
        <img
          src="assets/brand/logo.svg"
          alt=""
          onClick={(e) => navigate("/",{replace:true})}
        />
      </div>
      <div className="theContainer">
        <div className="wrapper">
          <div className="image">
            <img src="assets/images/errorpage.svg" alt="" />
          </div>
          <h1>Oops!</h1>
          <span>We're sorry but something went wrong.</span>
          <button onClick={(e) => location.reload()}>try again</button>
          <span className="still">
            If you are still having trouble, please contact
            <span>customer support.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Error;
