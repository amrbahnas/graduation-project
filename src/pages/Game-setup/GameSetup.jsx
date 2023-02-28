import React, { useState, useEffect } from "react";
import "./GameSetup.css";
// redux
import { useDispatch, useSelector } from "react-redux";
// router
import { Link, Outlet } from "react-router-dom";
// icons
import CheckIcon from "@mui/icons-material/Check";
import FastRewindIcon from "@mui/icons-material/FastRewind";
// react-router
import { useNavigate } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav/DashboardNav";

const GameSetup = () => {
  // variables
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [photoIndex, SetPhotoIndex] = useState(1);

  // get global state
  const { login } = useSelector((store) => store.userSlice);
  const { stepNumber } = useSelector((store) => store.unitsSlice);
  // user cant access this page if he has login
  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate, dispatch]);

  // component
  const StepBox = ({ index, title }) => {
    return (
      
        <div className="step">
          {stepNumber === index ? (
            <>
              <span className="bg-blue-500">{index + 2}</span>
              <span className="text-gray-600 dark:text-darkPText">{title}</span>
            </>
          ) : stepNumber > index ? (
            <>
              <span className="bg-blue-500">
                <CheckIcon />
              </span>
              <span className="text-gray-600 dark:text-darkPText">{title}</span>
            </>
          ) : (
            <>
              <span className="bg-disabled dark:bg-darkBody">{index + 2}</span>
              <span className="text-disabled dark:text-darkSText">{title}</span>
            </>
          )}
        </div>
      
    );
  };

  return (
    /********************************** DOM ************************************************* */
    <div className="gameSetup">
      <DashboardNav position={"gameSetup"} />

      <div className="theContainer ">
        <div className="wrapper">
          <div className="proccessLine">
            <div className="steps">
              <StepBox index={-1} title={"login"} />
              <StepBox index={0} title={"subject"} />
              <StepBox index={1} title={"units"} />
              <StepBox index={2} title={"data"} />
              <div className="line">
                <span style={{ width: `${(stepNumber + 1) * 33}%` }}></span>
              </div>
            </div>
          </div>
          <div className="pages">
            <Outlet />
          </div>
        </div>
      </div>
      <Link className="home" to="/">
        <FastRewindIcon />
      </Link>
    </div>
  );
};

export default GameSetup;
