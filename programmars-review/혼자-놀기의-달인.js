function solution(cards) {
  // 인접리스트 만들기
  const adjacencyList = {};
  cards.forEach((cardNum, idx) => {
    adjacencyList[idx + 1] = [cardNum];
  });

  // dfs로 경로를 얻고, 경로의 길이를 배열에 저장한다.
  const steps = [];
  const visited = {};
  function dfs(vertex, path) {
    if (!vertex) return path;
    path.push(vertex);
    visited[vertex] = true;
    adjacencyList[vertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        return dfs(neighbor, path);
      }
    });
    return path.length;
  }
  cards.forEach((ele, idx) => {
    if (!visited[idx + 1]) steps.push(dfs(idx + 1, []));
  });

  // 배열을 내림차순으로 정렬한 후에 가장 큰 두 개의 값을 곱해서 반환한다.
  // 만약 배열의 길이가 2보다 작으면 0을 반환한다.
  steps.sort((a, b) => b - a);
  return steps.length < 2 ? 0 : steps[0] * steps[1];
}
solution([8, 6, 3, 7, 2, 5, 1, 4]);
