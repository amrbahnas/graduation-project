import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SimpleNav from "./../../components/SimpleNav/SimpleNav";
import SelectChild from "../../components/asign-task-pages/SelectChild";
import "./AsignTask.css";
import InputStepper from "../../components/InputStepper/InputStepper";
import SelectSubject from "./../../components/Select-subject/SelectSubject";
import DataSource from "../../components/asign-task-pages/DataSource";
import SelectGame from "./../../components/asign-task-pages/SelectGame";
import DataPreview from "./../../components/asign-task-pages/DataPreview";
import { useDispatch, useSelector } from "react-redux";
import { asignTask, setLoading } from "../../store/slices/questionsDataSlice";
import Loading from "./../../components/Full-loading/FullLoading";
import toast from "react-hot-toast";
const AsignTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorHappen, loading } = useSelector(
    (store) => store.questionsDataSlice
  );

  // cancel loading when component unmount (user navigate to another page)
  const isMountedRef = useRef(true);
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      setLoading(false);
    };
  }, []);

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
  const [enableBTN, setEnableBTN] = useState(false);
  useEffect(() => {
    const switchCase = () => {
      switch (activeStep) {
        case 0:
          return (
            <SelectChild
              setselectedGrade={setselectedGrade}
              setselectedChildrens={setselectedChildrens}
              setEnableBTN={setEnableBTN}
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
          return <SelectGame setgames={setgames} setEnableBTN={setEnableBTN} />;
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
              setEnableBTN={setEnableBTN}
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
      const selectetedDataObj = {};
      for (let i = 0; i < selectetedData.length; i++) {
        const key = `id${i + 1}`;
        selectetedDataObj[key] = selectetedData[i];
      }
      const data = {
        taskno: 3,
        gamename: games,
        subject: subjectName,
        // selectedGrade,
        ...selectetedDataObj,
      };

      selectedChildrens.forEach((childId) => {
        dispatch(asignTask({ data, _id: childId }))
          .unwrap()
          .then(() => {
            toast.success("Task Asigned Successfully!");
          })
          .catch((err) => {
            toast.error("Something went wrong!");
          });
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
            <button
              onClick={nextHandler}
              disabled={!enableBTN}
              className=" disabled:opacity-50 disabled:cursor-not-allowed "
            >
              <span>{activeStep === 4 ? "Submit" : "Next"}</span>
            </button>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default AsignTask;
