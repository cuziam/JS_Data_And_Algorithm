/**
 나는 이 문제를 규칙을 관찰해서 풀고 싶었다.
 */
function solution(n) {
  const direction = [
    [1, 0], // 남서쪽 방향
    [0, 1], // 동쪽 방향
    [-1, -1], // 북서쪽 방향
  ];
  const pyramid = Array.from({ length: n }, (val, index) => Array(index + 1).fill(0));
  const maxNum = ((1 + n) * n) / 2;
  let row = 0;
  let col = 0;
  let curDir = 0;
  for (let i = 0; i < maxNum; i++) {
    pyramid[row][col] = i + 1;
    let nextRow = row + direction[curDir][0];
    let nextCol = col + direction[curDir][1];
    if (nextRow < 0 || nextCol < 0 || nextRow >= n || nextCol >= n || pyramid[nextRow][nextCol] !== 0) {
      curDir = (curDir + 1) % 3;
      nextRow = row + direction[curDir][0];
      nextCol = col + direction[curDir][1];
    }
    row = nextRow;
    col = nextCol;
  }
  return pyramid.flat();
}
console.log(solution(5));
