import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { HomeIcon } from "../../utils/icons";
import "./LoginSignupNav.css";

const LoginSignupNav = ({ pageName }) => {
  const navigate = useNavigate();
  return (
    <div className="login-nav">
      <div className="left">
        <img src="assets/brand/logo.svg" alt="" />
        <div className="home" onClick={(e) => navigate("/")}>
          <HomeIcon />
          <span>Home</span>
        </div>
      </div>
      {pageName === "login" && (
        <div className="right">
          <span>Don't have an account?</span>
          <Link to="/signup">sign up</Link>
        </div>
      )}
      {pageName === "signup" && (
        <div className="right">
          <span>Already have an account?</span>
          <Link to="/login">Log in</Link>
        </div>
      )}
    </div>
  );
};

export default LoginSignupNav;
