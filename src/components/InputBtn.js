import React from "react";

const InputBtn = ({ handleClick, label }) => {
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  );
};

export default InputBtn;
