import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChildren, createChildAccount } from "../../store/slices/userSlice";

import { v4 } from "uuid";
import "./CreateChildForm.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import toast from "react-hot-toast";
import Loading from "./../Full-loading/FullLoading";
const CreateChildForm = ({ setuserName, setpassword, setsuccess }) => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [childGrade, setchildGrade] = useState("");
  const [loading, setLoading] = useState(false);

  const onsubmit = (e) => {
    e.preventDefault();
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
        toast.success("Account created successfully");
        dispatch(addChildren(action.student));
        setuserName(username);
        setpassword(password);
        setsuccess(true);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="create-child-form">
      <div className="wrapper">
        <div className="image">
          <img src="/assets/images/blankChild.svg" alt="" />
        </div>
        <div className="heading">
          <span>Create your child an account</span>
          <span>Please fill out the fields below.</span>
        </div>
        <form onSubmit={onsubmit}>
          <div className="input">
            <label htmlFor="">First name</label>
            <input
              type="text"
              name=""
              id=""
              required
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="">Last name initial</label>
            <input type="text" name="" id="" required />
          </div>
          <div className="input select">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Grade</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={childGrade}
                label="Age"
                required
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
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Loading" : "Create Account"}
          </button>
        </form>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default CreateChildForm;
