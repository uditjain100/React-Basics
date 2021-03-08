import React from "react";
import classes from "./Person";

const person = ({ name, children, click, change }) => {
  return (
    <div className={classes.Person}>
      <h1 onClick={click}>How you doing {name}</h1>
      <p>{children}</p>
      <input onChange={change} value={name} />
    </div>
  );
};

export default person;
