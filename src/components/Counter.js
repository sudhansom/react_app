import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import Display from "./Display";
import Button from "./Button";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  //const [count, setCount] = useState(0);

  const handleCount = (value) => {
    dispatch(value());
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
