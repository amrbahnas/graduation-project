import { useState, useEffect } from "react";
import * as React from "react";
import "./Common.css";
import { useSelector } from "react-redux";
import SelectGrade from "../Select-grade/SelectGrade";
import DataSelectList from "../Data-select-list/DataSelectList";
const SelectChild = ({ setselectedGrade, setselectedChildrens }) => {
  const { children } = useSelector((store) => store.userSlice);
  const [checked, setChecked] = useState([]);
  const [previewChildren, setpreviewChildren] = useState([]);
  const [childGrade, setchildGrade] = useState(1);
  useEffect(() => {
    // setpreviewChildren(children.filter((child) => child?.grade === childGrade));
    setpreviewChildren(
      children.filter((child) => child.studentGrade === childGrade)
    );
    setselectedGrade(childGrade);
  }, [childGrade]);

  return (
    <div className="select-children">
      <SelectGrade
        childGrade={childGrade}
        setchildGrade={setchildGrade}
        setgrade={() => {}}
      />
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
