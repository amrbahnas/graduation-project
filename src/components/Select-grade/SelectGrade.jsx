import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./SelectGrade.css";
const SelectGrade = ({ setChildGrade, childGrade }) => {
  const [grade, setgrade] = useState(childGrade ? childGrade : 1);

  const changeHandler = (e) => {
    setgrade(e.target.value);
    setChildGrade(e.target.value);
  };
  return (
    <FormControl fullWidth className="select-grade">
      <InputLabel id="demo-simple-select-label">Grade</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={grade}
        label="Age"
        onChange={(e) => {
          changeHandler(e);
        }}
        color="primary"
      >
        <MenuItem value={1}>Grade one</MenuItem>
        <MenuItem value={2}>Grade two</MenuItem>
        <MenuItem value={3}>Grade three</MenuItem>
        <MenuItem value={4}>Grade four</MenuItem>
        <MenuItem value={5}>Grade five</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectGrade;
