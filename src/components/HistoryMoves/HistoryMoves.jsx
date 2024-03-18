import React from "react";

const HistoryMoves = ({ history, jumpTo }) => {
  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="game-info">
      <ol>{moves}</ol>
    </div>
  );
};

export default HistoryMoves;
