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
  // useEffect(() => {
  //   if (!login) {
  //     navigate("/");
  //   }
  // }, [login, navigate]);
  return (
    <div className="MyChildren">
      <div className="theContainer">
        <div className="wrapper">
          {children.length > 0 ? (
            <>
              <span>My children</span>
              <div className="userChildren">
                {children.map((child,indx) => (
                  <Child child={child} key={indx} />
                ))}
                <span onClick={(e) => setshowForm(true)}>Add more One</span>
              </div>
            </>
          ) : (
            <>
              <span>Add children</span>
              <div className="add">
                <span onClick={(e) => setshowForm(true)}>Add</span>
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
    <div className="child">
      <div className="img">
        <span>{child.name.slice(0, 2)}</span>
      </div>
      <div className="info">
        <Link to={"/gameSetup/" + child.name}>
          <h2>{child.name}</h2>
        </Link>
        <div>
          <span>Age: {child.age}</span>
          <span>stage: {child.stage}</span>
        </div>
      </div>
    </div>
  );
};

export default MyChildren;
