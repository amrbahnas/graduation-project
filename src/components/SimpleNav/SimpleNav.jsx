import React from "react";
import { useNavigate } from "react-router-dom";
import "./SimpleNav.css";
const SimpleNav = () => {
  const navigate = useNavigate();
  return (
    <div className="simple-nav">
      <img
        src="assets/brand/logo.svg"
        alt=""
        onClick={(e) => navigate("/", { replace: true })}
      />
    </div>
  );
};

export default SimpleNav;
