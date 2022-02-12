import React, { useState } from "react";
import TaskContainer from "./TaskContainer";

import HeaderContainer from "./HeaderContainer";
import InputBtn from "./InputBtn";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const todoHandler = (newTask) => {
    const newTodos = [...todos, newTask];
    setTodos(newTodos);
  };
  const handleClick = () => {
    setTodos([]);
  };
  return (
    <div>
      <HeaderContainer todoHandler={todoHandler} />
      {todos.map((todo) => {
        return (
          <TaskContainer
            key={todo}
            setTodos={setTodos}
            todos={todos}
            title={todo}
          ></TaskContainer>
        );
      })}
      {todos.length ? (
        <InputBtn handleClick={handleClick} label="Remove All" />
      ) : (
        <></>
      )}
    </div>
  );
};

export default TodoPage;
