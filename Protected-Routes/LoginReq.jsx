import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  const { login, children: parentChildren } = useSelector(
    (store) => store.userSlice
  );
  return login ? (
    parentChildren.length === 0 && children.type.name !== "AddFirstChild" ? (
      <Navigate to="/parent/add-first-child" />
    ) : parentChildren.length > 0 && children.type.name === "AddFirstChild" ? (
      <Navigate to="/parent/my-children" />
    ) : (
      children
    )
  ) : (
    <Navigate to={"/login"} />
  );
};

export default ProtectedRoutes;
