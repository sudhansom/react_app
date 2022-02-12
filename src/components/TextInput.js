import React from "react";
import { TextField } from "@material-ui/core";

const TextInput = ({ inputValue, setInputValue, handleChange }) => {
  return (
    <div>
      <TextField
        type="text"
        value={inputValue}
        onChange={handleChange}
      ></TextField>
    </div>
  );
};

export default TextInput;
