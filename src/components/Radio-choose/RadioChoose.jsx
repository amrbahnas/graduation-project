import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioChoose({ title, setChooseValue, choose }) {
  return (
    <FormControl sx={{ p: 2, mb: 3 }}>
      <FormLabel id="demo-radio-buttons-group-label" color="primary">
        {title}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={choose[1].value}
        name="radio-buttons-group"
        onChange={(e) => setChooseValue(e.target.value)}
      >
        {choose.map(({ label, value }) => {
          return (
            <FormControlLabel
              key={label}
              value={value}
              control={<Radio color="primary" />}
              label={label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
