import { useState, useEffect } from "react";
import * as React from "react";
import "./Common.css";
import { useSelector } from "react-redux";
import SelectGrade from "../Select-grade/SelectGrade";
import DataSelectList from "../Data-select-list/DataSelectList";
const SelectChild = ({
  setselectedGrade,
  setselectedChildrens,
  setEnableBTN,
}) => {
  const { children } = useSelector((store) => store.userSlice);
  const [checked, setChecked] = useState([]);
  const [previewChildren, setpreviewChildren] = useState([]);

  useEffect(() => {
    if (checked.length > 0) {
      setEnableBTN(true);
    } else {
      setEnableBTN(false);
    }
  }, [checked]);

  useEffect(() => {
    setChecked([]);
  }, [previewChildren]);

  useEffect(() => {
    setpreviewChildren(children.filter((child) => child.studentGrade === 1));
  }, []);

  const setChildGradeHandler = (value) => {
    setselectedGrade(value);
    setpreviewChildren(
      children.filter((child) => child.studentGrade === value)
    );
  };

  return (
    <div className="select-children">
      <SelectGrade setChildGrade={(value) => setChildGradeHandler(value)} />
      <DataSelectList
        data={previewChildren}
        checked={checked}
        setChecked={setChecked}
        setmainSelection={setselectedChildrens}
      />
    </div>
  );
};

export default SelectChild;
