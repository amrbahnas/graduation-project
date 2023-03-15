import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { resetAll } from "../../store/slices/userSlice";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useSelector, useDispatch } from "react-redux";

import "./ParentNavMenu.css";
const ParentNavMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { parentName } = useSelector((store) => store.userSlice);
  const parentList = useRef();

  const toggleParentMenu = () => {
    parentList.current.classList.toggle("display");
  };

  const parentMenuHandler = (path) => {
    navigate(path);
    toggleParentMenu();
  };

  const signUp = () => {
    dispatch(resetAll());
  };

  useEffect(() => {
    const handler = (e) => {
      //if the element which clicked not in the menu then
      if (!parentList.current.contains(e.target)) {
        parentList.current.classList.remove("display");
      }
    };
    document.addEventListener("mousedown", handler);
    // cleanup event listeners
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="parent-nav-menu">
      <span onClick={toggleParentMenu}>
        <PersonOutlineIcon /> {parentName}
      </span>
      <div className="list">
        <ArrowDropDownIcon onClick={toggleParentMenu} />
        <div className="menu" ref={parentList}>
          <span
            onClick={() => {
              parentMenuHandler("/");
            }}
          >
            <SettingsOutlinedIcon />
            <span>Account Setting</span>
          </span>

          <span
            onClick={() => {
              parentMenuHandler("/parent/my-children");
            }}
          >
            <AccessibilityNewIcon />
            <span>My Children</span>
          </span>
          <span
            onClick={() => {
              parentMenuHandler("/");
            }}
          >
            <InfoOutlinedIcon />
            <span>Help Center</span>
          </span>
          <span onClick={signUp}>
            <LogoutOutlinedIcon />
            <span>Logout</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ParentNavMenu;
