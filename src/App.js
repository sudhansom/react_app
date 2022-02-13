import React from "react";

import "./App.css";
// import Counter from "./components/Counter";
// import TodoPage from "./components/TodoPage";
import Home from "./country-components/Home";

// hooks
import useAllCountries from "./country-components/custom-hooks/useAllCountries";

function App() {
  const [err, data] = useAllCountries("https://restcountries.com/v2/all");

  return (
    <div className="App">
      <Home data={data} />
    </div>
  );
}

export default App;
