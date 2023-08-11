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
