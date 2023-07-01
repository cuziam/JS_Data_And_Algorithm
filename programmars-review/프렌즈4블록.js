function solution(m, n, board) {
  board = board.map(v => v.split(''));
  // start는 board[i][j]꼴로 주어진다고 가정.
  function dfs(start, i, j) {
    if (
      start === board[i][j] &&
      start === board[i + 1][j] &&
      start === board[i][j + 1] &&
      start === board[i + 1][j + 1]
    ) {
      // set element to zero.
      return 1 + dfs(start, i + 1, j) + dfs(start, i, j + 1) + dfs(start, i + 1, j + 1);
    }
    board[i][j] = 0;
    return 1;
  }
  let count = 0;
  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[0].length - 1; j++) {
      if (board[i][j] === board[i + 1][j] && board[i][j] === board[i][j + 1] && board[i][j] === board[i + 1][j + 1]) {
        count += dfs(board[i][j], i, j);
      }
    }
  }
  console.log(count);
}
solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']); // 15
