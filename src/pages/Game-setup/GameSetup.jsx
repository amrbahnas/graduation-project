import React, { useState, useEffect } from "react";
import "./GameSetup.css";
// redux
import { useDispatch, useSelector } from "react-redux";

import { setdataSend } from "../../store/slices/unitsSlice";
import {
  addChildQuestions,
  getChildQuestions,
} from "../../store/slices/questionsDataSlice";
// router
import { Link, Outlet } from "react-router-dom";
// icons
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FastRewindIcon from "@mui/icons-material/FastRewind";
// components
import Subject from "./Local-component/Subject/Subject";
import SubjectData from "./Local-component/SubjectData/SubjectData";
import SelectUnit from "./Local-component/SelectUnit/SelectUnit";
// animation
import { motion } from "framer-motion";
// react-router
import { useParams, useNavigate } from "react-router-dom";
//component
import SuccessCheck from "./../../components/SuccessCheck/SuccessCheck";

const GameSetup = () => {
  // variables
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [photoIndex, SetPhotoIndex] = useState(0);
  const { _id } = useParams();

  // get global state
  const { login, children } = useSelector((store) => store.userSlice);
  const { subjectData, dataSend } = useSelector((store) => store.unitsSlice);
  const child = children.filter((el) => el._id === _id)[0];
  // user cant access this page if he has login
  // useEffect(() => {
  //   if (!login) {
  //     navigate("/");
  //   } else {
  //     const data = {
  //       unit: currentUnit.unit,
  //       stadge: child.studentstage,
  //       lesson: currentLesson.lesson,
  //     };
  //     dispatch(getChildQuestions(data));
  //   }
  // }, [
  //   login,
  //   navigate,
  //   dispatch,
  //   child.studentstage,
  //   currentLesson.lesson,
  //   currentUnit.unit,
  // ]);
  // functions
  const prevPage = () => {
    SetPhotoIndex(photoIndex === 0 ? 0 : (prev) => prev - 1);
  };
  // next slide or submit questions
  const nextPage = () => {
    if (photoIndex === 2 && subjectData.length > 0) {
      const questions = subjectData.map((subject) => ({
        _id: subject.id,
        image: subject.wordImage,
        defintionen: subject.DefintioninEn,
        defintionac: subject.DefintioninAc,
        unit: subject.unit,
        lesson: subject.lesson,
        stadge: child.studentstage,
      }));

      questions.forEach((word) => {
        dispatch(addChildQuestions(word)).then(() => setdataSend(true));
      });
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
            <span className="text-gray-600 dark:text-darkPText">{title}</span>
          </>
        ) : photoIndex > index ? (
          <>
            <span className="bg-blue-500">
              <CheckIcon />
            </span>
            <span className="text-gray-600 dark:text-darkPText">{title}</span>
          </>
        ) : (
          <>
            <span className="bg-disabled dark:bg-darkBody">{index + 2}</span>
            <span className="text-disabled dark:text-darkSText">{title}</span>
          </>
        )}
      </div>
    );
  };

  const SliderControl = () => {
    return (
      <div className="control">
        <motion.button onClick={nextPage} whileTap={{ scale: 0.9 }}>
          {photoIndex === 2 ? "Finsh" : "Next"}
        </motion.button>
        {photoIndex !== 0 && (
          <motion.button onClick={prevPage} whileTap={{ scale: 0.9 }}>
            <ArrowBackIcon /> Back
          </motion.button>
        )}
      </div>
    );
  };
  return (
    /********************************** DOM ************************************************* */
    <div className="gameSetup">
      <div className="theContainer ">
        <div className="wrapper">
          <div className="proccessLine">
            <div className="steps">
              <StepBox index={-1} title={"login"} />
              <StepBox index={0} title={"subject"} />
              <StepBox index={1} title={"units"} />
              <StepBox index={2} title={"data"} />
              <div className="line">
                <span style={{ width: `${(photoIndex + 1) * 33}%` }}></span>
              </div>
            </div>
          </div>
          <div
            className="pages"
            style={{ transform: `translateX(${-photoIndex * 33.3}%)` }}
          >
            <Subject>
              <SliderControl />
            </Subject>
            <SelectUnit>
              <SliderControl />
            </SelectUnit>
            <SubjectData>
              <SliderControl />
            </SubjectData>
          </div>
        </div>
      </div>
      <Link className="home" to="/">
        <FastRewindIcon />
      </Link>
      {dataSend && <SuccessCheck />}
    </div>
  );
};

export default GameSetup;
