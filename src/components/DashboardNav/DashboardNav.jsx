import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NightMode from "./../NightMode/NightMode";
import ParentNavMenu from "../Parent-nav-menu/ParentNavMenu";
import ChildrenNavMenu from "../Children-nav-menu/ChildrenNavMenu";
import AllTasksNav from "../All-tasks-nav/AllTasksNav";
import { HomeIcon } from "../../utils/icons";
import "./DashboardNav.css";

const DashboardNav = ({ position }) => {
  const navigate = useNavigate();

  const renderChildrenNavAndAllTasksNav = () => {
    return (
      <>
        <ChildrenNavMenu position={position} />
        <AllTasksNav />
      </>
    );
  };

  const renderHomeIcon = () => {
    return (
      <HomeIcon
        className="cursor-pointer"
        onClick={() => navigate("/parent/my-children")}
      />
    );
  };

  return (
    <div className="dashboard-nav">
      <div className="nav-wrapper">
        <div className="left">
          <span className="logo">
            <Link to="/">
              <img src="/assets/brand/logo.svg" alt="" />
            </Link>
          </span>

          {position === "mychildren" ||
          position === "AddSubjectData" ||
          position === "manageParentAccount" ? (
            renderHomeIcon()
          ) : position !== "manageaccount" ? (
            renderChildrenNavAndAllTasksNav()
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
