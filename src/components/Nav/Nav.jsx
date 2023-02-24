import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginState } from "../..//store/slices/userSlice";

import NightMode from "./../NightMode/NightMode";
import "./Nav.css";
const Nav = () => {
  const dispatch = useDispatch();
  const { login, userName } = useSelector((store) => store.userSlice);
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
            <ul>
              {login ? (
                <>
                  <li>
                    <NightMode />
                  </li>
                  <li className="hidden md:inline-block">welome: {userName}</li>
                  <li className="signout" onClick={signUp}>
                    sign out
                  </li>
                </>
              ) : (
                <>
                  {/* <li>
                  <NightMode />
                </li> */}
                  <li>
                    <Link to="/login">log in</Link>
                  </li>
                  <li className="signUp">
                    <Link to="/signup">sign up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
    </nav>
  );
};

export default Nav;
