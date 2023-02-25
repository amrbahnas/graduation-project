import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { setpage } from "../../store/slices/addFirstChildSlice";
import { useNavigate } from "react-router-dom";
import "./CommonStyle.css";
const Finish = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useSelector((store) => store.addFirstChildSlice);

  const onfinish = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
    dispatch(setpage(1));
  };
  return (
    <>
      <div className="image">
        <img src="assets/images/Rocketship.svg" alt="" />
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
