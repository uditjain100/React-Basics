import React from "react";
import Radium from "radium";
import "./Person.css";

const person = ({ name, children, click, change }) => {
  return (
    <div className="Person">
      <h1 onClick={click}>How you doing {name}</h1>
      <p>{children}</p>
      <input onChange={change} value={name} />
    </div>
  );
};

export default Radium(person);
