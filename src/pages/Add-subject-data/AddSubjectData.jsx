import React, { useState, useEffect } from "react";
import "./AddSubjectData.css";
// react-router
import { useNavigate } from "react-router-dom";
import InputStepper from "../../components/InputStepper/InputStepper";
import SimpleNav from "./../../components/SimpleNav/SimpleNav";
import SelectSubject from "./../../components/Select-subject/SelectSubject";
import SelectFolder from "./../../components/Select-data-folder/SelectFolder";

const AddSubjectData = () => {
  // variables
  const navigate = useNavigate();
  const [activeStep, setactiveStep] = useState(0);
  const [switchResult, setSwitchResult] = useState(null);
  const steps = ["Subject", "Folder", "Data"];

  const nextHandler = () => {
    if (activeStep === 2) navigate("/parent/my-children");
    setactiveStep(activeStep < 2 ? activeStep + 1 : activeStep);
  };

  useEffect(() => {
    const switchCase = () => {
      switch (activeStep) {
        case 0:
          return <SelectSubject />;
        case 1:
          return <SelectFolder />;
        default:
          return (
            <p className="w-full h-40 pt-5 text-center uppercase ">
              {" "}
              no data found!
            </p>
          );
      }
    };
    setSwitchResult(switchCase);
  }, [activeStep]);

  return (
    /********************************** DOM ************************************************* */
    <div className="add-data">
      <SimpleNav />
      <div className="add-data-wrapper">
        <InputStepper steps={steps} activeStep={activeStep} />
        <div className="page">
          {switchResult}
          <div className="btns">
            {activeStep > 0 && (
              <button
                className="previous"
                onClick={() =>
                  setactiveStep(activeStep !== 0 ? activeStep - 1 : activeStep)
                }
              >
                <span>Previous</span>
              </button>
            )}
            <button onClick={nextHandler}>
              <span>{activeStep === 2 ? "Submit" : "Next"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubjectData;
