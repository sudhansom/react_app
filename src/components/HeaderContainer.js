import React from "react";

import TextInput from "./TextInput";
import InputBtn from "./InputBtn";

const HeaderContainer = () => {
  return (
    <div className="Header-container">
      <h1> headercontainer...</h1>
      <div className="inputsection">
        <TextInput />
        <InputBtn />
      </div>
    </div>
  );
};

export default HeaderContainer;
