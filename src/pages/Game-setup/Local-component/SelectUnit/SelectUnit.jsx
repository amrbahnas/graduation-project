import React, { useState } from "react";
// redux
import {
  setcurrentUnit,
  setunits,
  setcurrentLesson,
} from "../../../../store/slices/unitsSlice";
import { useDispatch, useSelector } from "react-redux";
// css
import styles from "./SelectUnit.module.css";
// icon
import EditIcon from "@mui/icons-material/Edit";

/*****************************************start******** */
const SelectUnit = ({ children }) => {
  const dispatch = useDispatch();
  // global state
  const { currentLesson, units, currentUnit } = useSelector(
    (store) => store.unitsSlice
  );
  // local variables
  let lessons = units.filter((el) => el.unit === currentUnit.unit)[0].lessons;

  const addUnitHandler = () => {
    dispatch(
      setunits([
        ...units,
        {
          unit: units.length + 1,
          lessons: [{ lesson: 1, title: "unit title" }],
        },
      ])
    );
  };

  const addLessonHandler = () => {
    setunits(
      units.map((unitObject) =>
        unitObject.unit === currentUnit.unit
          ? {
              unit: unitObject.unit,
              lessons: [
                ...unitObject.lessons,
                { lesson: unitObject.lessons.length + 1, title: "unit title" },
              ],
            }
          : unitObject
      )
    );
  };

  // components
  const Unit = ({ unit }) => {
    return (
      <div
        className={`${styles.unit} ${
          +currentUnit.unit === +unit
            ? "border-2 border-gray-500 bg-white dark:border-darkSText  dark:bg-darkHover "
            : " bg-gray-100  dark:bg-darkCard  dark:hover:bg-darkHover hover:bg-white"
        }`}
        onClick={(e) => dispatch(setcurrentUnit({ ...currentUnit, unit }))}
      >
        <div className={`${styles.info}`}>
          <span>unit {unit}</span>
        </div>
      </div>
    );
  };

  const Lesson = ({ lessonObject }) => {
    const [lessonTitle, setlessonTitle] = useState(lessonObject.title);
    const [disabled, setdisabled] = useState(true);
    const editIcon = () => {
      setdisabled(false);
    };
    const changeTitle = () => {
      const newUnits = units.map((unitObject) => {
        if (unitObject.unit === currentUnit.unit) {
          const newLessons = unitObject.lessons.map((lessonObject) =>
            lessonObject.lesson === currentLesson.lesson
              ? { lesson: lessonObject.lesson, title: lessonTitle }
              : lessonObject
          );
          return { unit: unitObject.unit, lessons: newLessons };
        } else {
          return unitObject;
        }
      });
      dispatch(setunits(newUnits));
      setdisabled(true);
    };
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
          <div className={`${styles.input}`}>
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
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.unitLesson}>
      <div className={styles.wrapper}>
        <div className={styles.units}>
          <label htmlFor="unit">units</label>
          <div className={`${styles.box} bg-gray-200 dark:bg-darkBody`}>
            {units?.map((el) => (
              <Unit unit={el.unit} key={el.unit} />
            ))}
          </div>
          <button
            onClick={addUnitHandler}
            className="border-black dark:hover:bg-darkHover dark:border-white hover:bg-gray-200"
          >
            add unit
          </button>
        </div>
        <div className={styles.lessons}>
          <label htmlFor="lesson">lessons</label>
          <div className={`${styles.box} bg-gray-200 dark:bg-darkBody`}>
            {lessons.map((lessonObject) => (
              <Lesson lessonObject={lessonObject} key={lessonObject.lesson} />
            ))}
          </div>
          <button
            onClick={addLessonHandler}
            className="border-black dark:hover:bg-darkHover dark:border-white hover:bg-gray-200"
          >
            add Lesson
          </button>
        </div>
      </div>
      {React.cloneElement(children)}
    </div>
  );
};

export default SelectUnit;
