import React from "react";
const Square = ({ onPlay, dataIndex, value }) => {
  return (
    <div className="square">
      <button data-index={dataIndex} onClick={onPlay}>
        {value}
      </button>
    </div>
  );
};

export default Square;
