import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const InputStepper = ({ steps, activeStep }) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel sx={{my:5}}>
      {steps.map((label) => (
        <Step key={label} color="primary">
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default InputStepper;
