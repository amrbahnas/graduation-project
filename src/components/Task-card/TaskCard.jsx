import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TaskTable from "../Task-table/TaskTable";

const TaskCard = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Task 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TaskTable />
        </AccordionDetails>
      </Accordion>
      {/*  */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Task 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TaskTable />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TaskCard;
