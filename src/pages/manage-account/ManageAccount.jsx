import React from "react";
import './ManageAccount.css'
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const ManageAccount = () => {
  return (
    <div className="manage-account">
      <DashboardNav position={"manageaccount"} />
      <div className="heading">
        <span>Manage Child</span>
        <button>remove Account</button>
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
            <span>Child's Grade</span>
            <div>
              <FormControl className="select">
                <InputLabel id="demo-simple-select-label">Grade</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={1}>Grade one</MenuItem>
                  <MenuItem value={2}>Grade two</MenuItem>
                  <MenuItem value={3}>Grade three</MenuItem>
                  <MenuItem value={4}>Grade four</MenuItem>
                  <MenuItem value={5}>Grade five</MenuItem>
                </Select>
              </FormControl>
              <button>
                <span>save</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageAccount;
