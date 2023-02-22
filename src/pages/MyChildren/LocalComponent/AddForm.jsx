import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addChildren,
  createChildAccount,
} from "../../../store/slices/userSlice";
// icons
import CloseIcon from "@mui/icons-material/Close";
//
import "react-toastify/dist/ReactToastify.css";
import "./AddForm.css";
const AddForm = ({ setshowForm }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.userSlice);
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [stage, setstage] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  // onsubmit
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name,
      age,
      stage,
      username,
      password,
    };
    dispatch(createChildAccount(data)).then((action) => {
      // const _id = action.payload.student_id;
      dispatch(addChildren(action.payload.student));
      setshowForm(false);
    });
  };
  // close layout when click outside
  const layout = useRef();
  useEffect(() => {
    const handler = (e) => {
      //if the element which clicked not in the menu then
      if (!layout.current.contains(e.target)) {
        setshowForm(false);
      }
    };
    document.addEventListener("mousedown", handler);
    // cleanup event listeners
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="AddChildrenForm">
      <form ref={layout} onSubmit={(e) => submitHandler(e)}>
        <div className="close">
          <span>create children</span>
          <span onClick={(e) => setshowForm(false)}>
            <CloseIcon size="small" />
          </span>
        </div>
        <label className="title"> general Information:</label>
        <div className="inputs">
          <div className="input">
            <label htmlFor="name">first Name</label>
            <input
              type="text"
              name=""
              id="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <label htmlFor="age">age</label>
            <input
              type="number"
              name=""
              id="age"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="name">grade</label>
            <select value={stage} onChange={(e) => setstage(e.target.value)}>
              <option>please select the stage</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <label className="title">Accout Info:</label>
        <div className="inputs">
          <div className="input">
            <label htmlFor="userName">userName</label>
            <input
              type="text"
              name=""
              id="userName"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name=""
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
        </div>

        {loading ? (
          <img
            src="/assets/svg/loading.svg"
            alt=""
            className="w-10 h-10 ml-10 "
          />
        ) : (
          <button>create</button>
        )}
      </form>
    </div>
  );
};

export default AddForm;
