import React from "react";
import DashboardNav from "../../components/DashboardNav/DashboardNav";

const ParentDashboard = () => {
  return (
    <div className="parent-dashboard">
      <DashboardNav />
      <div className="theContainer">
        <div className="wrapper">
          <div className="nav">dashboard</div>
          <div className="dashboard">
            <div className="title">
              <span>ahmed's Dashboard</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
