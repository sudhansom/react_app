import React, { useState, useEffect } from "react";

const useAllCountries = (country_url) => {
  const [data, setData] = useState([]);
  const [err, setError] = useState();

  useEffect(() => {
    try {
      const fetchCountries = async (country_url) => {
        const allCountries = await fetch(country_url);
        const result = await allCountries.json();
        return result;
      };
      setData(fetchCountries(country_url));
    } catch (err) {
      setError(err);
    }
  }, []);

  return [err, data];
};

export default useAllCountries;
