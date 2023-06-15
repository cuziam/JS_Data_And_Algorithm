/**
1. DFS나 BFS로 순회
    
    -지금 주어진 맵은 일종의 그래프로 되어있다.
    -각 격자는 일종의 노드로 취급할 수 있다. 숫자 혹은 X는 노드의 값으로 취급할 수 있다.
    -각 노드가 연결되는 곳은 상하좌우이다.
    일단 DFS를 이용해서 로직을 떠올려보면
    
    1. Maps 배열 요소를 선형순회하기
    2. 현재 위치가 X인 경우에는 그냥 넘어가고, X가 아니라면 현재 위치를 방문처리하고 상하좌우로 recursive DFS를 수행한다.
    3. recursive DFS를 하다가 끝 노드(base case)에 다다르면 Maps에서 자신의 위치를 X로 만든 후 값을 반환하기 시작한다.
    4. 그 값들을 모두 더하면 하나의 섬이 가지는 총 식량을 얻을 수 있다.
    5. result에 그 식량값을 push한다.
 */
function solution(maps) {
  const result = [];
  // maps의 원소들에 대해 row,column값을 이용할 수 있도록 중첩 배열 형태로 변환
  const newMaps = maps.map(str => str.split(''));
  // 재귀방식으로 DFS를 실행하는 헬퍼함수 정의
  function dfs(row, col) {
    // 1. base case
    // 순회 시에 지도의 범위를 벗어나는 경우나 X인 경우 0을 반환
    if (row < 0 || col < 0 || row >= newMaps.length || col >= newMaps[0].length || newMaps[row][col] === 'X') {
      return 0;
    }
    const sum = parseInt(newMaps[row][col], 10);
    newMaps[row][col] = 'X';
    // 2. return the function which input is different.
    return sum + dfs(row - 1, col) + dfs(row + 1, col) + dfs(row, col - 1) + dfs(row, col + 1);
  }
  for (let row = 0; row < newMaps.length; row++) {
    for (let col = 0; col < newMaps[row].length; col++) {
      if (newMaps[row][col] !== 'X') result.push(dfs(row, col));
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}
console.log(solution(['X591X', 'X1X5X', 'X231X', '1XXX1']));
