import React from "react";

const home = ({ data }) => {
  console.log("data", data);
  if (data.length > 0) {
    return <p>success</p>;
  }
  return <p>failed to load countries</p>;
};

export default home;
