import React from "react";
import { useParams, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./SingleTask.css";
const SingleTask = () => {
  const { taskNumber, subjectName } = useParams();
  return (
    <>
      <div className="page-title">
        <Link to={-1}>
          <span>
            <ArrowBackIcon />
          </span>
        </Link>
        <span>
          task {taskNumber} ({subjectName})
        </span>
      </div>
      <div className="profile-single-task">
        <table className="GeneratedTable">
          <thead>
            <tr>
              <th>Word</th>
              <th>Game 1</th>
              <th>Game 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>boy</td>
              <td>3 times</td>
              <td>1 times</td>
            </tr>
            <tr>
              <td>girls</td>
              <td>2 times</td>
              <td>3 times</td>
            </tr>
            <tr>
              <td>woman</td>
              <td>0 times</td>
              <td>1 times</td>
            </tr>
            <tr>
              <td>fesh</td>
              <td>3 times</td>
              <td>0 times</td>
            </tr>
            <tr>
              <td>apple</td>
              <td>2 times</td>
              <td>0 times</td>
            </tr>
            <tr>
              <td>orange</td>
              <td>1 times</td>
              <td>0 times</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SingleTask;
