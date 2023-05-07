import { useState } from "react";
import "./SelectSubject.css";
import SelectGrade from "../Select-grade/SelectGrade";
const SelectSubject = ({ setChildGrade, setSubjectName, selectGrade }) => {
  const [subject, setSubject] = useState("english");
  const selectedSubject = (title) => {
    setSubjectName(title);
    setSubject(title);
  };

  const Subject = ({ title, img }) => {
    return (
      <div
        onClick={() => selectedSubject(title)}
        className={
          subject === title ? " outline-4 outline-[#ff5c0b] outline" : ""
        }
      >
        <img src={`/assets/images/${img}`} alt="" />
      </div>
    );
  };
  return (
    <div className="select-subject">
      {selectGrade && <SelectGrade setChildGrade={setChildGrade} />}

      <div className="wrapper" id="subjects">
        <Subject title={"arabic"} img={"arabic.jpg"} />
        <Subject title={"english"} img={"english.jpg"} />
        <Subject title={"math"} img={"maths.avif"} />
      </div>
    </div>
  );
};

export default SelectSubject;
