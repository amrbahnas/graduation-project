import React from "react";
import "./CommonStyle.css";
const AccountState = ({ setpage }) => {
  return (
    <>
      <div className="image">
        <img src="/assets/images/blankChild.svg" alt="" />
      </div>
      <div className="account-state">
        <h1>
          <span className=" whitespace-pre-wrap">
            Let's connect you with your child so you can help them learn more
            Math and English, Arabic
          </span>
        </h1>
        <div className="btns-add-first-child">
          <button onClick={(e) => setpage(2)}>
            <span>Create a new account</span>
          </button>
          {/* <button>
            <span>My child already has an account</span>
          </button> */}
        </div>
      </div>
    </>
  );
};

export default AccountState;
