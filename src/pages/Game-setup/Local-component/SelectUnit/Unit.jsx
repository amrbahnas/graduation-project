import { useState } from "react";
import styles from "./SelectUnit.module.css";
// components
import EditIcon from "@mui/icons-material/Edit";

const Unit = ({ unit, title, setunits, currentUnit, setcurrentUnit }) => {
  const [unitTitle, setunitTitle] = useState(title);
  const [disabled, setdisabled] = useState(true);
  const changedTitle = () => {
    setcurrentUnit({ unit, title: unitTitle });
    setunits((prev) =>
      prev.map((el) => (el.unit === unit ? { ...el, title: unitTitle } : el))
    );
    setdisabled(true);
  };
  const editIcon = () => {
    setdisabled(false);
  };
  return (
    <div
      className={`${styles.unit} ${
        +currentUnit.unit === +unit
          ? "border-2 border-gray-500 bg-white dark:border-darkSText  dark:bg-darkHover "
          : " bg-gray-100  dark:bg-darkCard  dark:hover:bg-darkHover hover:bg-white"
      }`}
      onClick={(e) => setcurrentUnit({ title, unit })}
    >
      <div className={`${styles.info}`}>
        <span>unit {unit}</span>
        <div className={`${styles.input}`}>
          <input
            type="text"
            placeholder="Title"
            value={unitTitle}
            onChange={(e) => setunitTitle(e.target.value)}
            disabled={disabled}
            className="bg-gray-200 dark:bg-darkBody"
          />
          {+currentUnit.unit === +unit &&
            (disabled ? (
              <EditIcon onClick={editIcon} size="small" className="ml-2" />
            ) : (
              <span onClick={changedTitle}>save</span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Unit;
