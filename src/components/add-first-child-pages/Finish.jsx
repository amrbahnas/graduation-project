import React from "react";
import { useNavigate } from "react-router-dom";
import "./CommonStyle.css";
const Finish = ({ setpage, name }) => {
  const navigate = useNavigate();

  const onfinish = (e) => {
    e.preventDefault();
    navigate("/parent/my-children", { replace: true });
    setpage(1);
  };
  return (
    <>
      <div className="image">
        <img src="/assets/images/Rocketship.svg" alt="" />
      </div>
      <div className="finish">
        <div className="process">
          <span></span>
        </div>
        <span className="title">
          We send you emails like monthly Report Cards so you can better guide
          {name}'s learning.
        </span>

        <div className="body">
          <div className="box">
            <img src="assets/images/right.svg" alt="" />
            <span>You'll know {name}'s strongest skills</span>
          </div>
          <div className="box">
            <img src="assets/images/clock.svg" alt="" />
            <span>You'll know when {name} needs more practice</span>
          </div>
        </div>
        <div className="btns-add-first-child">
          <button onClick={onfinish}>continue</button>
        </div>
      </div>
    </>
  );
};

export default Finish;
