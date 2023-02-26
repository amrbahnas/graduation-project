import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./MyChildren.css";
import AddForm from "./LocalComponent/AddForm";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import ChildCard from "../../components/Child-card/ChildCard";

const MyChildren = () => {
  const navigate = useNavigate();
  const [showForm, setshowForm] = useState(false);
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
            <span onClick={e=>navigate("/addchild")}>Add child</span>
          </div>
          <div className="userChildren">
            {children.map((child) => (
              <ChildCard child={child} key={child._id} />
            ))}
            <span onClick={(e) => setshowForm(true)}>Add more One</span>
          </div>
        </div>
      </div>
      {showForm && <AddForm setshowForm={setshowForm} />}
    </div>
  );
};

export default MyChildren;
