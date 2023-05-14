import { useState, useEffect, useRef } from "react";
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
import { asignTask, setLoading } from "../../store/slices/questionsDataSlice";
import { setChildren } from "../../store/slices/userSlice";
import toast from "react-hot-toast";
import Loading from "../../components/Full-loading/FullLoading";
const AsignTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id, children } = useSelector((store) => store.userSlice);
  // cancel loading when component unmount (user navigate to another page)

  const steps = [
    "select child",
    "Subject",
    "Game",
    "source data",
    "Select data",
  ];
  const [activeStep, setactiveStep] = useState(0);
  const [dataSource, setdataSource] = useState("previous");
  const [subjectName, setSubjectName] = useState("english");
  const [selectedGrade, setselectedGrade] = useState(1);
  const [games, setgames] = useState([]);
  const [selectedChildrens, setselectedChildrens] = useState([]);
  const [selectetedData, setSelectedData] = useState([]);
  const [enableBTN, setEnableBTN] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    activeStep === 4 && setEnableBTN(false);
  }, [activeStep]);
  const nextHandler = () => {
    if (activeStep === 4) {
      setLoading(true);
      const selectetedDataObj = {};
      for (let i = 0; i < selectetedData.length; i++) {
        const key = `id${i + 1}`;
        selectetedDataObj[key] = selectetedData[i];
      }
      // const fakeData = {
      //   id1: "64605912bd398ca96f5cceca",

      //   id2: "64605912bd398ca96f5ccecc",

      //   id3: "646060468efaa4ff7347edd9",
      //   id4: "646060468efaa4ff7347edd7",
      //   id5: "646060468efaa4ff7347eddb",

      //   id6: "646060468efaa4ff7347edd5",
      //   id7: "646060468efaa4ff7347edd3",
      // };

      const data = {
        gamename: games,
        subject: subjectName,
        ...selectetedDataObj,
      };

      selectedChildrens.forEach((childId) => {
        console.log(childId);
        const { taskCounter } = children.find((child) => child._id === childId);
        dispatch(
          asignTask({
            data: { ...data, taskno: parseInt(taskCounter) + 1 },
            _id: childId,
          })
        )
          .unwrap()
          .then(() => {
            dispatch(
              setChildren(
                children.map((child) => {
                  if (child._id === childId) {
                    return {
                      ...child,
                      taskCounter: parseInt(child.taskCounter) + 1,
                    };
                  } else {
                    return child;
                  }
                })
              )
            );
            setLoading(false);
            toast.success("Task Asigned Successfully!");
          })
          .catch((err) => {
            setLoading(false);
            toast.error("Something went wrong!");
          });
      });
      // navigate("/parent/my-children");
    } else if (activeStep === 3 && dataSource === "new") {
      navigate("/parent/AddSubjectData/" + _id);
    } else {
      setactiveStep(activeStep < 4 ? activeStep + 1 : activeStep);
    }
  };
  const prevHandler = () => {
    setEnableBTN(true);
    setactiveStep(activeStep !== 0 ? activeStep - 1 : activeStep);
  };
  return (
    <div className="asign-task">
      <SimpleNav />
      <div className="asign-task-wrapper">
        <InputStepper steps={steps} activeStep={activeStep} />
        <div className="page">
          <div className={activeStep === 0 ? ` block ` : ` hidden`}>
            <SelectChild
              setselectedGrade={setselectedGrade}
              setselectedChildrens={setselectedChildrens}
              setEnableBTN={setEnableBTN}
            />
          </div>
          <div className={activeStep === 1 ? ` block ` : ` hidden`}>
            <SelectSubject
              setSubjectName={setSubjectName}
              selectGrade={false}
            />
          </div>
          <div className={activeStep === 2 ? ` block ` : ` hidden`}>
            <SelectGame
              setgames={setgames}
              setEnableBTN={setEnableBTN}
              subjectName={subjectName}
            />
          </div>
          <div className={activeStep === 3 ? ` block ` : ` hidden`}>
            <DataSource dataSource={dataSource} setdataSource={setdataSource} />
          </div>
          {activeStep === 4 && (
            <DataPreview
              selectedGrade={selectedGrade}
              subjectName={subjectName}
              setSelectedData={setSelectedData}
              setEnableBTN={setEnableBTN}
              activeStep={activeStep}
              games={games}
            />
          )}
          <div className="btns">
            {activeStep > 0 && (
              <button className="previous" onClick={prevHandler}>
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
