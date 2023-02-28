import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Avatar from "react-avatar";
import "./ChildCard.css";
const ChildCard = ({ child }) => {
  return (
    <dir className="child">
      <div className="img">
        {/* <img
          src={
            import.meta.env.VITE_REACT_SERVER_DOMAIL + "/" + child.studentPic
          }
          alt=""
        /> */}
        <Avatar name={child.studentName} size="100" round={true} />
        
      </div>
      <div className="info">
        <div className="name">
          <div></div>
          <h2 className="dark:text-darkPText">{child.studentName}</h2>
          <Link>
            manage
            <ArrowForwardIosOutlinedIcon />
          </Link>
        </div>
        <div className="last-play">
          <span>Last played</span>
          <span>- -</span>
        </div>
        <div className="options">
          <Link to={"/dashboard/" + child._id}>
            <span>Dashboard</span>
          </Link>
          <Link to={"/gameSetup/" + child._id}>
            <span>Add Subject Data</span>
          </Link>
        </div>
      </div>
    </dir>
  );
};

export default ChildCard;
