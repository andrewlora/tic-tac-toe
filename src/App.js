import { useState } from "react";
import "./App.css";
import Square from "./components/Square/Square";
import { board, getStatusBoard, squares } from "./utils/utils";

const App = () => {
  const [squaresData, setSquaresData] = useState(squares);
  const [turnX, setTurnX] = useState(true);

  const handleSquareClick = (event) => {
    let index = Number(event.target.getAttribute("data-index"));
    if (!squaresData[index] && !statusBoard.win) {
      setSquaresData(
        squaresData.map((square, i) => {
          if (i === index) {
            return turnX ? "X" : "O";
          }
          return square;
        })
      );
      setTurnX(!turnX);
    }
  };

  const setBoard = () => {
    let rows = board.map((row, index) => {
      let squares = row.map((square) => {
        return (
          <Square
            key={square.id}
            dataIndex={square.id}
            value={squaresData[square.id]}
            onClick={handleSquareClick}
          />
        );
      });
      return (
        <div key={index} className="row">
          {squares}
        </div>
      );
    });
    return rows;
  };
  let drawBoard = setBoard();
  let statusBoard = getStatusBoard(squaresData, turnX);

  return (
    <div className="App">
      <div className="status">{statusBoard.message}</div>
      <div className="wrapper">{drawBoard}</div>
    </div>
  );
};

export default App;
