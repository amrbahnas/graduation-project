import React, { useState, useEffect } from "react";
import "./AddSubjectData.css";
// react-router
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addChildQuestions } from "../../store/slices/questionsDataSlice";
import { seterrorHappen } from "../../store/slices/questionsDataSlice";
// component
import InputStepper from "../../components/InputStepper/InputStepper";
import SimpleNav from "./../../components/SimpleNav/SimpleNav";
import SelectSubject from "./../../components/Select-subject/SelectSubject";
import AddEnglishData from "./../../components/Add-english-data/AddEnglishData";
import SuccessCheck from "./../../components/SuccessCheck/SuccessCheck";
import Loading from "../../components/Full-loading/FullLoading";
import { toast } from "react-hot-toast";
const AddSubjectData = () => {
  // variables
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, dataIsSend, errorHappen } = useSelector(
    (store) => store.questionsDataSlice
  );
  const [activeStep, setactiveStep] = useState(0);
  const [switchResult, setSwitchResult] = useState(null);
  const steps = ["Subject", "Data"];
  const [subjectName, setSubjectName] = useState("");
  const [subjectData, setSubjectData] = useState([]);
  // const [folderNumber, setfolderNumber] = useState(1);
  const [childGrade, setChildGrade] = useState(1);
  const nextHandler = () => {
    if (activeStep === 1) {
      const questions = subjectData.map((subject) => ({
        _id: subject._id,
        subjectName,
        stadge: childGrade,
        number: "1",
        image: subject.wordImage,
        definitionInEn: subject.definitionInEn,
        definitionInAc: subject.definitionInAc,
        sentence: subject.sentence,
      }));
      questions.forEach((word) => {
        dispatch(addChildQuestions(word))
          .unwrap()
          .then(() => {
            toast.success("data added successfully");
          })
          .catch((err) => {
            toast.error("something went wrong");
          });
      });
      // navigate("/parent/my-children");
    } else {
      setactiveStep(activeStep < 1 ? activeStep + 1 : activeStep);
    }
  };

  useEffect(() => {
    const switchCase = () => {
      switch (activeStep) {
        case 0:
          return (
            <SelectSubject
              setChildGrade={setChildGrade}
              setSubjectName={setSubjectName}
              selectGrade={true}
            />
          );
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
              <span>{activeStep === 1 ? "Submit" : "Next"}</span>
            </button>
          </div>
        </div>
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default AddSubjectData;
