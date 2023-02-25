import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setpage,
  setgrade,
  setuserName,
  setpassword,
} from "../../store/slices/addFirstChildSlice";
import { addChildren, createChildAccount } from "../../store/slices/userSlice";
import "./CommonStyle.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { v4 } from "uuid";

const ChildGrade = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((store) => store.addFirstChildSlice);
  const { loading } = useSelector((store) => store.userSlice);
  const [childGrade, setchildGrade] = useState("");
  const [errorMessage, seterrorMessage] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (childGrade) {
      dispatch(setgrade(childGrade));
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
        dispatch(setuserName(username));
        dispatch(setpassword(password));
        dispatch(setpage(4));
        seterrorMessage(false);
      });
    } else {
      seterrorMessage(true);
    }
  };
  return (
    <>
      <div className="image">
        <img src="assets/images/childrengrade.svg" alt="" />
      </div>
      <div className="child-grade">
        <div className="process">
          <span></span>
        </div>
        <span className="title">What grade is {name} in?</span>
        <form onSubmit={onSubmit}>
          <span className="label">Select your child's current grade</span>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Grade</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={childGrade}
              label="Age"
              onChange={(e) => {
                setchildGrade(e.target.value);
              }}
            >
              <MenuItem value={1}>Grade one</MenuItem>
              <MenuItem value={2}>Grade two</MenuItem>
              <MenuItem value={3}>Grade three</MenuItem>
              <MenuItem value={4}>Grade four</MenuItem>
              <MenuItem value={5}>Grade five</MenuItem>
            </Select>
          </FormControl>
          <span>
            You can always override the grade later if {name} needs a different
            level of Math challenges.
          </span>
          {errorMessage && <span className="error">Invalid Grade</span>}
          <div className="btns-add-first-child">
            <button
              type="submit"
              class="sc-fzpkJw dkdYyO ButtonExtended-iglfeL jTskCK"
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
