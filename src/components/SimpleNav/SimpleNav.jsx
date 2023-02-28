import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./SimpleNav.css";
const SimpleNav = () => {
  const navigate = useNavigate();
  return (
    <div className="simple-nav">
      <div className="back" onClick={(e) => navigate(-1)}>
        <ArrowBackIosIcon />
        back
      </div>
      <img
        src="/assets/brand/logo.svg"
        alt=""
        onClick={(e) => navigate("/", { replace: true })}
      />
      <div></div>
    </div>
  );
};

export default SimpleNav;
