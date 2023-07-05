function solution(n, left, right) {
  // step1
  const arr = Array.from({ length: n }, () => new Array(n));
  // step2
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = Math.max(i + 1, j + 1);
    }
  }
  // step3,4
  return arr.flat().slice(left, right + 1);
}

function solution2(n, left, right) {
  const result = [];
  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n) + 1;
    const col = (i % n) + 1;
    result.push(Math.max(row, col));
  }
  return result;
}
