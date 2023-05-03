import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SimpleNav from "./../../components/SimpleNav/SimpleNav";
import SelectChild from "../../components/asign-task-pages/SelectChild";
import "./AsignTask.css";
import InputStepper from "../../components/InputStepper/InputStepper";
import SelectSubject from "./../../components/Select-subject/SelectSubject";
import DataSource from "../../components/asign-task-pages/DataSource";
import SelectGame from "./../../components/asign-task-pages/SelectGame";
import DataPreview from "./../../components/asign-task-pages/DataPreview";
import { useDispatch, useSelector } from "react-redux";
import { asignTask } from "../../store/slices/questionsDataSlice";
const AsignTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorHappen } = useSelector((store) => store.questionsDataSlice);
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
  const [subjectName, setSubjectName] = useState("english");
  const [selectedGrade, setselectedGrade] = useState(1);
  const [games, setgames] = useState([]);
  const [selectedChildrens, setselectedChildrens] = useState([]);
  const [selectetedData, setSelectedData] = useState([]);
  useEffect(() => {
    const switchCase = () => {
      switch (activeStep) {
        case 0:
          return (
            <SelectChild
              selectedGrade={selectedGrade}
              setselectedGrade={setselectedGrade}
              setselectedChildrens={setselectedChildrens}
            />
          );
        case 1:
          return (
            <SelectSubject
              setSubjectName={setSubjectName}
              selectGrade={false}
            />
          );
        case 2:
          return <SelectGame setgames={setgames} />;
        case 3:
          return (
            <DataSource dataSource={dataSource} setdataSource={setdataSource} />
          );
        case 4:
          return (
            <DataPreview
              selectedGrade={selectedGrade}
              subjectName={subjectName}
              setSelectedData={setSelectedData}
            />
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
    if (activeStep === 4) {
      console.log("done");
      const selectetedDataObj = {};
      for (let i = 0; i < selectetedData.length; i++) {
        const key = `id${i + 1}`;
        selectetedDataObj[key] = selectetedData[i];
      }
      const data = {
        taskno: 1,
        gamename: games,
        // subjectName,
        // selectedGrade,
        ...selectetedDataObj,
      };

      selectedChildrens.forEach((childId) => {
        dispatch(asignTask({ data, _id: childId }));
      });
      // navigate("/parent/my-children");
    } else {
      setactiveStep(activeStep < 4 ? activeStep + 1 : activeStep);
    }
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
