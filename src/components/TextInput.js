import React from "react";

const TextInput = ({ inputValue, setInputValue, handleChange }) => {
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange}></input>
    </div>
  );
};

export default TextInput;
