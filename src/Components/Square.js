import React from "react";
import "./Square.css";

const Square = ({ value }) => {
  return (
    <div>
      <button className="square">{value}</button>
    </div>
  );
};

export default Square;
