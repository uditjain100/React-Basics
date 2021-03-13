import React from "react";
import classes from "./Person.css";

const person = ({ name, children, click, change }) => {
  // const rnd = Math.random();
  // if (rnd > 0.7) throw new Error("Something went Wrong");

  return (
    <div className={classes.Person}>
      <h1 onClick={click}>How you doing {name}</h1>
      <p>{children}</p>
      <input onChange={change} value={name} />
    </div>
  );
};

export default person;
