import React from "react";
import { v4 as uuidv4 } from 'uuid'

export const TaskAddInput = ({
  inputText,
  taskList,
  setInputText,
  setTaskList,
}) => {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskId = uuidv4()
    if(inputText !== '') {
      setTaskList([...taskList, {
        id: taskId,
        text: inputText,
        draggableId: `task-${taskId}`
      }]);
    }
    setInputText('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskInput"
          onChange={handleChange}
          value={inputText}
          type="text"
          autoFocus
          maxLength="15"
        />
      </form>
    </div>
  );
};
