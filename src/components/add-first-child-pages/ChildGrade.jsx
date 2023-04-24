import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChildren, createChildAccount } from "../../store/slices/userSlice";
import "./CommonStyle.css";
import { v4 } from "uuid";
import SelectGrade from "../Select-grade/SelectGrade";

const ChildGrade = ({ setpage, name, setuserName, setpassword }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.userSlice);
  const [childGrade, setchildGrade] = useState("");
  const [errorMessage, seterrorMessage] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (childGrade) {
      const username = name + v4().slice(0, 4);
      const password = v4().slice(0, 6);
      const data = {
        name,
        age: "9",
        stage: childGrade,
        username,
        password,
      };
      dispatch(createChildAccount(data)).then((action) => {
        dispatch(addChildren(action.payload.student));
        setuserName(username);
        setpassword(password);
        setpage(4);
        seterrorMessage(false);
      });
    } else {
      seterrorMessage(true);
    }
  };
  return (
    <>
      <div className="image">
        <img src="/assets/images/childrengrade.svg" alt="" />
      </div>
      <div className="child-grade">
        <div className="process">
          <span></span>
        </div>
        <span className="title">What grade is {name} in?</span>
        <form onSubmit={onSubmit}>
          <span className="label">Select your child's current grade</span>
          <SelectGrade setchildGrade={setchildGrade} childGrade={childGrade} />
          <span>
            You can always override the grade later if {name} needs a different
            level of Math challenges.
          </span>
          {errorMessage && <span className="error">Invalid Grade</span>}
          <div className="btns-add-first-child">
            <button
              type="submit"
              className="sc-fzpkJw dkdYyO ButtonExtended-iglfeL jTskCK"
              disabled={loading}
            >
              {loading ? "loading" : "Add grade"}
            </button>
            <button type="button" onClick={(e) => dispatch(setpage(2))}>
              Back
            </button>
          </div>
          <div className="footer">
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

export default ChildGrade;
