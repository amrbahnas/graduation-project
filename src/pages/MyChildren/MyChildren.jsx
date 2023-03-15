import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./MyChildren.css";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import ChildCard from "../../components/Child-card/ChildCard";

const MyChildren = () => {
  const navigate = useNavigate();
  const { children, login } = useSelector((store) => store.userSlice);
  //user cant access this page if he has login
  useEffect(() => {
    if (login && children.length > 0) {
      navigate("/parent/my-children");
    } else if (login) {
      navigate("/parent/add-first-child");
    } else {
      navigate("/");
    }
  }, [login, navigate]);
  return (
    <div className="MyChildren">
      <DashboardNav position={"mychildren"} />
      <div className="theContainer">
        <div className="wrapper">
          <div className="heading">
            <span>My children</span>
            <div className="btns">
              <span onClick={(e) => navigate("/addchild")}>Add child</span>
              <span onClick={(e) => navigate("/error-construction")}>
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
