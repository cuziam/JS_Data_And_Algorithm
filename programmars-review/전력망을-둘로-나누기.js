function solution(n, wires) {
  // 인접리스트 정의
  const adList = {};
  wires.forEach(([start, end], _) => {
    if (!adList[start]) adList[start] = [];
    if (!adList[end]) adList[end] = [];
    adList[start].push(end);
    adList[end].push(start);
  });
  // 정점 갯수 정의
  const numOfVertex = Object.keys(adList).length;

  // 각 연결을 끊으면서 bfs를 하여 계산
  const differences = wires.map(([start, end], _) => {
    const curAdList = { ...adList };
    // 인접리스트 최신화
    curAdList[start] = curAdList[start].filter(ele => ele !== end);
    curAdList[end] = curAdList[end].filter(ele => ele !== start);

    // 아무곳에서 순회시작
    const queue = [start];
    const visited = {};
    let count = 0;
    while (queue.length > 0) {
      const cur = queue.shift();
      visited[cur] = true;
      count++;
      curAdList[cur].forEach(neighbor => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      });
    }
    return Math.abs(numOfVertex - 2 * count);
  });
  return Math.min(...differences);
}
