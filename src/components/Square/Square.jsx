import React from "react";
import "./Square.css";
const Square = ({ onClick, dataIndex, value }) => {
  return (
    <div className="square">
      <button data-index={dataIndex} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Square;
