import React, { useState, useEffect } from "react";
import axios from "axios";

const useAllCountries = (allCountries_url) => {
  const [data, setData] = useState([]);
  const [err, setError] = useState();

  useEffect(() => {
    try {
      const fetchCountries = async (allCountries_url) => {
        const result = await axios.get(allCountries_url);
        console.log("in custom hook:", result);
        setData(result.data);
      };
      fetchCountries(allCountries_url);
    } catch (err) {
      setError(err);
    }
  }, [allCountries_url]);

  return [err, data];
};

export default useAllCountries;
