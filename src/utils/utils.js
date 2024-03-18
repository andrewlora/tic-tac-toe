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

module.exports = {
  board,
  squares,
};
