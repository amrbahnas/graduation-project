import React from "react";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import SpeedIcon from "@mui/icons-material/Speed";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import "./ChildDashboard.css";
const ChildDashboard = () => {
  return (
    <div className="parent-dashboard">
      <DashboardNav />
      <div className="theContainer">
        <div className="dashboard-wrapper">
          <div className="nav">
            <ul>
              <li>
                <SpeedIcon />
                <span> Dashboard</span>
              </li>
              <li>
                <LightbulbIcon />
                <span> Learning</span>
              </li>
            </ul>
          </div>

          <div className="dashboard">
            <div className="title">
              <span>ahmed's Dashboard</span>
            </div>
            <div className="boxs">
              <div className="activity">
                <h3>
                  <span>Recent activity</span>
                </h3>
                <div className="body">
                  <img src="/assets/images/noActivity.svg" alt="" />
                  <span>ahmed hasn’t Tasks yet</span>
                  <span className="description">
                    Once ahmed starts to play Prodigy, you will be able to see
                    what they have worked on here.
                  </span>
                  <button>
                    <span>Add Tasks</span>
                  </button>
                </div>
              </div>
              <div className="grade">
                <h3>
                  <span>Grade level</span>
                </h3>
                <p>
                  ahmed is performing at <strong>Grade 1</strong>
                  level currently. Please note that we only offer grade 1 - 6
                  for English at the moment.
                </p>
              </div>
              <div className="q-answers">
                <span>Not Yet!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildDashboard;
