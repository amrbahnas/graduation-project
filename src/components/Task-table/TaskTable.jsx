import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { games } from "../asign-task-pages/SelectGame";
const TaskTable = ({ task }) => {
  console.log(task);

  const rows = [];
  const columns = [
    { field: "word", headerName: "Tasks Questions", width: 130 },
  ];

  if (task.Subject === "english" && task.data1ID.type === "word") {
    for (let i = 1; i < 7; i++) {
      rows.push({
        id: task[`data${i}ID`]._id || "",
        word: task[`data${i}ID`].definitionInEn || "field",
      });
    }
  } else if (task.Subject === "english" && task.data1ID.type === "sentence") {
    for (let i = 1; i < 7; i++) {
      rows.push({
        id: task[`data${i}ID`]._id || "",
        word: task[`data${i}ID`].sentence || "field",
      });
    }
  } else if (task.Subject === "math") {
    for (let i = 1; i < 7; i++) {
      rows.push({
        id: task[`data${i}ID`]._id || "",
        word:
          `numberOne:  ${task[`data${i}ID`].numbers.num1}  ||  numberTwo: ${
            task[`data${i}ID`].numbers.num2
          }  || operator: ${task[`data${i}ID`].numbers.operator}
              ||  choices: ( ${task[`data${i}ID`].choices[0]}, ${
            task[`data${i}ID`].choices[1]
          } ,${task[`data${i}ID`].choices[2]}   )

             ` || "field",
      });
    }
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
      />
    </div>
  );
};

export default TaskTable;
