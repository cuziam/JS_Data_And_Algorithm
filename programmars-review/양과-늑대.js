function solution(info, edges) {
  // 인접리스트 만들기
  const graph = Array.from({ length: info.length }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
  }
  let answer = 0;
  // 방문했거나, 늑대가 양보다 많거나 같으면 방문하지 않는다.
  const dfs = (node, sheep, wolf, possibleNodes) => {
    // basecase
    if (info[node] === 0) sheep++;
    else wolf++;
    answer = Math.max(answer, sheep);
    if (wolf >= sheep) return;
    // different input
    const possibles = [...possibleNodes, ...graph[node]];
    possibles.splice(possibles.indexOf(node), 1);
    for (const next of possibles) {
      dfs(next, sheep, wolf, possibles);
    }
  };
  dfs(0, 0, 0, [0]);
  return answer;
}
console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
);
