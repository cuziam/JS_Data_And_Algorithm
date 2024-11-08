function solution(k, dungeons) {
  let maxCount = 0;

  function dfs(rest, count, visited) {
    maxCount = Math.max(maxCount, count);

    // visited 기록을 넘겨주지 않으면, dfs를 여러번 수행할 수가 없다.
    // 즉 완전탐색을 하지 않는다.
    // 나는 정점 당 한번씩만 방문하는 방식을 썼기 때문에, 테스트케이스가 통과되지 않았다.
    dungeons.forEach((dungeon, idx) => {
      if (!visited[idx] && rest >= dungeon[0]) {
        const newVisited = [...visited];
        newVisited[idx] = true;
        dfs(rest - dungeon[1], count + 1, newVisited);
      }
    });
  }

  dfs(k, 0, Array(dungeons.length).fill(false));
  return maxCount;
}
