import { useState, useEffect } from "react";
import SimpleNav from "./../../components/SimpleNav/SimpleNav";
import SelectChild from "../../components/add-task-pages/SelectChild";
import "./AsignTask.css";
import InputStepper from "../../components/InputStepper/InputStepper";
import SelectSubject from "./../../components/Select-subject/SelectSubject";
import DataSource from "../../components/add-task-pages/DataSource";
const AsignTask = () => {
  const steps = ["select child", "Subject", "source data", "Select data"];
  const [activeStep, setactiveStep] = useState(0);
  const [switchResult, setSwitchResult] = useState(null);
  const [dataSource, setdataSource] = useState("previous");
  useEffect(() => {
    const switchCase = () => {
      switch (activeStep) {
        case 0:
          return <SelectChild />;
        case 1:
          return <SelectSubject />;
        case 2:
          return (
            <DataSource dataSource={dataSource} setdataSource={setdataSource} />
          );
        case 3:
          return "";
        case 4:
          return "";
        default:
          return "";
      }
    };
    setSwitchResult(switchCase);
  }, [activeStep]);
  return (
    <div className="asign-task">
      <SimpleNav />
      <div className="asign-task-wrapper">
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
            <button
              onClick={() =>
                setactiveStep(activeStep < 3 ? activeStep + 1 : activeStep)
              }
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsignTask;
