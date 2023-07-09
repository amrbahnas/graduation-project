import * as React from "react";

import Slider from "@mui/material/Slider";
import { Button, MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import tryGenerate from "../../services/generateMath";

function valuetext(value) {
  return `${value}°C`;
}

export default function RandomData() {
  const [value, setValue] = React.useState([20, 37]);
  const [operator, setoperator] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className=" w-full flex flex-col gap-10 items-center justify-center     mb-4">
      <div>Enter Number Range</div>
      <div div className=" w-full md:w-[320px] flex items-center gap-4">
        <span>{value[0]}</span>
        <Slider
          //   getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          //   valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <span>{value[1]}</span>
      </div>
      <FormControl className="w-full md:w-[60%]">
        <InputLabel id="demo-simple-select-label">operator</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={operator}
          label="operator"
          onChange={(e) => setoperator(e.target.value)}
        >
          <MenuItem value={"+"}>+</MenuItem>
          <MenuItem value={"-"}>-</MenuItem>
          <MenuItem value={"*"}>*</MenuItem>
          <MenuItem value={"/"}>/</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        onClick={() => tryGenerate("math", value, operator)}
      >
        Generate
      </Button>
    </div>
  );
}
