import React from "react";
import './ManageAccount.css'
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SelectGrade from './../../components/Select-grade/SelectGrade';
const ManageAccount = () => {
  return (
    <div className="manage-account">
      <DashboardNav position={"manageaccount"} />
      <div className="theContainer">

      <div className="heading">
        <span>Manage Child</span>
        <button>Remove Account</button>
      </div>
      <div className="body">
        <h3>Account Information</h3>
        <span>
          Below is the information that your child needs to log into and play
          the game.
        </span>
        <div className="info">
          <span>
            username: <strong>ahmed123</strong>
          </span>
          <span>
            password: <strong>asdasd334</strong>
          </span>
          <span>
            Grade: <strong>1</strong>
          </span>
        </div>
        <form>
          <div className="input">
            <span>Child's first name and last initial</span>
            <div>
              <input type="text" />
              <button>
                <span>save</span>
              </button>
            </div>
          </div>
          <div className="input">
            <span>Password</span>
            <div>
              <input type="text" />
              <button>
                <span>save</span>
              </button>
            </div>
          </div>
          <div className="input">
            <div>
             <SelectGrade/>
              <button className="mt-2">
                <span>save</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default ManageAccount;
