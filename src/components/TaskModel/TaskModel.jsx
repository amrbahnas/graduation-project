import React, { useState } from "react";
import TaskTable from "../Task-table/TaskTable";
import FeedBackTable from "../Feedback-table/FeedBackTable";

const TaskModel = ({ currentTask, setTaskModel }) => {
  const [currentPage, setCurrentTask] = useState("data");
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md w-[95%] md:w-2/4  h-[90%]  overflow-hidden  ">
        <div className="header flex justify-end ">
          <div
            className=" cursor-pointer capitalize hover:scale-110  "
            onClick={() => setTaskModel(false)}
          >
            close
          </div>
        </div>
        <div className=" flex items-center border py-4 my-4 px-2 gap-4">
          <div
            className={`
            cursor-pointer
            ${currentPage === "data" && " font-bold  underline  "}
              `}
            onClick={() => setCurrentTask("data")}
          >
            Task Data
          </div>
          <div
            className={`
            cursor-pointer
            ${currentPage === "feedback" && " font-bold  underline"}
              `}
            onClick={() => setCurrentTask("feedback")}
          >
            Task FeedBack
          </div>
        </div>

        {currentPage === "data" ? (
          <TaskTable task={currentTask} />
        ) : currentTask?.done[0] ? (
          <FeedBackTable taskId={currentTask?._id} />
        ) : (
          <div className="text-center">No FeedBack Yet</div>
        )}
      </div>
    </div>
  );
};

export default TaskModel;
