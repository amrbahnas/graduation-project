import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TaskTable from "../Task-table/TaskTable";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import "./TaskCard.css";
/**/
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import FeedBackTable from "../Feedback-table/FeedBackTable";
const TaskCard = ({ reorder, tasks }) => {
  // React state to track order of items
  const [itemList, setItemList] = useState(tasks);

  useEffect(() => {
    setItemList(tasks);
  }, [tasks]);
  // Function to update list on drop
  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...itemList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setItemList(updatedList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="list-container">
          {(provided) => (
            <div
              className=""
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {itemList.map((item, index) => (
                <Draggable key={item._id} draggableId={item._id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      className="mb-2"
                    >
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
                          <div className=" flex w-full justify-between mr-3 font-bold">
                            <Typography>
                              Task {index + 1} ( {item.Subject})
                            </Typography>
                            <Typography>
                              {item?.done[0] ? (
                                <span className=" flex items-center gap-2 text-green-800">
                                  <DoneAllIcon />
                                  Done
                                </span>
                              ) : (
                                <span alt="wait" className=" text-green-800">
                                  on Progress
                                </span>
                              )}
                            </Typography>
                          </div>
                        </AccordionSummary>
                        <AccordionDetails>
                          {item?.done[0] && (
                            <FeedBackTable taskId={item?._id} />
                          )}
                          <TaskTable task={item} />
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskCard;
