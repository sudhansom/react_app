import React from "react";

import "./App.css";
import Counter from "./components/Counter";
import TodoPage from "./components/TodoPage";

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoPage />
    </div>
  );
}

export default App;
