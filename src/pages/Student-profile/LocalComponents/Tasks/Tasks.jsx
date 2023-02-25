import React from "react";
import { useParams, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HttpsIcon from "@mui/icons-material/Https";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Tasks.css";
const Tasks = () => {
  const { subjectName } = useParams();
  return (
    <>
      <div className="page-title">
        <Link to={-1}>
          <span>
            <ArrowBackIcon />
          </span>
        </Link>
        <span>{subjectName} tasks</span>
      </div>
      <div className="profile-tasks">
        <div className="task">
          <Link to="1">
            <span>task1</span>
            <span>
              Done <CheckCircleIcon />
            </span>
          </Link>
        </div>
        <div className="task">
          <Link locked="1">
            <span>task2</span>
            <span>
              Locked <HttpsIcon />
            </span>
          </Link>
        </div>
        <div className="task">
          <Link locked="1">
            <span>task3</span>
            <span>
              Locked <HttpsIcon />
            </span>
          </Link>
        </div>
        <div className="task">
          <Link locked="1">
            <span>task4</span>
            <span>
              Locked <HttpsIcon />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tasks;
