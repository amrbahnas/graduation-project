import styles from "./Subject.module.css";
import React from "react";
import {setsubject} from '../../../../store/slices/unitsSlice'
import { useDispatch } from "react-redux";
const Subject = ({ children }) => {
  const dispatch = useDispatch();
  const selectedSubject = (e, subject) => {
    dispatch(setsubject(subject));
    document.querySelectorAll("#subjects div").forEach((subject) => {
      subject.style.border = "none";
    });
    e.target.style.border = "1px solid";
  };
  return (
    <div className={styles.subject}>
      <div className={styles.wrapper} id="subjects">
        <div
          onClick={(e) => selectedSubject(e, "arabic")}
          className="bg-gray-200 dark:bg-darkBody hover:bg-gray-300 dark:hover:bg-darkHover"
        >
          Arabic
        </div>
        <div
          onClick={(e) => selectedSubject(e, "english")}
          className="bg-gray-200 dark:bg-darkBody hover:bg-gray-300 dark:hover:bg-darkHover"
        >
          English
        </div>
        <div
          onClick={(e) => selectedSubject(e, "math")}
          className="bg-gray-200 dark:bg-darkBody hover:bg-gray-300 dark:hover:bg-darkHover"
        >
          Math
        </div>
      </div>
      {React.cloneElement(children)}
    </div>
  );
};

export default Subject;
