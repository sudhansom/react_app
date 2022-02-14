import React from "react";

const home = ({ data }) => {
  if (data.length > 0) {
    return data.map((country) => <p>{country.name}</p>);
  }
  return <p>Unexpected error occurred....</p>;
};

export default home;
