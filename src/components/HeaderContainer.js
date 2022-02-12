import React, { useState } from "react";

import TextInput from "./TextInput";
import InputBtn from "./InputBtn";

const HeaderContainer = ({ todoHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="Header-container">
      <h1> headercontainer...</h1>
      <div className="inputsection">
        <TextInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleChange={handleChange}
        />
        <InputBtn
          handleClick={() => {
            todoHandler(inputValue);
            setInputValue("");
          }}
        />
      </div>
    </div>
  );
};

export default HeaderContainer;
