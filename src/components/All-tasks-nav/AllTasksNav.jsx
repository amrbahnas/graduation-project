import React from "react";
import { Link, useParams } from "react-router-dom";
import './AllTasksNav.css'
const AllTasksNav = () => {
  
  const { _id, currentPage } = useParams();

  return (
    <ul className="all-tasks-nav">
      <li
        className={
          currentPage === "alltasks"
            ? "border-b-4 border-orange"
            : ""
        }
      >
        <Link to={`/parent/my-children/${_id}/alltasks/dashboard`}>
          All Tasks
        </Link>
      </li>
      <li
        className={
          currentPage === "math"
            ? "border-b-4 border-orange text-gray-700"
            : "text-gray-500"
        }
      >
        <Link to={`/parent/my-children/${_id}/math/dashboard`}>Math</Link>
      </li>
      <li
        className={
          currentPage === "english"
            ? "border-b-4 border-orange text-gray-700"
            : "text-gray-500"
        }
      >
        <Link to={`/parent/my-children/${_id}/english/dashboard`}>English</Link>
      </li>
      <li
        className={
          currentPage === "arabic"
            ? "border-b-4 border-orange text-gray-700"
            : "text-gray-500"
        }
      >
        <Link to={`/parent/my-children/${_id}/arabic/dashboard`}>Arabic</Link>
      </li>
    </ul>
  );
};

export default AllTasksNav;
