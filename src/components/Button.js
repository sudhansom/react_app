import React from "react";

import { increment, decrement } from "./redux/action";

function Button({ handleCount, label }) {
  let operation = label;
  let value = decrement;
  if (operation === "Add 1") {
    value = increment;
  }

  return <button onClick={() => handleCount(value)}>{label}</button>;
}

export default Button;
