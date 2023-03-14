import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function DataSource({ dataSource, setdataSource }) {
  return (
    <FormControl sx={{p:2,mb:3 }}>
      <FormLabel id="demo-radio-buttons-group-label" color="primary">
        Task Data From:
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="previous"
        name="radio-buttons-group"
        onChange={(e) => setdataSource(e.target.value)}
      >
        <FormControlLabel
          value="previous"
          control={<Radio color="primary" />}
          label="Entered Data"
        />
        <FormControlLabel
          value="new"
          control={<Radio color="primary" />}
          label="Add New Data"
        />
        <FormControlLabel
          value="other"
          control={<Radio color="primary" />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
}
