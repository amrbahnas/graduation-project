import * as React from "react";

import Slider from "@mui/material/Slider";
import { Button, MenuItem, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import generateRandomDataWithAi from "../../services/generateRandomDataWithAi";

function RandomData({ setSubjectData }) {
  const [value, setValue] = React.useState([20, 37]);
  const [operator, setoperator] = React.useState("");
  const [amount, setAmount] = React.useState(6);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const tryGenerate = async () => {
    setIsError(false);
    setSubjectData([]);
    setIsLoading(true);
    let array = [];
    try {
      const arrayOfData = await generateRandomDataWithAi({
        subjectname: "math",
        amount,
        range: value,
        operator,
      });
      console.log("tryGenerate");
      array = JSON.parse(arrayOfData);
    } catch (error) {
      setIsError(true);
      setSubjectData([]);
    }
    setIsLoading(false);
    if (array.length > 0) setSubjectData(array);
  };

  const handleChange = (newValue) => {
    setValue(newValue.target.value);
  };

  return (
    <div className=" w-full flex flex-col gap-10 items-center justify-center     mb-4">
      <div>Enter Number Range</div>
      <div div className=" w-full md:w-[320px] flex items-center gap-4">
        <span>{value[0]}</span>
        <Slider
          value={value}
          onChange={handleChange}
          //   valueLabelDisplay="auto"
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
        <TextField
          id="outlined-number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          label="Amount"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            marginTop: "35px",
          }}
        />
      </FormControl>
      <Button variant="contained" onClick={tryGenerate} disabled={isLoading}>
        {isLoading ? "Loading..." : "Generate"}
      </Button>
      {isError && <div>Try one more time..</div>}
    </div>
  );
}

export default RandomData;
