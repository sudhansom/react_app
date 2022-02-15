import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
// import Counter from "./components/Counter";
// import TodoPage from "./components/TodoPage";
import Home from "./country-components/Home";

// hooks
import useAllCountries from "./country-components/custom-hooks/useAllCountries";
import useOneCountry from "./country-components/custom-hooks/useOneCountry";

function App() {
  const [err, data] = useAllCountries("https://restcountries.com/v2/all");
  const [err1, data1] = useOneCountry(
    `https://restcountries.com/v3.1/name/Nepal`
  );
  console.log("Nepal: ", data1);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/">
          <h1>HOme page</h1>
        </Route>
        <Route exact path="/about">
          <h1>About page</h1>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// {data ? <Home data={data} /> : <></>}
