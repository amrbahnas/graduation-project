import React, { useEffect } from "react";
// redux
import { settaskType, setstepNumber } from "../../../../store/slices/taskSlice";
import { useDispatch } from "react-redux";
// icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
// css
import "./TaskType.css";
// component

/*****************************************start******** */
const TaskType = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setstepNumber(1));
  }, [dispatch]);
  // global state
  const selectTaskType = (e, type) => {
    dispatch(settaskType(type));
    document.querySelectorAll("#taskType div").forEach((subject) => {
      subject.style.border = "none";
    });
    e.target.style.border = "1px solid";
  };

  return (
    <div className="task-type">
      <div className="task-type-wrapper" id="taskType">
        <div onClick={(e) => selectTaskType(e, "new")}>create New Task</div>
        <div onClick={(e) => selectTaskType(e, "old")}>select from previous data</div>
        <div onClick={(e) => selectTaskType(e, "another")}>search from other users/teachers</div>
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

export default TaskType;
