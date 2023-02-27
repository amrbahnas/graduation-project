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
    if (!login) {
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
            <span onClick={(e) => navigate("/addchild")}>Add child</span>
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
