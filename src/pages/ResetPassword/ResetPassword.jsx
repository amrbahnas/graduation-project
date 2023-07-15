import React, { useState } from "react";
import "./ResetPassword.css";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import ApiClient from "./../../services/api-client";
const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const newPasswordHandler = (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return null;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Password does not match");
      return null;
    }
    const apiClient = new ApiClient("/parent/reset-password/" + token);
    setLoading(true);
    toast.promise(apiClient.post({ pass: newPassword }), {
      loading: "loading...",
      success: () => {
        setLoading(false);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        return <b> Password updated</b>;
      },
      error: () => {
        setLoading(false);
        return <b>Some thing went wrong!</b>;
      },
    });
  };
  return (
    <div className="reset-password">
      <div className="reset-password-wrapper">
        <span className="title">Enter New password</span>
        <form>
          <div className="input">
            <label htmlFor="new">New Password</label>
            <input
              type="password"
              name=""
              value={newPassword}
              id="new"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              name=""
              value={confirmPassword}
              id="confirm"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button onClick={newPasswordHandler} disabled={loading}>
            <span>{loading ? "loading..." : "Reset password"}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
