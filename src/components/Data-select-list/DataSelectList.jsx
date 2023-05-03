import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import SingleEnglishWord from "../Single-english-word/SingleEnglishWord";
const DataSelectList = ({ data, setChecked, checked, setmainSelection }) => {
  const handleToggle = (_id) => () => {
    const currentIndex = checked.indexOf(_id);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(_id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    setmainSelection(newChecked);
  };

  return (
    <List
      className="border-2 shadow-inner"
      sx={{ height: "15rem", my: 3, overflow: "auto" }}
    >
      {data?.length === 0 && (
        <span className="block mx-auto mt-16 w-fit">No items found !</span>
      )}
      {data?.map((item) => {
        const labelId = `checkbox-list-label-${item._id}`;
        return (
          <ListItem key={item._id} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(item._id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(item._id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>

              {item.studentName ? (
                <ListItemText id={labelId} primary={item.studentName} />
              ) : (
                <ListItemText
                  id={labelId}
                  primary={
                    <SingleEnglishWord
                      wordData={item}
                      key={item._id}
                      singleWordStyle={false}
                      deleteWord={() => {}}
                      editWordHandler={() => {}}
                    />
                  }
                />
              )}
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default DataSelectList;
