import React, { useState, useEffect } from "react";

const useAllCountries = (allCountries_url) => {
  const [data, setData] = useState([]);
  const [err, setError] = useState();

  useEffect(() => {
    try {
      const fetchCountries = async (allCountries_url) => {
        const allCountries = await fetch(allCountries_url);
        const result = await allCountries.json();
        return result;
      };
      setData(fetchCountries(allCountries_url));
    } catch (err) {
      setError(err);
    }
  }, []);

  return [err, data];
};

export default useAllCountries;
