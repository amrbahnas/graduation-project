import React, { useEffect, useState } from "react";
import "./AddSubjectData.css";
// react-router
import { Link, useNavigate } from "react-router-dom";
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
import AddMathData from "../../components/Add-math-data/AddMathData";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArabicData from "../../components/Add-arabic-data/ArabicData";

const englishChoose = [
  {
    label: "word",
    value: "word",
  },
  {
    label: "sentence",
    value: "sentence",
  },
];
const mathChoose = [
  {
    label: "Random Numbers",
    value: "random",
  },
  {
    label: "Customed Numbers",
    value: "customed",
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
  const [chooseValue, setChooseValue] = useState("");
  const [subjectData, setSubjectData] = useState([]);
  const [childGrade, setChildGrade] = useState(1);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setSubjectData([]);
  }, [subjectName, activeStep]);

  const nextHandler = () => {
    if (activeStep === 0 && subjectName === "arabic") {
      setactiveStep(2);
      return;
    }
    if (activeStep === 2) {
      const questions = subjectData.map((subject) => ({
        _id: subject?._id,
        type: chooseValue,
        subjectName,
        stadge: childGrade,
        number: subject?.number || 0,
        choices: subject?.choices || [],
        image: subject?.wordImage,
        definitionInEn: subject?.definitionInEn || "",
        definitionInAc:
          subjectName === "arabic"
            ? subject.choices
                .map((el, indx) => el.correct && indx)
                .filter((el) => el !== false)
                .join("")
            : subject?.definitionInAc || "",
        sentence: subject?.sentence || "",
      }));
      console.log(questions);
      questions.forEach((word) => {
        setLoading(true);
        insertQuestions(word, _id)
          .then((res) => {
            setLoading(false);
            setDisabled(true);
            toast.success("data added successfully");
            setTimeout(() => {
              setactiveStep(0);
              setDisabled(false);
            }, 2000);
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

  const prevHandler = () => {
    if (activeStep === 2 && subjectName === "arabic") {
      setactiveStep(0);
      return;
    }

    setactiveStep(activeStep !== 0 ? activeStep - 1 : activeStep);
  };
  return (
    /********************************** DOM ************************************************* */
    <div className="add-data">
      <SimpleNav />
      <div className="add-data-wrapper">
        <div
          className={`flex ${
            activeStep === 2 ? " justify-between" : " justify-center"
          } items-center px-2 md:px-10 flex-col md:flex-row   font-bold capitalize`}
        >
          <div>
            <span className=" font-semibold">Add Subject Data</span>
            {subjectName && <span> - {subjectName}</span>}
            {childGrade && <span> - Grade : {childGrade}</span>}
          </div>
          {activeStep === 2 && (
            <Link
              to="/parent/asigntask"
              className="flex rounded-md mt-2 md:mt-0 py-2  items-center flex-row  gap-2 bg-backBtnColor  font-normal  hover:bg-backBtnColorHoner cursor-pointer"
            >
              <AssignmentIcon fontSize="small" /> Asign Task
            </Link>
          )}
        </div>
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
              choose={subjectName === "english" ? englishChoose : mathChoose}
            />
          </div>

          <div className={activeStep === 2 ? " block" : "hidden"}>
            <>
              {subjectName === "english" &&
                (chooseValue === "word" ? (
                  <AddEnglishWords setSubjectData={setSubjectData} />
                ) : (
                  <AddEnglishSentences
                    subjectData={subjectData}
                    setSubjectData={setSubjectData}
                  />
                ))}

              {subjectName === "math" && (
                <AddMathData
                  setSubjectData={setSubjectData}
                  subjectData={subjectData}
                  dataType={chooseValue}
                />
              )}
              {subjectName === "arabic" && (
                <ArabicData
                  activeStep={activeStep}
                  setSubjectData={setSubjectData}
                  subjectData={subjectData}
                />
              )}
            </>
          </div>

          <div className="btns">
            {activeStep > 0 && (
              <button className="previous" onClick={prevHandler}>
                <span>Previous</span>
              </button>
            )}
            <button onClick={nextHandler} disabled={disabled}>
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
