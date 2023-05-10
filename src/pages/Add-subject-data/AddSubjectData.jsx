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
import AddEnglishWords from "../../components/Add-english-data/AddEnglishWords";
import SuccessCheck from "./../../components/SuccessCheck/SuccessCheck";
import Loading from "../../components/Full-loading/FullLoading";
import { toast } from "react-hot-toast";
import RadioChoose from "../../components/Radio-choose/Radiochoose";
import AddEnglishSentences from "../../components/Add-english-data/AddEnglishSentences";

const choose = [
  {
    label: "word",
    value: "word",
  },
  {
    label: "sentence",
    value: "sentence",
  },
];

const AddSubjectData = () => {
  // variables
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, dataIsSend, errorHappen } = useSelector(
    (store) => store.questionsDataSlice
  );
  const [activeStep, setactiveStep] = useState(2);
  const [switchResult, setSwitchResult] = useState(null);
  const steps = ["Subject", "type", "Data"];
  const [subjectName, setSubjectName] = useState("english");
  const [chooseValue, setChooseValue] = useState("sentence");
  const [subjectData, setSubjectData] = useState([]);
  // const [folderNumber, setfolderNumber] = useState(1);
  const [childGrade, setChildGrade] = useState(1);
  const nextHandler = () => {
    if (activeStep === 2) {
      const questions = subjectData.map((subject) => ({
        _id: subject._id,
        type: "word",
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
          .then((res) => {
            toast.success("data added successfully");
          })
          .catch((err) => {
            toast.error("something went wrong");
          });
      });
      // navigate("/parent/my-children");
    } else {
      setactiveStep(activeStep < 2 ? activeStep + 1 : activeStep);
    }
  };

  return (
    /********************************** DOM ************************************************* */
    <div className="add-data">
      <SimpleNav />
      <div className="add-data-wrapper">
        <InputStepper steps={steps} activeStep={activeStep} />
        <div className="page">
          <div className={activeStep === 0 ? " block" : "hidden"}>
            <SelectSubject
              setChildGrade={setChildGrade}
              setSubjectName={setSubjectName}
              selectGrade={true}
            />
          </div>
          <div className={activeStep === 1 ? " block" : "hidden"}>
            <RadioChoose
              title="Choose type"
              setChooseValue={(value) => setChooseValue(value)}
              choose={choose}
            />
          </div>
          <div className={activeStep === 2 ? " block" : "hidden"}>
            {chooseValue === "word" ? (
              <AddEnglishWords setSubjectData={setSubjectData} />
            ) : (
              <AddEnglishSentences
                subjectData={subjectData}
                setSubjectData={setSubjectData}
              />
            )}
          </div>

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

      {loading && <Loading />}
    </div>
  );
};

export default AddSubjectData;
