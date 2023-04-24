import React from "react";
import "./CommonStyle.css";
const ChildAccount = ({ setpage, name, userName, password }) => {
  const onclickHandler = () => {
    setpage(5);
  };
  return (
    <>
      <div className="image">
        <img src="/assets/images/childaccount.svg" alt="" />
      </div>
      <div className="child-account">
        <div className="process">
          <span></span>
        </div>
        <span className="title">{name}’s account created!</span>
        <span>
          We’ve emailed you {name}’s credentials. {name} will need these to
          start learning with US!
        </span>
        <div className="info">
          <div className="user-name">
            <span>{name}’s username:</span>
            <strong>{userName}</strong>
          </div>
          <div className="password">
            <span>{name}’s password:</span>
            <strong>{password}</strong>
          </div>
        </div>
        <div className="btns-add-first-child">
          <button onClick={onclickHandler}>continue</button>
        </div>
      </div>
    </>
  );
};

export default ChildAccount;
