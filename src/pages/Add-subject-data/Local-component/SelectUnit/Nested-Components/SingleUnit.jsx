import React from "react";
import styles from "../SelectUnit.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setcurrentUnit,
  setcurrentLesson,
} from "../../../../../store/slices/unitsSlice";
const SingleUnit = ({ unitObject }) => {
  const dispatch = useDispatch();
  const { unit, lessons } = unitObject;
  const { currentUnit } = useSelector((store) => store.unitsSlice);
  const onUnitClicked = () => {
    dispatch(setcurrentUnit({ ...currentUnit, unit }));
    dispatch(
      setcurrentLesson({
        lesson: 1,
        title: lessons[0].title,
      })
    );
  };
  return (
    <div
      className={`${styles.unit} ${
        +currentUnit.unit === +unit
          ? "border-2 border-gray-500 bg-white dark:border-darkSText  dark:bg-darkHover "
          : " bg-gray-100  dark:bg-darkCard  dark:hover:bg-darkHover hover:bg-white"
      }`}
      onClick={onUnitClicked}
    >
      <div className={`${styles.info}`}>
        <span>unit {unit}</span>
      </div>
    </div>
  );
};
export default SingleUnit;
