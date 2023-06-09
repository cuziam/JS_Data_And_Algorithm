/*
1,1이 출발점
n*m이 도착점 n=width m=height
지금 문제의 경우 BFS를 이용하면 최단거리를 얻을 수 있다.
왜? DFS는 처음부터 제일 깊은 노드에 방문하지만, BFS는 같은 깊이의 것을 모두 들린 후에, 다음 깊이로 넘어가기 때문이다.

필요한 것
BFS 재귀함수와, BFS실행에 필요한 queue
연결정보를 알 수 있는 무언가
*/
function solution(maps) {
  const maxRow = maps.length;
  const maxCol = maps[0].length;
  // 큐에 시작 노드 등록
  const queue = [];
  queue.push([0, 0, 1]);
  while (queue.length > 0) {
    const currentNode = queue.shift();
    const row = currentNode[0];
    const col = currentNode[1];
    const steps = currentNode[2];
    // 유효한 노드만 사용하기
    if (row >= 0 && col >= 0 && row < maxRow && col < maxCol && maps[row][col] === 1) {
      if (row === maxRow - 1 && col === maxCol - 1) return steps;
      maps[row][col] = 0;
      queue.push([row, col + 1, steps + 1]);
      queue.push([row, col - 1, steps + 1]);
      queue.push([row + 1, col, steps + 1]);
      queue.push([row - 1, col, steps + 1]);
    }
  }
  return -1;
}

const res = solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);
console.log(res);
