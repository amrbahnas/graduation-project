import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import ApiClient from "../../services/api-client";
import { ArrowBackIcon } from "../../utils/icons";
import LoginSignupNav from "./../../components/login-signup-nav/LoginSignupNav";
import "./ForgotPassword.css";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const forgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return null;
    }
    if (!email.includes("@gmail.com")) {
      toast.error("This email doesn`t exists");
      return null;
    }
    const apiClient = new ApiClient("/parent/forgot-password");
    setLoading(true);
    toast.promise(apiClient.post({ email }), {
      loading: "Sending...",
      success: () => {
        setLoading(false);
        return <b>Check Your Email</b>;
      },
      error: () => {
        setLoading(false);
        return <b>This email doesn`t exists</b>;
      },
    });
  };

  return (
    <div className="forgot-password">
      <LoginSignupNav pageName={"signup"} />
      <div className="forgot-password-wrapper">
        <Link to={"/login"}>
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
            <input
              type="email"
              name=""
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button onClick={forgotPassword} disabled={loading}>
            <span>{loading ? "loading..." : "Forgot password"}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
