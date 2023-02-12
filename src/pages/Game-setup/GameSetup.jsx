import React, { useState } from "react";
import "./GameSetup.css";
// redux
import { useDispatch } from "react-redux";
import { addChildQuestions } from "../../store/slices/userSlice";
// icons
import CheckIcon from "@mui/icons-material/Check";
// components
import Subject from "./Local-component/Subject/Subject";
import SubjectData from "./Local-component/SubjectData/SubjectData";
import SelectGame from "./Local-component/SelectGame/SelectGame";
// animation
import { motion } from "framer-motion";
// react-router
import { useParams } from "react-router-dom";

const GameSetup = () => {
  // variables
  const dispatch = useDispatch();
  const [photoIndex, SetPhotoIndex] = useState(0);
  const [subject, setsubject] = useState("");
  const [subjectData, setsubjectData] = useState([]);
  const { id } = useParams();
  // functions
  const prevPage = () => {
    SetPhotoIndex(photoIndex === 0 ? 0 : (prev) => prev - 1);
  };
  // next slide or submit questions
  const nextPage = () => {
    if (photoIndex === 2) {
      const totalData = {
        childId:id,
        questions: subjectData,
      };
      dispatch(addChildQuestions(totalData));
    } else {
      SetPhotoIndex(photoIndex === 2 ? 2 : (prev) => prev + 1);
    }
  };

  const StepBox = ({ index, title }) => {
    return (
      <div className="step">
        {photoIndex === index ? (
          <>
            <span className="bg-blue-500">{index + 2}</span>
            <span className="text-gray-600">{title}</span>
          </>
        ) : photoIndex > index ? (
          <>
            <span className="bg-blue-500">
              <CheckIcon />
            </span>
            <span className="text-gray-600">{title}</span>
          </>
        ) : (
          <>
            <span className="bg-disabled">{index + 2}</span>
            <span className="text-disabled">{title}</span>
          </>
        )}
      </div>
    );
  };
  
  return (
    /********************************** DOM ************************************************* */
    <div className="gameSetup">
      <div className="theContainer">
        <div className="wrapper">
          <div className="proccessLine">
            <div className="steps">
              <StepBox index={-1} title={"login"} />
              <StepBox index={0} title={"select subject"} />
              <StepBox index={1} title={"Subject data"} />
              <StepBox index={2} title={"Select   Game"} />
            </div>
            <div className="line">
              <span style={{ width: `${(photoIndex + 1) * 33}%` }}></span>
            </div>
          </div>
          <div
            className="pages"
            style={{ transform: `translateX(${-photoIndex * 33}%)` }}
          >
            <Subject setsubject={setsubject} />
            <SubjectData setsubjectData={setsubjectData} />
            <SelectGame />
          </div>
          <div className="control">
            <motion.button onClick={nextPage} whileTap={{ scale: 0.9 }}>
              {photoIndex === 2 ? "Finsh" : "Next"}
            </motion.button>
            <motion.button onClick={prevPage} whileTap={{ scale: 0.9 }}>
              Back
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSetup;
