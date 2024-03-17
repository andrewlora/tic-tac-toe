import React from "react";
import "./Square.css";
const Square = ({ onClick, dataIndex }) => {
  return (
    <div className="square">
      <button data-index={dataIndex} onClick={onClick}></button>
    </div>
  );
};

export default Square;
