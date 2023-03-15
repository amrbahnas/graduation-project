import React from "react";
import { CircularProgress } from "@mui/material";
import "./ProcessLoading.css";

const ProcessLoading = () => {
  return (
    <div className="process-loading">
      <div className="process-loading-wrapper">
        <span>Loading your page...</span>
        <span>it will only be amoment!</span>
        <CircularProgress sx={{width:20}} />
      </div>
    </div>
  );
};

export default ProcessLoading;
