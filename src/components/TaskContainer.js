import React from "react";
import InputBtn from "./InputBtn";

const TaskContainer = ({ title, setTodos, todos }) => {
  const handleClick = (title) => {
    const newTodos = todos.filter((todo) => todo !== title);
    setTodos(newTodos);
  };
  return (
    <div className="allTasks">
      <h3>{title}</h3>
      <InputBtn
        handleClick={() => {
          handleClick(title);
        }}
        label="X"
      />
    </div>
  );
};

export default TaskContainer;
