import React from "react";
import { Link } from "react-router-dom"
// components
import NightMode from "./../NightMode/NightMode";
import ParentNavMenu from "../Parent-nav-menu/ParentNavMenu";
import ChildrenNavMenu from "../Children-nav-menu/ChildrenNavMenu";
import AllTasksNav from "../All-tasks-nav/AllTasksNav";
import "./DashboardNav.css";
const DashboardNav = ({ position }) => {

  return (
    <div className="dashboard-nav">
      <div className="nav-wrapper">
        <div className="left">
          <span className="logo">
            <Link to="/">
              <img src="/assets/brand/logo.svg" alt="" />
            </Link>
          </span>
          {position === "mychildren" || position === "AddSubjectData" ? (
            ""
          ) : position !== "manageaccount" ? (
            <>
              <ChildrenNavMenu position={position} />
              <AllTasksNav />
            </>
          ) : (
            <ChildrenNavMenu position={position} />
          )}
        </div>
        <div className="right">
          <NightMode />
          <ParentNavMenu />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
