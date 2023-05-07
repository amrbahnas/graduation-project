import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./MyChildren.css";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import ChildCard from "../../components/Child-card/ChildCard";

const MyChildren = () => {
  const navigate = useNavigate();
  const { _id, children } = useSelector((store) => store.userSlice);

  return (
    <div className="MyChildren">
      <DashboardNav position={"mychildren"} />
      <div className="theContainer">
        <div className="wrapper">
          <div className="heading">
            <span>My children</span>
            <div className="btns">
              <span onClick={(e) => navigate("/parent/addchild")}>
                Add child
              </span>
              <span onClick={(e) => navigate("/parent/AddSubjectData/" + _id)}>
                Add Subject
              </span>
              <span onClick={(e) => navigate("/parent/asigntask")}>
                Asign Task
              </span>
            </div>
          </div>
          <div className="userChildren">
            {children.map((child) => (
              <ChildCard child={child} key={child._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChildren;
