import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import { getStatusBoard, squares } from "./utils/utils";
const App = () => {
  const [history, setHistory] = useState(squares);
  const [currentMove, setCurrentMove] = useState(0);
  const turnX = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (event) => {
    if (!statusBoard.win) {
      let index = Number(event.target.getAttribute("data-index"));
      const nextSquares = currentSquares.slice();
      turnX ? (nextSquares[index] = "X") : (nextSquares[index] = "O");
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  let statusBoard = getStatusBoard(currentSquares, turnX);
  return (
    <div className="App">
      <Board
        handlePlay={handlePlay}
        jumpTo={jumpTo}
        currentSquares={currentSquares}
        history={history}
        statusBoard={statusBoard}
      />
    </div>
  );
};

export default App;
