import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChildAccountCreated.css";
const childAccountCreated = ({ userName, password }) => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/parent/my-children", { replace: true });
  };
  return (
    <div className="child-account-created">
      <div className="wrapper">
        <div className="heading">
          <span>Account created!</span>
          <span>
            Here are your child's credentials. Your child will need them in
            order to start playing Prodigy!
          </span>
        </div>
        <div className="image">
          <img src="/assets/images/happyStarExtra.png" alt="" />
        </div>
        <form action="" onSubmit={onSubmit}>
          <div className="input">
            <label htmlFor="">Username</label>
            <input type="text" name="" id="" value={userName} disabled />
          </div>
          <div className="input">
            <label htmlFor="">Password</label>
            <input type="text" name="" id="" value={password} disabled />
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default childAccountCreated;
