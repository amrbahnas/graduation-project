import React from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
//icon
import FastRewindIcon from "@mui/icons-material/FastRewind";
//css
import "./StudentProfile.css";
const StudentProfile = () => {
  const { _id } = useParams();
  const { children } = useSelector((store) => store.userSlice);
  const { studentName, studentstage, studentPic } = children.filter(
    (child) => child._id === _id
  )[0];
  return (
    <div className="student-profile">
      <div className="theContainer">
        <div className="wrapper">
          <div className="profile-info">
            <div className="image">
              <img
                src={
                  import.meta.env.VITE_REACT_SERVER_DOMAIL + "/" + studentPic
                }
                alt=""
              />
            </div>
            <div className="personal-info">
              <span className="name">{studentName}</span>
              <span className="stadge">stadge: {studentstage}</span>
              <span className="age">Age: {+studentstage + 7}</span>
            </div>
          </div>
          <div className="tasks-section">
            <Outlet />
          </div>
        </div>
      </div>
      <Link className="home" to="/">
        <FastRewindIcon />
      </Link>
    </div>
  );
};

export default StudentProfile;
