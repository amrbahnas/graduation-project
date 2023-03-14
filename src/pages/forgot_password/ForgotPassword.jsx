import React from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoginSignupNav from "./../../components/login-signup-nav/LoginSignupNav";
const ForgotPassword = () => {
  return (
    <div className="forgot-password">
      <LoginSignupNav pageName={"signup"} />
      <div className="forgot-password-wrapper">
        <Link to={-1}>
          <ArrowBackIcon />
          <span>back</span>
        </Link>
        <span className="title">Reset password</span>
        <span className="note">
          Enter your email address and we'll send you instructions to reset your
          password.
        </span>
        <form>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="email" />
          </div>
          <button>
            <span>reset password</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
