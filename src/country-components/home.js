import React from "react";

const home = ({ data }) => {
  return (
    <div>
      <p>{data.length ? data[0].name : "nothing"}</p>
    </div>
  );
};

export default home;
