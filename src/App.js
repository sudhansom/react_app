import { useState } from "react";

import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <Counter count={count} handleCount={handleCount} />
    </div>
  );
}

export default App;
