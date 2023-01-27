import React from "react";
import { v4 as uuidv4 } from 'uuid'


export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const id = uuidv4()
  const addTaskCard = () => {
    setTaskCardsList([...taskCardsList, {
      id: id,
      draggableId: `item${id}`
    }])
  }
  return (
    <div className="btnArea">
      <button className="addTaskCardBtn" onClick={addTaskCard}>+</button>
    </div>
  );
};
