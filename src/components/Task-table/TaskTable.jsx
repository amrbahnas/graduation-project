import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const TaskTable = ({ task }) => {
  console.log(task);

  const rows = [];
  const columns =
    task.Subject === "math"
      ? [
          { field: "word", width: 130 },
          { field: "choice", width: 130 },
        ]
      : [{ field: "word", width: 500 }];

  if (task.Subject === "english" && task.data1ID.type === "word") {
    for (let i = 1; i < 7; i++) {
      rows.push({
        id: task[`data${i}ID`]?._id || "",
        word: task[`data${i}ID`]?.definitionInEn || "field",
      });
    }
  } else if (task.Subject === "english" && task.data1ID.type === "sentence") {
    for (let i = 1; i < 7; i++) {
      rows.push({
        id: task[`data${i}ID`]?._id || "",
        word: task[`data${i}ID`].sentence || "field",
      });
    }
  } else if (task.Subject === "math") {
    for (let i = 1; i < 7; i++) {
      rows.push({
        id: task[`data${i}ID`]?._id || "",
        word: `${task[`data${i}ID`]?.numbers?.num1} ${
          task[`data${i}ID`]?.numbers?.operator
        } ${task[`data${i}ID`]?.numbers?.num2}
            `,

        choice: `( ${task[`data${i}ID`]?.choices[0]}, ${
          task[`data${i}ID`]?.choices[1]
        } ,${task[`data${i}ID`]?.choices[2]}   )`,

        // word:
        //   `numberOne:  ${task[`data${i}ID`].numbers.num1}  ||  numberTwo: ${
        //     task[`data${i}ID`].numbers.num2
        //   }  || operator: ${task[`data${i}ID`].numbers.operator}
        //       ||  choices: ( ${task[`data${i}ID`].choices[0]}, ${
        //     task[`data${i}ID`].choices[1]
        //   } ,${task[`data${i}ID`].choices[2]}   )

        //      ` || "field",
      });
    }
  } else {
    for (let i = 1; i < 7; i++) {
      rows.push({
        id: task[`data${i}ID`]?._id || "",
        word: task[`data${i}ID`].sentence || "field",
      });
    }
  }
  return (
    <div style={{ height: 430, width: "100%" }}>
      <div className=" font-semibold mb-2 w-full ">Task Questions</div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        sx={{
          backgroundColor: "#eefafd",
        }}
      />
    </div>
  );
};

export default TaskTable;
