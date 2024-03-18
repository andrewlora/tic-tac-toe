function getSquares() {
  let squares = [];
  for (let i = 0; i < 9; i++) {
    squares[i] = null;
  }
  return squares;
}
let squares = getSquares();
function getBoard() {
  let board = [];
  let ids = 0;
  for (let row = 0; row < 3; row++) {
    let columns = [];
    for (let column = 0; column < 3; column++) {
      columns.push({ id: ids });
      ids++;
    }
    board[row] = columns;
  }
  return board;
}
let board = getBoard();

function getStatusBoard(squares, turnX) {
  let nextPlayer = turnX ? "X" : "O";
  let lastPlayer = !turnX ? "X" : "O";
  let fullStatus = {
    message: "Next player: " + nextPlayer,
    win: false,
  };
  let winTable = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];

  winTable.forEach((item) => {
    const [a, b, c] = item;
    if (
      squares[a] &&
      squares[a] === lastPlayer &&
      squares[b] === lastPlayer &&
      squares[c] === lastPlayer
    ) {
      fullStatus.win = true;
      fullStatus.message = "Winner: " + lastPlayer;
      return;
    }
  });
  return fullStatus;
}

module.exports = {
  board,
  squares,
  getStatusBoard,
};
