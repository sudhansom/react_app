import React from "react";

const home = ({ data }) => {
  if (data.length > 0) {
    return data.map((country) => <p>{country.name}</p>);
  }
  return <p>failed to load countries</p>;
};

export default home;
