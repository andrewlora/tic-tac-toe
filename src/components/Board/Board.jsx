import Square from "../../components/Square/Square";
import Status from "../../components/Status/Status";
import { board } from "../../utils/utils";
import HistoryMoves from "../HistoryMoves/HistoryMoves";

const Board = ({
  jumpTo,
  handlePlay,
  history,
  currentSquares,
  statusBoard,
}) => {
  const setBoard = () => {
    let rows = board.map((row, index) => {
      let squares = row.map((square) => {
        return (
          <Square
            key={square.id}
            dataIndex={square.id}
            value={currentSquares[square.id]}
            onPlay={handlePlay}
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

  return (
    <div className="board">
      <Status message={statusBoard.message} />
      {drawBoard}
      <HistoryMoves history={history} jumpTo={jumpTo} />
    </div>
  );
};

export default Board;
