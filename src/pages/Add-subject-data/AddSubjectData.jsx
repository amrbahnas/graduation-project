import React, { useState, useEffect } from "react";
import "./AddSubjectData.css";
// react-router
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addChildQuestions } from "../../store/slices/questionsDataSlice";
import { seterrorHappen } from "../../store/slices/questionsDataSlice";
// mui
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// component
import InputStepper from "../../components/InputStepper/InputStepper";
import SimpleNav from "./../../components/SimpleNav/SimpleNav";
import SelectSubject from "./../../components/Select-subject/SelectSubject";
import SelectFolder from "./../../components/Select-data-folder/SelectFolder";
import AddEnglishData from "./../../components/Add-english-data/AddEnglishData";
const AddSubjectData = () => {
  // variables
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const { loading, dataIsSend, errorHappen } = useSelector(
    (store) => store.questionsDataSlice
  );
  const [activeStep, setactiveStep] = useState(0);
  const [switchResult, setSwitchResult] = useState(null);
  const steps = ["Subject", "Folder", "Data"];
  const [stadge, setstadge] = useState("2");
  const [subjectName, setSubjectName] = useState("");
  const [subjectData, setSubjectData] = useState([]);
  const [folderNumber, setfolderNumber] = useState(1);
  const nextHandler = () => {
    if (activeStep === 2) {
      const questions = subjectData.map((subject) => ({
        _id: subject.id,
        subjectName,
        stadge,
        number: folderNumber,
        image: subject.wordImage,
        defintionen: subject.DefintioninEn,
        defintionac: subject.DefintioninAc,
        sentence: subject.sentence,
      }));
      questions.forEach((word) => {
        dispatch(addChildQuestions(word));
      });
      // navigate("/parent/my-children");
    } else {
      setactiveStep(activeStep < 2 ? activeStep + 1 : activeStep);
    }
  };

  useEffect(() => {
    const switchCase = () => {
      switch (activeStep) {
        case 0:
          return <SelectSubject setSubjectName={setSubjectName} />;
        case 1:
          return <SelectFolder setfolderNumber={setfolderNumber} />;
        default:
          return <AddEnglishData setSubjectData={setSubjectData} />;
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
      {dataIsSend && <SuccessCheck />}

      <Snackbar
        open={errorHappen}
        autoHideDuration={6000}
        onClose={(e) => dispatch(seterrorHappen(false))}
      >
        <Alert severity="error">error try again</Alert>
      </Snackbar>
    </div>
  );
};

export default AddSubjectData;
