import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginState } from "../..//store/slices/userSlice";

import NightMode from "./../NightMode/NightMode";
import "./Nav.css";
const Nav = () => {
  const dispatch = useDispatch();
  const { login, parentName } = useSelector((store) => store.userSlice);
  const signUp = () => {
    dispatch(setLoginState(false));
  };
  return (
    <nav>
      <div className="wrapper">
        <div className="left">
          <span className="logo">
            <NavLink to="/">
              <img src="/assets/brand/logo.svg" alt="" />
            </NavLink>
          </span>
          <ul>
            <li>
              <NavLink to="/" end className="w-full">
                parent
              </NavLink>
            </li>
            <li>
              <NavLink>teatcher</NavLink>
            </li>
            <li>
              <NavLink>game</NavLink>
            </li>
          </ul>
        </div>
        <div className="right">    
            {login ? (
              <ul>
                <li>
                  <NightMode />
                </li>
                <li className="hidden md:flex">welome: {parentName}</li>
                <li className="signout" onClick={signUp}>
                  sign out
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <NightMode />
                </li>
                <li className="login">
                  <Link to="/login">log in</Link>
                </li>
                <li className="signUp">
                  <Link to="/signup">sign up</Link>
                </li>
              </ul>
            )}
          
        </div>
      </div>
    </nav>
  );
};

export default Nav;
