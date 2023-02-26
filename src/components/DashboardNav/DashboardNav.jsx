import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginState } from "../..//store/slices/userSlice";
// icon
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import NightMode from "./../NightMode/NightMode";
import "./DashboardNav.css";
const DashboardNav = ({ position }) => {
  const dispatch = useDispatch();
  const { login, parentName, children } = useSelector(
    (store) => store.userSlice
  );
  const parentList = useRef();
  const childrenList = useRef();

  useEffect(() => {
    const handler = (e) => {
      //if the element which clicked not in the menu then
      if (
        !parentList.current.contains(e.target) &&
        !childrenList.current.contains(e.target)
      ) {
        parentList.current.classList.remove("display");
        childrenList.current.classList.remove("display");
      }
    };
    document.addEventListener("mousedown", handler);
    // cleanup event listeners
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  console.log(children);
  const toggleParentMenu = () => {
    parentList.current.classList.toggle("display");
  };
  const toggleChildrenMenu = () => {
    childrenList.current.classList.toggle("display");
  };

  const signUp = () => {
    dispatch(setLoginState(false));
  };
  return (
    <div className="dashboard-nav">
      <div className="wrapper">
        <div className="left">
          <span className="logo">
            <NavLink to="/">
              <img src="/assets/brand/logo.svg" alt="" />
            </NavLink>
          </span>
          <ul className={position === "mychildren" && "opacity-0"}>
            <li className="children">
              <span onClick={toggleChildrenMenu}>
                {children[0].studentName}
              </span>
              <div className="list">
                <ArrowDropDownIcon />
                <div className="menu" ref={childrenList}>
                  {children.map((child) => (
                    <Link key={child._id}>{child.studentName}</Link>
                  ))}
                  <Link to="/addchild">
                    <AddCircleOutlineOutlinedIcon />
                    <span>Add child</span>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <NavLink>Math</NavLink>
            </li>
            <li>
              <NavLink>English</NavLink>
            </li>
            <li>
              <NavLink>Arabic</NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <NightMode />
            </li>
            <li className="parent">
              <span onClick={toggleParentMenu}>
                <PersonOutlineIcon /> {parentName}
              </span>
              <div className="list">
                <ArrowDropDownIcon />
                <div className="menu" ref={parentList}>
                  <Link>
                    <SettingsOutlinedIcon />
                    <span>Account Setting</span>
                  </Link>
                  <Link>
                    <AccessibilityNewIcon />
                    <span>Manage Child</span>
                  </Link>
                  <Link>
                    <InfoOutlinedIcon />
                    <span>Help Center</span>
                  </Link>
                  <Link onClick={(e) => dispatch(setLoginState(false))}>
                    <LogoutOutlinedIcon />
                    <span>Logout</span>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
