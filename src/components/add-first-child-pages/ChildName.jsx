import React, { useState } from "react";
import "./CommonStyle.css";
const ChildName = ({ setpage, setname }) => {
  const [childName, setchildName] = useState("");
  const [errorMessage, seterrorMessage] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (childName) {
      setpage(3);
      setname(childName);
      seterrorMessage(false);
    } else {
      seterrorMessage(true);
    }
  };
  return (
    <>
      <div className="image">
        <img src="/assets/images/blankChild.svg" alt="" />
      </div>
      <div className="child-name">
        <div className="process">
          <span></span>
        </div>
        <span>What's your child's name?</span>
        <form onSubmit={onSubmit}>
          <div className="input">
            <label>Child's first name</label>
            <input
              type="text"
              value={childName}
              onChange={(e) => setchildName(e.target.value)}
            />
          </div>
          <div className="input">
            <label>Child's last initial</label>
            <input type="text" />
          </div>
          {errorMessage && <span className="error">Invalied Name</span>}
          <div className="btns-add-first-child">
            <button type="submit">Add name</button>
            <button type="button" onClick={(e) => dispatch(setpage(1))}>
              Back
            </button>
          </div>
          <div>
            <span>Your information is safe. Read our </span>
            <a href="#f" target="_new" class="sc-fzoYkl fPtstd">
              <span>Privacy Policy.</span>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChildName;
