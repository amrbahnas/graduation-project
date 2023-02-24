import React from "react";
import { motion } from "framer-motion";
import "./OurMission.css";
const OurMission = () => {
  return (
    <div className="our-mission">
      <motion.div
        initial={{ rotateY: -180, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeOut",
          duration: 1,
        }}
        className="theContainer"
      >
        <span>Our Mission:</span>
        <h3>
          To help every <br /> student in the world
        </h3>
        <span>love learning</span>
      </motion.div>
    </div>
  );
};

export default OurMission;
