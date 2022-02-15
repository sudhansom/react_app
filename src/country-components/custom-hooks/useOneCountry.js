import React, { useState, useEffect } from "react";
import axios from "axios";

const useOneCountry = (oneCountry_url) => {
  const [data, setData] = useState([]);
  const [err, setError] = useState();

  useEffect(() => {
    try {
      const fetchCountries = async (oneCountry_url) => {
        const result = await axios.get(oneCountry_url);
        console.log("in custom hook one Country:", result);
        setData(result.data[0]);
      };
      fetchCountries(oneCountry_url);
    } catch (err) {
      setError(err);
    }
  }, [err]);

  return [err, data];
};

export default useOneCountry;
