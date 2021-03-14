import React from "react";

const cockpit = (props) => {
  return (
    <div>
      <h1> Hey there, Ceased Meteor this Side </h1>
      <button onClick={props.toggled} style={style}>
        Toggle
      </button>
    </div>
  );
};
