// m=col, n=row
function solution(m, n, puddles) {
  const map = Array.from({ length: n }, () => Array(m).fill(0));
  puddles.forEach(pos => {
    map[pos[1] - 1][pos[0] - 1] = -1;
  });

  map[0][0] = 1;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if ((i === 0 && j === 0) || map[i][j] === -1) continue;
      const up = i === 0 || map[i - 1][j] === -1 ? 0 : map[i - 1][j];
      const left = j === 0 || map[i][j - 1] === -1 ? 0 : map[i][j - 1];
      map[i][j] = (up + left) % 1000000007;
    }
  }
  return map[n - 1][m - 1];
}

/*
각 위치로 갈 때 갈 수 있는 가짓수를 구해야한다.

어차피 오른쪽이나 아래쪽으로 움직이면 최단거리로 간다.
따라서 어떤 노드가 가질 수 있는 경로의 갯수는 위와 왼쪽의 합이다.
경계선에 있는 값들은 위랑 아래가 있는지 검증하고 있는 것만 합해야 한다.
아니면 없는 건 0이라고 치고 더하면 된다.

연못은 가짓수가 0이라고 치면 된다.

지도는 puddles로 주어진다.

*/
function solution(m, n, puddles) {
  //메모리 만들기
  const mem = Array.from({ length: n }, () => Array(m).fill(null));
  puddles.forEach(([col, row], _) => {
    mem[row - 1][col - 1] = 0;
  });
  mem[0][0] = 1; //시작지점의 경로값 초기화

  //puddles순회하면서 mem채워나가기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mem[i][j] === 0) continue;
      if (j - 1 >= 0) mem[i][j] += mem[i][j - 1] % 1000000007; //left값 더하기
      if (i - 1 >= 0) mem[i][j] += mem[i - 1][j] % 1000000007; //up값 더하기
    }
  }

  //mem[n-1][m-1]반환
  return mem[n - 1][m - 1] % 1000000007;
}
