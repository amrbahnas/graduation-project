import React from "react";
import { motion } from "framer-motion";
import "./SelectSubject.css";
const SelectSubject = ({ setSubjectName }) => {
  const selectedSubject = (e, subject) => {
    setSubjectName(subject);
    document.querySelectorAll("#subjects div").forEach((subject) => {
      subject.style.outline = "none";
    });
    e.target.parentElement.style.outline = "5px solid #ff5c0b";
  };

  const Subject = ({ title, img }) => {
    return (
      <motion.div
        onClick={(e) => selectedSubject(e, title)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={title}
      >
        <img src={`../../../public/assets/images/${img}`} alt="" />
      </motion.div>
    );
  };
  return (
    <div className="select-subject">
      <div className="wrapper" id="subjects">
        <Subject title={"arabic"} img={"arabic.jpg"} />
        <Subject title={"english"} img={"english.jpg"} />
        <Subject title={"math"} img={"maths.avif"} />
      </div>
    </div>
  );
};

export default SelectSubject;
