function solution(n, results) {
  const table = Array.from({ length: n }, () => Array(n).fill(null));
  // i행에 있는 선수가 j열에 있는 선수를 이기면 true아니면 false
  results.forEach(result => {
    const winnerIdx = result[0] - 1;
    const loserIdx = result[1] - 1;
    table[winnerIdx][loserIdx] = true;
    table[loserIdx][winnerIdx] = false;
  });
  // 결과 전파(플로이드 워셜)
  for (let h = 0; h < n; h++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (table[i][h] && table[h][j]) {
          table[i][j] = true;
          table[j][i] = false;
        }
      }
    }
  }
  return table.reduce((acc, cur) => {
    acc += cur.filter(opponent => opponent !== null).length === n - 1 ? 1 : 0;
    return acc;
  }, 0);
}
