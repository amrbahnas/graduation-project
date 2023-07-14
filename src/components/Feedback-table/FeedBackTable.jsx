import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import useFeedback from "../../hooks/useFeedback";
// import { games } from "../asign-task-pages/SelectGame";

const FeedBackTable = ({ taskId, subject }) => {
  const { data, isLoading } = useFeedback(taskId);
  if (!data) return null;
  console.log(data, "data");
  if (isLoading) return <div className="text-center">Loading...</div>;
  const games = data.map((game) => game.gameName);
  const columns = [{ field: "word", headerName: "WORD", width: 130 }];

  columns.push(
    ...games.map((game) => {
      return {
        field: `game${game}`,
        headerName: `Game ${game}`,
        width: 130,
      };
    })
  );

  const rows = [];

  for (let i = 0; i < 6; i++) {
    const row = { id: i };
    for (let j = 0; j < games.length; j++) {
      row[`game${games[j]}`] = data[j].data[i].attempts;
      row.word =
        data[j].data[i].word ||
        data[j].data[i].sentence ||
        data[j].data[i].num1 +
          " " +
          data[j].data[i].operator +
          " " +
          data[j].data[i].num2;
    }
    rows.push(row);
  }
  //num1: "60", num2: "10", operator: "*"

  return (
    <div style={{ height: 450, width: "100%" }} className=" mb-14 bg-[#eefafd]">
      {/* <div className=" font-semibold mb-2 w-full ">Task Feedback</div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
      /> */}
    </div>
  );
};

export default FeedBackTable;

// games[subject].find((game) => game.id ===gameName && game.name )
const fromback = [
  {
    gameName: "0",
    data: [
      {
        word: "door",
        attempts: 0,
      },
      {
        word: "apple",
        attempts: 0,
      },
      {
        word: "egg",
        attempts: 0,
      },
      {
        word: "bat",
        attempts: 0,
      },
      {
        word: "cat",
        attempts: 1,
      },
      {
        word: "fork",
        attempts: 0,
      },
    ],
  },
  {
    gameName: "1",
    data: [
      {
        word: "door",
        attempts: 0,
      },
      {
        word: "apple",
        attempts: 0,
      },
      {
        word: "egg",
        attempts: 0,
      },
      {
        word: "bat",
        attempts: 0,
      },
      {
        word: "cat",
        attempts: 1,
      },
      {
        word: "fork",
        attempts: 0,
      },
    ],
  },
];
