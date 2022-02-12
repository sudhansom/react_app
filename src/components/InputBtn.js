import React from "react";

const InputBtn = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default InputBtn;
