import React, { useEffect } from "react";
// redux
import { setunits, setstepNumber } from "../../../../store/slices/unitsSlice";
import { useDispatch, useSelector } from "react-redux";
// icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
// css
import styles from "./SelectUnit.module.css";
// component
import SingleUnit from "./Nested-Components/SingleUnit";
import SingleLesson from "./Nested-Components/SingleLesson";
/*****************************************start******** */
const SelectUnit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setstepNumber(1));
  }, [dispatch]);
  // global state
  const { units, currentUnit } = useSelector((store) => store.unitsSlice);
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
    dispatch(setunits(
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
    ));
  };

  return (
    <div className={styles.unitLesson}>
      <div className={styles.wrapper}>
        <div className={styles.units}>
          <label htmlFor="unit">units</label>
          <div className={`${styles.box} bg-gray-200 dark:bg-darkBody`}>
            {units?.map((unitObject) => (
              <SingleUnit unitObject={unitObject}  key={unitObject.unit} />
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
              <SingleLesson
                lessonObject={lessonObject}
                key={lessonObject.lesson}
              />
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
      <div className="control">
        <Link to="SubjectData">Next</Link>
        <Link to={-1}>
          <ArrowBackIcon /> Back
        </Link>
      </div>
    </div>
  );
};

export default SelectUnit;
