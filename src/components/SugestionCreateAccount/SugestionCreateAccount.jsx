import React from "react";
import { Link } from "react-router-dom";
import './SugestionCreateAccount.css'
const SugestionCreateAccount = () => {
  return (
    <div className="sugestion-create-account">
      <div className="theContainer h-full">
        <div className="wrapper">
          <div className="left">
            {/* <img src="assets/images/home page/5.png" alt="" /> */}
          </div>
          <div className="right">
            <h2>Ready to kickstart a learning adventure?</h2>
            <Link to="/signup">Create your free account today</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SugestionCreateAccount;
