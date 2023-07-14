import React from "react";
import "./Error.css";
import {
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";
import SimpleNav from "./../../components/SimpleNav/SimpleNav";
const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="error-page">
      <SimpleNav pageName={"addfirstchild"} />
      <div className="theContainer">
        <div className="error-page-wrapper">
          <div className="image">
            <img src="/assets/images/errorpage.svg" alt="" />
          </div>
          <h1>Oops!</h1>
          {isRouteErrorResponse(error) ? (
            <>
              <span>We're sorry, this path not found.</span>
              <button onClick={(e) => navigate("/")}>Go Home</button>
            </>
          ) : (
            <>
              <span>We're sorry,Some thing went wrong.</span>
              <button onClick={(e) => window.location.reload(false)}>
                Reload
              </button>
            </>
          )}
          <span className="still">
            If you are still having trouble, please contact
            <span>customer support.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Error;
