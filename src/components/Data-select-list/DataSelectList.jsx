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
      sx={{ minHeight: "12rem", maxHeight: "18rem", my: 3, overflow: "auto" }}
    >
      {!data?.length && (
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
              {item.studentName && (
                <ListItemText id={labelId} primary={item.studentName} />
              )}
              {item.subjectName === "english" &&
                (item.type === "word" ? (
                  <ListItemText
                    id={labelId}
                    primary={
                      <SingleEnglishWord
                        wordData={item}
                        key={item._id}
                        singleWordStyle={false}
                        deleteWord={() => {}}
                        editWordHandler={() => {}}
                        preview
                      />
                    }
                  />
                ) : (
                  <ListItemText
                    id={labelId}
                    primary={
                      <div className="p-2" key={item._id}>
                        <p>{item.sentence}</p>
                        <div className="flex flex-row gap-2">
                          (<div>{item.choices[0]}</div>-
                          <div>{item.choices[1]}</div>-
                          <div>{item.choices[2]}</div>)
                        </div>
                      </div>
                    }
                  />
                ))}

              {item.subjectName === "arabic" && (
                <ListItemText
                  id={labelId}
                  primary={
                    <div className="p-2" key={item._id}>
                      <p>{item.sentence}</p>
                      <div className="flex flex-row gap-2">
                        {item.choices.map((choice) => (
                          <div key={choice}>{choice.text}</div>
                        ))}
                      </div>
                    </div>
                  }
                />
              )}
              {item.subjectName === "math" && (
                <ListItemText
                  id={labelId}
                  primary={
                    <div className="p-2 flex flex-col" key={item._id}>
                      <div className=" flex flex-row items-center gap-5">
                        <span>numberOne :{item?.numbers?.num1}</span>
                        <span>numberTwo :{item?.numbers?.num1}</span>
                        <span>operator : {item?.numbers?.operator}</span>
                      </div>
                      <div className="flex flex-row gap-2">
                        (<div>{item?.choices[0]}</div>-
                        <div>{item?.choices[1]}</div>-
                        <div>{item?.choices[2]}</div>)
                      </div>
                    </div>
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
