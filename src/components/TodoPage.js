import React, { useState } from "react";

import HeaderContainer from "./HeaderContainer";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const todoHandler = (newTask) => {
    const newTodos = [...todos, newTask];
    setTodos(newTodos);
  };
  console.log("list of todos::", todos);
  return (
    <div>
      <HeaderContainer todoHandler={todoHandler} />
    </div>
  );
};

export default TodoPage;
