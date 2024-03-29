import React from "react";
import './Header.css';
const header = props => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default header;
