import React from "react";

export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDelete = (id) => {
    setTaskCardsList(taskCardsList.filter((taskCard) => taskCard.id !== id));
  };
  return (
    <div>
      <button
        className="taskCardDeleteBtn"
        onClick={() => taskCardDelete(taskCard.id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
