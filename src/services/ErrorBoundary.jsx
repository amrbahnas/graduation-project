import { useEffect, useState } from "react";
import Error from "../pages/Error/Error";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleRouteError = (error, info) => {
      console.log("Error in route:", error, info);
      setHasError(true);
    };
    window.addEventListener("error", handleGlobalError);
    window.addEventListener("unhandledrejection", handleGlobalError);
    window.addEventListener("routeerror", handleRouteError);

    return () => {
      window.removeEventListener("error", handleGlobalError);
      window.removeEventListener("unhandledrejection", handleGlobalError);
      window.removeEventListener("routeerror", handleRouteError);
    };
  }, []);

  const handleGlobalError = (event) => {
    console.log("Global error:", event);
    setHasError(true);
    toast.error("Server error: please try again");
    navigate(0);
  };

  const handleOnError = () => {
    setHasError(true);
  };

  if (hasError) {
    return <Error />;
  }

  return <div onError={handleOnError}>{children}</div>;
};

export default ErrorBoundary;
