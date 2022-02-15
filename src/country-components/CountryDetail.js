import React from "react";
import { useParams } from "react-router-dom";
import useOneCountry from "./custom-hooks/useOneCountry";

const CountryDetail = () => {
  const { countryName } = useParams();
  const [err1, data] = useOneCountry(
    `https://restcountries.com/v3.1/name/${countryName}`
  );

  if (data) {
    const area = data.area;
    return <p>{countryName}</p>;
  } else {
    return <p>No country</p>;
  }
};

export default CountryDetail;
