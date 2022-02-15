import React, { useState, useEffect } from "react";
import axios from "axios";

const useOneCountry = (url) => {
  const [data, setData] = useState([]);
  const [err, setError] = useState();

  useEffect(() => {
    try {
      const fetchCountries = async (url) => {
        const result = await axios.get(url);
        console.log("in custom hook one Country:", result);
        setData(result.data[0]);
      };
      fetchCountries(url);
    } catch (err) {
      setError(err);
    }
  }, [err]);

  return [err, data];
};

export default useOneCountry;
