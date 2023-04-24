import React from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import "./ChildCard.css";
const ChildCard = ({ child }) => {
  return (
    <dir className="child">
      <div className="img">
        <Avatar name={child.studentName} size="100" round={true} />
      </div>
      <div className="info">
        <div className="name">
          <h2 className="dark:text-darkPText">{child.studentName}</h2>
        </div>
        <div className="last-play">
          <span>Last played</span>
          <span>- -</span>
        </div>
        <div className="options">
          <Link to={`/parent/my-children/${child._id}/alltasks/dashboard`}>
            <span>Dashboard</span>
          </Link>
          <Link to={`/parent/my-children/${child._id}/manage-account`}>
            <span>Manage</span>
          </Link>
        </div>
      </div>
    </dir>
  );
};

export default ChildCard;
