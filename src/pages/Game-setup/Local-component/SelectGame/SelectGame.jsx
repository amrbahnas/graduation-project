import React from "react";
import styles from "./SelectGame.module.css";
const SelectGame = ({
  setcurrentUnit,
  currentUnit,
  units,
  setunits,
  currentLesson,
  setcurrentLesson,
  children
}) => {
  let lessonsNum = units.filter((el) => el.unit === currentUnit)[0].lessonNum;

  const addUnitHandler = () => {
    setunits([...units, { unit: units.length + 1, lessonNum: 0 }]);
  };

  const addLessonHandler = () => {
    setunits(
      units.map((unit) =>
        unit.unit === currentUnit
          ? { ...unit, lessonNum: unit.lessonNum + 1 }
          : unit
      )
    );
  };

  // components
  const Unit = ({ unit }) => {
    return (
      <div
        className={`${styles.unit} ${
          currentUnit === unit &&
          "border border-black dark:border-darkSText bg-gray-500 dark:bg-darkHover "
        } bg-gray-400 dark:bg-darkCard hover:bg-gray-500 dark:hover:bg-darkHover`}
        onClick={(e) => setcurrentUnit(unit)}
      >
        unit {unit}
      </div>
    );
  };
  const Lesson = ({ lesson }) => {
    return (
      <div
        className={`${styles.lesson} ${
          currentLesson === lesson &&
          "border border-black dark:border-darkSText bg-gray-500 dark:bg-darkHover"
        } bg-gray-400 dark:bg-darkCard hover:bg-gray-500 dark:hover:bg-darkHover `}
        onClick={(e) => setcurrentLesson(lesson)}
      >
        lesson {lesson}
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
          <button onClick={addUnitHandler} className="dark:hover:bg-darkHover">
            add unit
          </button>
        </div>
        <div className={styles.lessons}>
          <label htmlFor="lesson">lessons</label>
          <div className={`${styles.box} bg-gray-200 dark:bg-darkBody`}>
            {Array.from(Array(lessonsNum)).map((_el, indx) => (
              <Lesson lesson={indx + 1} key={indx} />
            ))}
          </div>
          <button
            onClick={addLessonHandler}
            className="dark:hover:bg-darkHover"
          >
            add Lesson
          </button>
        </div>
      </div>
      {React.cloneElement(children)}
    </div>
  );
};

export default SelectGame;
