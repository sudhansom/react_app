import React, { useState } from "react";

import TextInput from "./TextInput";
import InputBtn from "./InputBtn";

const HeaderContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    console.log("clicked a btn...");
  };
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
        <InputBtn handleClick={handleClick} />
      </div>
    </div>
  );
};

export default HeaderContainer;
