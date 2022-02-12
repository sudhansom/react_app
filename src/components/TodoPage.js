import React, { useState } from "react";
import TaskContainer from "./TaskContainer";

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
      {todos.map((todo) => {
        return <TaskContainer key={todo} title={todo}></TaskContainer>;
      })}
    </div>
  );
};

export default TodoPage;
