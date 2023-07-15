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
import TaskModel from "../TaskModel/TaskModel";
const TaskCard = ({ tasks }) => {
  if (!Array.isArray(tasks)) {
    return null;
  }
  const { mutate: deleteTask, isLoading: deleteTaskIsLoading } =
    useDeleteTask();
  const [currentTask, setCurrentTask] = useState();
  const [taskModel, setTaskModel] = useState(false);
  const { mutate: updateTask, isLoading: updateTaskIsLoading } =
    useUpdateTask();

  const handleUpdateTask = (task) => {
    // updateTask({ _id: task._id, newData: { ...task, done: [true] } });
  };

  const handelTaskModel = (_id) => {
    setCurrentTask(tasks.filter((task) => task._id === _id)[0]);
    setTaskModel(true);
  };
  return (
    <div className="min-h-[280px] h-[420px]  pb-20  overflow-x-hidden overflow-y-scroll ">
      {taskModel && (
        <TaskModel currentTask={currentTask} setTaskModel={setTaskModel} />
      )}
      {tasks?.map((item, index) => (
        <div
          className=" flex w-full justify-between md:mr-3 font-bold bg-[#eefafd] mb-3 shadow-md p-3 rounded-md "
          key={item._id}
        >
          <div
            className="flex flex-col gap-2 flex-1 cursor-pointer "
            onClick={() => handelTaskModel(item._id)}
          >
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
          {!item.done[0] && (
            <div className="flex items-center gap-6">
              {/* <div>
                {updateTaskIsLoading ? (
                  <CircularProgress size={16} />
                ) : (
                  <EditIcon
                    size={16}
                    onClick={() => handleUpdateTask(item)}
                    className=" hover:scale-[1.1] hover:text-green-600  "
                  />
                )}
              </div> */}
              <div>
                {deleteTaskIsLoading ? (
                  <CircularProgress size={16} />
                ) : (
                  <DeleteIcon
                    size={16}
                    onClick={() => {
                      const status = confirm("Are you sure you want to delete");
                      if (status) deleteTask(item._id);
                    }}
                    className=" hover:scale-[1.1] hover:text-red-500  cursor-pointer mr-4 "
                  />
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskCard;

/* {/* <AccordionDetails
            sx={{
              backgroundColor: "#eefafd",
              marginBottom: "100px",
            }}
          >
            {item?.done[0] && <FeedBackTable taskId={item?._id} />}
            <TaskTable task={item} />
          </AccordionDetails> }*/
