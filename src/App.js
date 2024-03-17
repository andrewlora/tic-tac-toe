import "./App.css";
import Square from "./components/Square/Square";

const App = () => {
  const handleSquareClick = (event) => {
    console.log(event.target.getAttribute("data-index"));
  };

  const drawBoard = () => {
    let keySquares = 0;
    const rows = [1, 2, 3].map((row) => {
      const squares = [1, 2, 3].map(() => {
        keySquares++;
        return (
          <Square
            key={keySquares}
            dataIndex={keySquares}
            onClick={handleSquareClick}
          />
        );
      });
      return (
        <div key={row} className="row">
          {squares}
        </div>
      );
    });
    return rows;
  };
  let board = drawBoard();

  return (
    <div className="App">
      <div className="wrapper">{board}</div>
    </div>
  );
};

export default App;
