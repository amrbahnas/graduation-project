import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProcessLoading from "../src/components/Process-loading/ProcessLoading";
import ErrorBoundary from "../src/services/ErrorBoundary";
const ProtectedRoutes = ({ children }) => {
  const { login, children: parentChildren } = useSelector(
    (store) => store.userSlice
  );
  return login ? (
    <Suspense fallback={<ProcessLoading />}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Suspense>
  ) : (
    <Navigate to={"/login"} />
  );
};
export default ProtectedRoutes;
