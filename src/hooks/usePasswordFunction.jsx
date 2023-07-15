import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ApiClient from "../services/api-client";
import { useNavigate } from "react-router-dom";

const usePasswordFunction = () => {
  const navigate = useNavigate();
  const [forgotPasswordIsLoading, setForgotPasswordIsLoading] = useState(false);
  const [newPasswordHandlerIsloading, setNewPasswordHandlerIsLoading] =
    useState(false);
  const forgotPassword = async ({ e, email }) => {
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
    setForgotPasswordIsLoading(true);
    toast.promise(apiClient.post({ email }), {
      loading: "Sending...",
      success: () => {
        setForgotPasswordIsLoading(false);
        return <b>Check Your Email</b>;
      },
      error: (error) => {
        // console.log(error.response.data.message);
        setForgotPasswordIsLoading(false);
        // return <b>This email doesn`t exists</b>;
        return <b>{error.response.data.message}</b>;
      },
    });
  };

  const newPasswordHandler = ({ e, newPassword, confirmPassword, token }) => {
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
    setNewPasswordHandlerIsLoading(true);
    toast.promise(apiClient.post({ pass: newPassword }), {
      loading: "loading...",
      success: () => {
        setNewPasswordHandlerIsLoading(false);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        return <b> Password updated</b>;
      },
      error: (error) => {
        setNewPasswordHandlerIsLoading(false);
        // return <b>Some thing went wrong!</b>;
        return <b>{error.response.data.message}</b>;
      },
    });
  };
  return {
    forgotPassword,
    newPasswordHandler,
    isLoading: forgotPasswordIsLoading || newPasswordHandlerIsloading,
  };
};

export default usePasswordFunction;
