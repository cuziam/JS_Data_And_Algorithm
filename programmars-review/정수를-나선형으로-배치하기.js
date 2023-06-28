function solution(n) {
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const map = Array.from(Array(n), () => Array(n).fill(0));
  let row = 0;
  let col = 0;
  let curDir = 0;
  for (let i = 1; i <= n ** 2; i++) {
    map[row][col] = i;
    let nextRow = row + dir[curDir][0];
    let nextCol = col + dir[curDir][1];
    if (nextRow < 0 || nextCol < 0 || nextRow >= n || nextCol >= n || map[nextRow][nextCol] !== 0) {
      curDir = (curDir + 1) % 4;
      nextRow = row + dir[curDir][0];
      nextCol = col + dir[curDir][1];
    }
    row = nextRow;
    col = nextCol;
  }
  return map;
}
solution(5);
