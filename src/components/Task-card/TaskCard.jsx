import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TaskTable from "../Task-table/TaskTable";
import "./TaskCard.css";
/**/
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const TaskCard = ({ reorder, data }) => {
  const defaultList = [
    "english",
    "math",
    "arabic",
    "english",
    "math",
    "arabic",
    "english",
    "math",
    "arabic",
  ];

  // React state to track order of items
  const [itemList, setItemList] = useState(defaultList);

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
                <Draggable key={item} draggableId={item} index={index}>
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
                        >
                          <Typography>
                            Task {index + 1} ( {item.Subject})
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <TaskTable data={data} />
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
