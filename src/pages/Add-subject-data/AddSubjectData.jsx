import React, { useState, useEffect } from "react";
import "./AddSubjectData.css";
// redux
import { useDispatch, useSelector } from "react-redux";
// router
import { Link, Outlet } from "react-router-dom";
// react-router
import { useNavigate } from "react-router-dom";

import InputStepper from "../../components/InputStepper/InputStepper";
import SimpleNav from "./../../components/SimpleNav/SimpleNav";
import SelectSubject from "./../../components/Select-subject/SelectSubject";

const AddSubjectData = () => {
  // variables
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const steps = ["login", "subject", "units", "data"];
  // get global state
  const { login } = useSelector((store) => store.userSlice);
  const [activeStep, setactiveStep] = useState(2);

  return (
    /********************************** DOM ************************************************* */
    <div className="addSubjectData">
      <SimpleNav />
      <div className="theContainer ">
        <div className="wrapper">
          <div className="stepper">
            <InputStepper steps={steps} activeStep={activeStep} />
          </div>
          <div className="pages">
            <Subject />

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubjectData;
