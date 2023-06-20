// 인접행렬을 이용한 DFS
function solution(n, computers) {
  let result = 0;
  const visited = {};
  function dfs(vertex) {
    visited[vertex] = true;
    for (const edge in computers[vertex]) {
      if (computers[vertex][edge] === 1 && !visited[edge]) {
        dfs(edge);
      }
    }
  }
  for (const vertex in computers) {
    if (!visited[vertex]) {
      dfs(vertex);
      result++;
    }
  }
  return result;
}
solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
