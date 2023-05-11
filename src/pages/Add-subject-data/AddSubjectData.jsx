import React, { useState } from "react";
import "./AddSubjectData.css";
// react-router
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
// component
import { toast } from "react-hot-toast";
import AddEnglishSentences from "../../components/Add-english-data/AddEnglishSentences";
import AddEnglishWords from "../../components/Add-english-data/AddEnglishWords";
import Loading from "../../components/Full-loading/FullLoading";
import InputStepper from "../../components/InputStepper/InputStepper";
import RadioChoose from "../../components/Radio-choose/RadioChoose";
import insertQuestions from "../../services/insertQuestions";
import SelectSubject from "./../../components/Select-subject/SelectSubject";
import SimpleNav from "./../../components/SimpleNav/SimpleNav";

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
  const { _id } = useSelector((store) => store.userSlice);
  const [activeStep, setactiveStep] = useState(0);
  const steps = ["Subject", "type", "Data"];
  const [loading, setLoading] = useState(false);
  const [subjectName, setSubjectName] = useState("english");
  const [chooseValue, setChooseValue] = useState("sentence");
  const [subjectData, setSubjectData] = useState([]);
  const [childGrade, setChildGrade] = useState(1);
  const nextHandler = () => {
    if (activeStep === 2) {
      const questions = subjectData.map((subject) => ({
        _id: subject?._id,
        type: chooseValue,
        subjectName,
        stadge: childGrade,
        number: { num1: 1, num2: 2, operator: "*" },
        choices: subject?.choices || [],
        image: subject?.wordImage,
        definitionInEn: subject?.definitionInEn || "",
        definitionInAc: subject?.definitionInAc || "",
        sentence: subject?.sentence || "",
      }));

      questions.forEach((word) => {
        setLoading(true);
        insertQuestions(word, _id)
          .then((res) => {
            setLoading(false);
            toast.success("data added successfully");
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
            if (err.response) {
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
            }
            toast.error("something went wrong");
          });
      });
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
