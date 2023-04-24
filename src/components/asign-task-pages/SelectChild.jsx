import { useState, useEffect } from "react";
import * as React from "react";
import "./Common.css";
import { useSelector } from "react-redux";
import SelectGrade from "../Select-grade/SelectGrade";
import ChildrenList from "../Children-list/ChildrenList";
const SelectChild = () => {
  const { children } = useSelector((store) => store.userSlice);
  console.log(children);
  const [checked, setChecked] = useState([]);
  const [previewChildren, setpreviewChildren] = useState([]);
  const [childGrade, setchildGrade] = useState(1);
  useEffect(() => {
    // setpreviewChildren(children.filter((child) => child?.grade === childGrade));
    setpreviewChildren(
      children.filter((child) => child.studentGrade === childGrade)
    );
  }, [childGrade]);

  return (
    <div className="select-children">
      <SelectGrade childGrade={childGrade} setchildGrade={setchildGrade} />
      <ChildrenList
        children={previewChildren}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default SelectChild;
