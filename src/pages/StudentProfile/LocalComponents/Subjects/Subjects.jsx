import React from "react";
import "./Subjects.css";
import { Link } from "react-router-dom";
const Subjects = () => {
  return (
    <>
      <div className="page-title">
        <span>Subjects</span>
      </div>
      <div className="profile-subjects">
        <Link to="tasks/english">
          <span className="english"></span>
        </Link>
        <Link to="tasks/math">
          <span className="math"></span>
        </Link>
        <Link to="tasks/arabic">
          <span className="arabic"></span>
        </Link>
      </div>
    </>
  );
};

export default Subjects;
