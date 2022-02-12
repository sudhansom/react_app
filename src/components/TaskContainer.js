import React from "react";
import InputBtn from "./InputBtn";

const TaskContainer = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <InputBtn label="X" />
    </div>
  );
};

export default TaskContainer;
