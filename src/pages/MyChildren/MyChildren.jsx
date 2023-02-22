import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./MyChildren.css";
import AddForm from "./LocalComponent/AddForm";

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
      <div className="theContainer">
        <div className="wrapper">
          {children.length > 0 ? (
            <>
              <span>My children</span>
              <div className="userChildren">
                {children.map((child) => (
                  <Child child={child} key={child._id} />
                ))}
                <span onClick={(e) => setshowForm(true)}>Add more One</span>
              </div>
            </>
          ) : (
            <>
              <span>Add children</span>
              <div className="add">
                <span onClick={(e) => setshowForm(true)}>Add child</span>
              </div>
            </>
          )}
        </div>
      </div>
      {showForm && <AddForm setshowForm={setshowForm} />}
    </div>
  );
};

const Child = ({ child }) => {
  return (
    <dir className="child">
      <div className="img">
        <img src={"https://source.unsplash.com/random"} alt="" />
      </div>
      <div className="info">
        <h2 className="dark:text-darkPText">{child.studentName}</h2>
        <div className="options">
          <Link to={"/studentProfile/" + child._id}>
            <span>Profile</span>
          </Link>
          <Link to={"/gameSetup/" + child._id}>
            <span>Add Subject</span>
          </Link>
        </div>
      </div>
    </dir>
  );
};

export default MyChildren;
