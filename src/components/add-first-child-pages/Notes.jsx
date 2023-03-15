import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { setpage } from "../../store/slices/addFirstChildSlice";
import "./CommonStyle.css";
import StarIcon from "@mui/icons-material/Star";

const Notes = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((store) => store.addFirstChildSlice);

  const onclickHandler = (e) => {
    dispatch(setpage(6));
  };
  return (
    <>
      <div className="image">
        <img src="/assets/images/Rocketship.svg" alt="" />
      </div>
      <div className="account-notes">
        <div className="process">
          <span></span>
        </div>
        <span className="title">
          As {name} plays, you'll get actionable insights for Math.
        </span>

        <div className="notes">
          <ul>
            <li>
              <StarIcon />{" "}
              <span>
                {name} will earn in-game badges and rewards for learning
                curriculum-aligned and teacher-approved Math content.
              </span>
            </li>
            <li>
              <StarIcon />{" "}
              <span>
                {name} will learn at their own pace, and you'll get actionable
                insights into how they're doing in Math.
              </span>
            </li>
            <li>
              <StarIcon />{" "}
              <span>
                {name} can practice Math while playing in a safe, fun
                environment. For free.
              </span>
            </li>
          </ul>
        </div>
        <div className="btns-add-first-child">
          <button onClick={onclickHandler}>continue</button>
          <button type="button" onClick={(e) => dispatch(setpage(4))}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Notes;
