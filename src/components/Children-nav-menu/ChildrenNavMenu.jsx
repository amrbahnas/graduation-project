import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// icons
import {
  ArrowDropDownIcon,
  AddCircleOutlineOutlinedIcon,
} from "../../utils/icons";

import "./ChildrenNavMenu.css";
const ChildrenNavMenu = ({ position }) => {
  const childrenList = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, currentPage } = useParams();

  const { login, parentName, children } = useSelector(
    (store) => store.userSlice
  );
  const [currentChild, setcurrentChild] = useState({});

  const toggleChildrenMenu = () => {
    childrenList.current.classList.toggle("display");
  };
  const childrenswitch = (_id) => {
    if (position === "dashboard")
      navigate(`/parent/my-children/${_id}/alltasks/dashboard`);
    else navigate(`/parent/my-children/${_id}/manage-account`);
    childrenList.current.classList.toggle("display");
  };
  useEffect(() => {
    if (_id) {
      setcurrentChild(children.filter((child) => child._id === _id)[0]);
    }
  }, [_id]);
  useEffect(() => {
    const handler = (e) => {
      //if the element which clicked not in the menu then
      if (!childrenList.current.contains(e.target)) {
        childrenList.current.classList.remove("display");
      }
    };
    document.addEventListener("mousedown", handler);
    // cleanup event listeners
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="children-nav-menu">
      <span onClick={toggleChildrenMenu}>{currentChild?.studentName}</span>
      <div className="list">
        <ArrowDropDownIcon onClick={toggleChildrenMenu} />
        <div className="menu" ref={childrenList}>
          {_id &&
            children?.map((child) => (
              <span key={child._id} onClick={(e) => childrenswitch(child._id)}>
                {child.studentName}
              </span>
            ))}
          <span onClick={(e) => navigate("/parent/addchild")}>
            <AddCircleOutlineOutlinedIcon />
            <span>Add child</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChildrenNavMenu;
