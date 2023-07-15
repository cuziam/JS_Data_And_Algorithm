function solution(board) {
  // 좌상단에서 부터 순회할 것을 생각하고 만듬.
  const count = 0;
  const shapePos = [
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [1, 0],
      [2, 0],
      [2, -1],
    ],
    [
      [1, 0],
      [2, 0],
      [2, 1],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [1, 0],
      [1, -1],
      [1, 1],
    ],
  ];
  function canBreak(i, j, shapeArr) {
    if (board[i][j] === 0) return false;
    return shapeArr.some((shape, type) =>
      shape.every(([dx, dy]) => {
        const newRow = i + dx;
        const newCol = j + dy;
        return (
          newRow >= 0 &&
          newRow < board.length &&
          newCol >= 0 &&
          newCol < board[0].length &&
          board[i][j] === board[newRow][newCol]
        );
      })
    );
  }
  // 블록을 하나씩 push down하고 나서, 이게 canBreak를 통과하는지 확인한다.
  // 블록의 원소는 0이 되면 안된다. 한 번 pushDown했을 때 부술 것이 없다면 루프 종료.
  const operationFlag = true;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (canBreak(row, col, shapePos) === true) {
        console.log(row, col);
      }
    }
  }
}
solution([
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 5],
  [0, 0, 0, 0, 3, 0, 4, 0, 0, 5],
  [0, 0, 0, 2, 3, 0, 0, 0, 5, 5],
  [1, 2, 2, 2, 3, 3, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
]);
