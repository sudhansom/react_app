import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
// import Counter from "./components/Counter";
// import TodoPage from "./components/TodoPage";

import Home from "./country-components/Home";
import CountryDetail from "./country-components/CountryDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route
          exact
          path="/country/:countryName"
          element={<CountryDetail></CountryDetail>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

// {data ? <Home data={data} /> : <></>}
