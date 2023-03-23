import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
const ChildrenList = ({ children, setChecked, checked }) => {
  const handleToggle = (_id) => () => {
    const currentIndex = checked.indexOf(_id);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(_id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List
      className="border-2 shadow-inner"
      sx={{ height: "15rem", my: 3, overflow: "auto" }}
    >
      {children?.map((child) => {
        const labelId = `checkbox-list-label-${child._id}`;
        return (
          <ListItem key={child._id} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={handleToggle(child._id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(child._id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={child.studentName} />
            </ListItemButton>
          </ListItem>
        );
      })}
      {children.length === 0 && (
        <span className="block mx-auto mt-16 w-fit">No children found !</span>
      )}
    </List>
  );
};

export default ChildrenList;
