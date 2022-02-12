import React from "react";

function Button({ handleCount, label }) {
  let operation = label;
  let value = -1;
  if (operation === "Add 1") {
    value = 1;
  }

  return <button onClick={() => handleCount(value)}>{label}</button>;
}

export default Button;
