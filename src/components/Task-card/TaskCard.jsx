import { useState } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import TaskTable from "../Task-table/TaskTable";
import "./TaskCard.css";
/**/
import FeedBackTable from "../Feedback-table/FeedBackTable";
import { DeleteIcon, EditIcon } from "../../utils/icons";
import useDeleteTask from "../../hooks/useDeleteTask";
import { CircularProgress } from "@mui/material";
import useUpdateTask from "../../hooks/useUpdateTask";
const TaskCard = ({ tasks }) => {
  if (!Array.isArray(tasks)) {
    return null;
  }
  const [updateTaskModel, setUpdateTaskModel] = useState(false);
  const { mutate: deleteTask, isLoading: deleteTaskIsLoading } =
    useDeleteTask();
  const { mutate: updateTask, isLoading: updateTaskIsLoading } =
    useUpdateTask();

  const handleUpdateTask = (task) => {
    // updateTask(task._id, { ...task, done: [true] });
  };
  return (
    <div className="">
      {tasks?.map((item, index) => (
        <div className="mb-2" key={item._id}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#eefafd",
                overflow: "hidden",
                borderRadius: "10px",
              }}
            >
              <div className=" flex w-full justify-between md:mr-3 font-bold ">
                <div className="flex flex-col gap-2">
                  <Typography>
                    Task {index + 1} ( {item.Subject})
                  </Typography>
                  <Typography>
                    {item?.done[0] ? (
                      <span className=" flex items-center gap-1 md:gap-2 text-green-800">
                        <DoneAllIcon />
                        Done
                      </span>
                    ) : (
                      <span
                        alt="wait"
                        className=" text-green-800 text-xs md:text-base "
                      >
                        on Progress
                      </span>
                    )}
                  </Typography>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    {updateTaskIsLoading ? (
                      <CircularProgress size={16} />
                    ) : (
                      <EditIcon
                        size={16}
                        onClick={() => handleUpdateTask(item)}
                        className=" hover:scale-[1.1] hover:text-green-600  "
                      />
                    )}
                  </div>
                  <div>
                    {deleteTaskIsLoading ? (
                      <CircularProgress size={16} />
                    ) : (
                      <DeleteIcon
                        size={16}
                        onClick={() => {
                          deleteTask(item._id);
                        }}
                        className=" hover:scale-[1.1] hover:text-red-500  "
                      />
                    )}
                  </div>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#eefafd",
                marginBottom: "100px",
              }}
            >
              {item?.done[0] && <FeedBackTable taskId={item?._id} />}
              <TaskTable task={item} />
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
