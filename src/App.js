import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import TodoPage from "./components/TodoPage";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const handleCount = (value) => {
    setCount(count + value);
  };
  const todoHandler = (newTask) => {
    const newTodos = [...todos, newTask];
    setTodos(newTodos);
  };
  console.log("list of todos::", todos);
  return (
    <div className="App">
      <Counter count={count} handleCount={handleCount} />
      <TodoPage todoHandler={todoHandler} />
    </div>
  );
}

export default App;
