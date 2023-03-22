import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SimpleNav from "./../../components/SimpleNav/SimpleNav";
import SelectChild from "../../components/asign-task-pages/SelectChild";
import "./AsignTask.css";
import InputStepper from "../../components/InputStepper/InputStepper";
import SelectSubject from "./../../components/Select-subject/SelectSubject";
import DataSource from "../../components/asign-task-pages/DataSource";
import SelectGame from "./../../components/asign-task-pages/SelectGame";
const AsignTask = () => {
  const navigate = useNavigate();
  const steps = [
    "select child",
    "Subject",
    "Game",
    "source data",
    "Select data",
  ];
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
          return <SelectGame />;
        case 3:
          return (
            <DataSource dataSource={dataSource} setdataSource={setdataSource} />
          );
        case 4:
          return (
            <p className="w-full h-40 pt-5 text-center uppercase ">
              {" "}
              no data found!
            </p>
          );
        case 5:
          return "";
        default:
          return "";
      }
    };
    setSwitchResult(switchCase);
  }, [activeStep]);

  const nextHandler = () => {
    if (activeStep === 4) navigate("/parent/my-children");
    setactiveStep(activeStep < 4 ? activeStep + 1 : activeStep);
  };
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
            <button onClick={nextHandler}>
              <span>{activeStep === 4 ? "Submit" : "Next"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsignTask;
