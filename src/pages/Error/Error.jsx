import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";
import SimpleNav from './../../components/SimpleNav/SimpleNav';
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <SimpleNav/>
      <div className="theContainer">
        <div className="wrapper">
          <div className="image">
            <img src="/assets/images/errorpage.svg" alt="" />
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
