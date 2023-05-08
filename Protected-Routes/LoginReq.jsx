import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  const { login, children: parentChildren } = useSelector(
    (store) => store.userSlice
  );

  return login ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
