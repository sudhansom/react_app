import React, { useState, useEffect } from "react";
import axios from "axios";

const useAllCountries = (url) => {
  const [data, setData] = useState([]);
  const [err, setError] = useState();

  useEffect(() => {
    try {
      const fetchCountries = async (url) => {
        const result = await axios.get(url);
        console.log("in custom hook:", result);
        setData(result.data);
      };
      fetchCountries(url);
    } catch (err) {
      setError(err);
    }
  }, [url]);

  return [err, data];
};

export default useAllCountries;
