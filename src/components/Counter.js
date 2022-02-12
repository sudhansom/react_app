import React, { useState } from "react";

import Header from "./Header";
import Display from "./Display";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = (value) => {
    setCount(count + value);
  };
  return (
    <div>
      <Header title="React App" />
      <Display count={count} />
      <Button handleCount={handleCount} label="Add 1" />
      <Button handleCount={handleCount} label="Minus 1" />
    </div>
  );
};

export default Counter;
