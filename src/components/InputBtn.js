import React from "react";
import MButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const InputBtn = ({ handleClick, label }) => {
  const useStyle = makeStyles({
    buttonStyle: {
      color: "green",
      background: "lightblue",
    },
  });
  const classes = useStyle();
  return (
    <div>
      <MButton
        variant="contained"
        onClick={handleClick}
        className={classes.buttonStyle}
      >
        {label}
      </MButton>
    </div>
  );
};

export default InputBtn;
