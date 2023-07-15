import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import useFeedback from "../../hooks/useFeedback";
// import { games } from "../asign-task-pages/SelectGame";

const GamesName = {
  0: "Match",
  1: "Listen",
  2: "Arrange",
  3: "Compare",
  4: "Calculate",
  5: "Choose",
  6: "ArabicMCQ",
  7: "ArabicManyChoices",
};

const FeedBackTable = ({ taskId, subject }) => {
  const { data, isLoading, isError } = useFeedback(taskId);
  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError) return null;
  if (!data) return null;
  console.log(data, "data");

  const games = data.map((game) => game.gameName);
  const columns = [{ field: "word", headerName: "WORD", width: 130 }];

  columns.push(
    ...games.map((game) => {
      return {
        field: `game${GamesName[game]}`,
        headerName: `Game ${GamesName[game]}`,
        width: 130,
      };
    })
  );

  const rows = [];

  for (let i = 0; i < 6; i++) {
    const row = { id: i };
    for (let j = 0; j < games.length; j++) {
      row[`game${GamesName[games[j]]}`] = data[j].data[i].attempts;
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
    <div style={{ height: 450, width: "100%" }} className=" mb-14">
      <div className=" font-semibold mb-2 w-full ">Task Feedback</div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        className="bg-[#eefafd]"
      />
    </div>
  );
};

export default FeedBackTable;
