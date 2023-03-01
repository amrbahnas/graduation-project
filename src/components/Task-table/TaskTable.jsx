import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
const TaskTable = () => {
  const { feedBack } = useSelector((store) => store.questionsDataSlice);
  const columns = [
    { field: "word", headerName: "WORD", width: 130 },
    { field: "game1", headerName: "Game 1", width: 130 },
    { field: "game2", headerName: "Game 2", width: 130 },
    { field: "game3", headerName: "Game 3", width: 130 },
  ];

  
  const rows = [
    { id: 1, word: "Snow", game1: "Jon", game2: "Jon", game3: "Jon" },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[4]}
        checkboxSelection
      />
    </div>
  );
};

export default TaskTable;
