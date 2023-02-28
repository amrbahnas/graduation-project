import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const { id } = useParams();
  const { login, parentName, children } = useSelector(
    (store) => store.userSlice
  );
  const [currentChild, setcurrentChild] = useState({});
  useEffect(() => {
    if (id) {
      setcurrentChild(children.filter((child) => child._id === id)[0]);
    }
  }, [id]);
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
  // console.log(children);
  const toggleParentMenu = () => {
    parentList.current.classList.toggle("display");
  };
  const toggleChildrenMenu = () => {
    childrenList.current.classList.toggle("display");
  };

  const signUp = () => {
    dispatch(setLoginState(false));
  };
  const childrenswitch = (id) => {
    navigate(`/dashboard/${id}`);
    childrenList.current.classList.toggle("display");
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
          <ul
            className={
              position === "mychildren" || position === "gameSetup"
                ? "opacity-0"
                : ""
            }
          >
            <li className="children">
              <span onClick={toggleChildrenMenu}>
                {currentChild?.studentName}
              </span>
              <div className="list">
                <ArrowDropDownIcon onClick={toggleChildrenMenu} />
                <div className="menu" ref={childrenList}>
                  {id &&
                    children?.map((child) => (
                      <span
                        key={child._id}
                        onClick={(e) => childrenswitch(child._id)}
                      >
                        {child.studentName}
                      </span>
                    ))}
                  <span onClick={(e) => navigate("/addchild")}>
                    <AddCircleOutlineOutlinedIcon />
                    <span>Add child</span>
                  </span>
                </div>
              </div>
            </li>
            <li>
              <Link>Math</Link>
            </li>
            <li>
              <Link>English</Link>
            </li>
            <li>
              <Link>Arabic</Link>
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
                <ArrowDropDownIcon onClick={toggleParentMenu} />
                <div className="menu" ref={parentList}>
                  <Link>
                    <SettingsOutlinedIcon />
                    <span>Account Setting</span>
                  </Link>
                  <Link to="/mychildren">
                    <AccessibilityNewIcon />
                    <span>My Children</span>
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
