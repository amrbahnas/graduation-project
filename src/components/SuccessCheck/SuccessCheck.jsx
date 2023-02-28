import React, { useState, useEffect } from "react";
import "./SuccessCheck.css";
import { useNavigate } from "react-router-dom";
import { setdataIsSend } from "../../store/slices/questionsDataSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
const SuccessCheck = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [timerGoHome, setTimerGoHome] = useState(15);
  useEffect(() => {
    // if (timerGoHome > 0) {
    //   setTimeout(() => setTimerGoHome(timerGoHome - 1), 1000);
    // } else {
    //   dispatch(setdataIsSend(false));
    dispatch(setdataIsSend(false));
    //   navigate("/");
    // }
  }, [timerGoHome, navigate]);
  const navigateHandler = () => {
    dispatch(setdataIsSend(false));
    // navigate("/parent/my-children");
  };
  return (
    <div className="successWrapper">
      <motion.div
        className="flex flex-col items-center justify-center gap-10 -mt-24 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
        <motion.span
          whileTap={{ scale: 0.9 }}
          className="text-4xl font-bold text-center text-white capitalize"
        >
          Questions send successfully
        </motion.span>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={navigateHandler}
          className="py-3 font-bold text-black capitalize rounded-md w-80 bg-gray-300"
        >
          <span>Ok</span>
          {/* <span className="inline-block ml-2">{timerGoHome}</span> */}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SuccessCheck;
