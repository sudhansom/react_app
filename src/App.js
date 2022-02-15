import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
// import Counter from "./components/Counter";
// import TodoPage from "./components/TodoPage";
import Home from "./country-components/Home";
import CountryDetail from "./country-components/CountryDetail";

// hooks
import useAllCountries from "./country-components/custom-hooks/useAllCountries";

function App() {
  const [err, data] = useAllCountries("https://restcountries.com/v2/all");

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home data={data}></Home>}></Route>
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
