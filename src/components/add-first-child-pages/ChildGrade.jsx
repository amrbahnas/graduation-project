import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChildren, createChildAccount } from "../../store/slices/userSlice";
import "./CommonStyle.css";
import { v4 } from "uuid";
import SelectGrade from "../Select-grade/SelectGrade";
import toast from "react-hot-toast";
import Loading from "./../Full-loading/FullLoading";

const ChildGrade = ({ setpage, name, setuserName, setpassword }) => {
  const dispatch = useDispatch();
  const [childGrade, setChildGrade] = useState(1);
  const [errorMessage, seterrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (childGrade) {
      setLoading(true);
      const username = name + v4().slice(0, 4);
      const password = v4().slice(0, 6);
      const data = {
        name,
        grade: childGrade,
        username,
        password,
        age: 10,
      };
      dispatch(createChildAccount(data))
        .unwrap()
        .then((action) => {
          setLoading(false);
          dispatch(addChildren(action.student));
          setuserName(username);
          setpassword(password);
          seterrorMessage(false);
          setpage(4);
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Something went wrong!");
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
          <SelectGrade setChildGrade={setChildGrade} childGrade={childGrade} />
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
            <a href="#f" target="_new" className="sc-fzoYkl fPtstd">
              <span>Privacy Policy.</span>
            </a>
          </div>
        </form>
        {loading && <Loading />}
      </div>
    </>
  );
};

export default ChildGrade;
