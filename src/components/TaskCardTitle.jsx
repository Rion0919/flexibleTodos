import React, { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputTitle, setInputTitle] = useState("Today");
  const handleClick = () => {
    setIsClick(true);
  };
  const handleChange = (e) => {
    setInputTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTitle === "") {
      setInputTitle("Todos");
    }
    setIsClick(false);
  };
  const handleBlur = () => {
    if (inputTitle === "") {
      setInputTitle("Todos");
    }
    setIsClick(false);
  };
  return (
    <div onClick={handleClick} className="taskCardTitleArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
            onChange={handleChange}
            type="text"
            onBlur={handleBlur}
            value={inputTitle}
            autoFocus
            maxLength="15"
          />
        </form>
      ) : (
        <h3>{inputTitle}</h3>
      )}
    </div>
  );
};
