import React, { useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  setunits,
  setcurrentLesson,
} from "../../../../../store/slices/unitsSlice";
import styles from "../SelectUnit.module.css";
// icon
import EditIcon from "@mui/icons-material/Edit";
/*****************************************start ***/
const SingleLesson = ({ lessonObject }) => {
  const dispatch = useDispatch();
  const { currentLesson, units, currentUnit } = useSelector(
    (store) => store.unitsSlice
  );
  // console.log(lessonObject)
  const [lessonTitle, setlessonTitle] = useState(lessonObject.title);
  const [disabled, setdisabled] = useState(true);
  const editIcon = () => {
    setdisabled(false);
  };
  // const changeTitle = () => {
  //   const newUnits = units.map((unitObject) => {
  //     if (unitObject.unit === currentUnit.unit) {
  //       const newLessons = unitObject.lessons.map((lessonObject) =>
  //         lessonObject.lesson === currentLesson.lesson
  //           ? { lesson: lessonObject.lesson, title: lessonTitle }
  //           : lessonObject
  //       );
  //       return { unit: unitObject.unit, lessons: newLessons };
  //     } else {
  //       return unitObject;
  //     }
  //   });
    
  //   dispatch(setunits(newUnits));
  //   dispatch(setcurrentLesson({...currentLesson,title:lessonTitle}));
  //   setdisabled(true);
  // };
  return (
    <div
      className={`${styles.lesson} ${
        currentLesson.lesson === lessonObject.lesson
          ? "border border-gray-500 bg-white dark:border-darkSText  dark:bg-darkHover "
          : " bg-gray-100  dark:bg-darkCard  dark:hover:bg-darkHover hover:bg-white"
      }  `}
      onClick={(e) => dispatch(setcurrentLesson(lessonObject))}
    >
      <div className={`${styles.info}`}>
        <span> lesson {lessonObject.lesson}</span>
        {/* <div className={`${styles.input}`}>
          <input
            type="text"
            placeholder="Title"
            value={lessonTitle}
            onChange={(e) => setlessonTitle(e.target.value)}
            disabled={disabled}
            className="bg-gray-200 dark:bg-darkBody"
          />
          {+currentLesson.lesson === +lessonObject.lesson &&
            (disabled ? (
              <EditIcon onClick={editIcon} size="small" className="ml-2" />
            ) : (
              <span onClick={changeTitle}>save</span>
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default SingleLesson;
