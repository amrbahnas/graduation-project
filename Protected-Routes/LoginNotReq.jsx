import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginNotReq = ({ children }) => {
  const { login, children: parentChildren } = useSelector(
    (store) => store.userSlice
  );

  return children;

  return login ? (
    parentChildren.length === 0 ? (
      <Navigate to="/parent/add-first-child" />
    ) : (
      <Navigate to="/parent/my-children" />
    )
  ) : (
    children
  );
};

export default LoginNotReq;
