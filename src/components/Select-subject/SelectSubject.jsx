import React, { useEffect } from "react";
import { setsubject, setstepNumber } from "../../store/slices/unitsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./SelectSubject.css";
const SelectSubject = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setstepNumber(0));
  }, [dispatch]);
  const selectedSubject = (e, subject) => {
    dispatch(setsubject(subject));
    document.querySelectorAll("#subjects div").forEach((subject) => {
      subject.style.outline = "none";
    });
    e.target.style.outline = "5px solid #ff5c0b";
  };

  return (
    <div className="select-subject">
      <div className="wrapper" id="subjects">
        <div
          onClick={(e) => selectedSubject(e, "arabic")}
          className="arabic"
        ></div>
        <div
          onClick={(e) => selectedSubject(e, "english")}
          className="english"
        ></div>
        <div
          onClick={(e) => selectedSubject(e, "math")}
          className="math"
        ></div>
      </div>
      {/* <div className="control">
        <Link to="unit">Next</Link>
      </div> */}
    </div>
  );
};

export default SelectSubject;
