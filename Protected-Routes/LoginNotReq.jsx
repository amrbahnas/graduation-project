import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProcessLoading from "../src/components/Process-loading/ProcessLoading";
import ErrorBoundary from "../src/services/ErrorBoundary";
const LoginNotReq = ({ children }) => {
  const { login, children: parentChildren } = useSelector(
    (store) => store.userSlice
  );
  return login ? (
    parentChildren.length === 0 ? (
      <Navigate to="/parent/add-first-child" />
    ) : (
      <Navigate to="/parent/my-children" />
    )
  ) : (
    <Suspense fallback={<ProcessLoading />}>{children}</Suspense>
  );
};
export default LoginNotReq;
