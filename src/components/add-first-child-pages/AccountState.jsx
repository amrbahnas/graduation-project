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
          <span>
            Let's connect you with your child so you can help them learn more
            Math and English.
          </span>
        </h1>
        <div className="btns-add-first-child">
          <button>
            <span>My child already has an account</span>
          </button>
          <button onClick={(e) => setpage(2)}>
            <span>My child needs a new account</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountState;
