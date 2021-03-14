import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  return (
    <div className={classes.}>
      <h1> Hey there, Ceased Meteor this Side </h1>
      <button onClick={props.toggled} style={style}>
        Toggle
      </button>
    </div>
  );
};
