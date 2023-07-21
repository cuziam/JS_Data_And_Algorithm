function solution(n, edge) {
  const adjacencyList = Array.from({ length: n + 1 }, () => []);
  const distance = new Array(n + 1).fill(-1);
  distance[1] = 0;
  // 인접리스트 만들기
  edge.forEach(info => {
    adjacencyList[info[0]].push(info[1]);
    adjacencyList[info[1]].push(info[0]);
  });
  // bfs
  const queue = [1];
  while (queue.length) {
    const current = queue.shift();
    for (let i = 0; i < adjacencyList[current].length; i++) {
      const next = adjacencyList[current][i];
      if (distance[next] === -1) {
        distance[next] = distance[current] + 1;
        queue.push(next);
      }
    }
  }
  // 가장 멀리 떨어진 노드가 몇 개인지 구하기
  const maxDistance = Math.max(...distance);
  return distance.reduce((acc, cur) => (cur === maxDistance ? acc + 1 : acc), 0);
}
