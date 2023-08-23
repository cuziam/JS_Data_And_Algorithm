function rotate90(matrix) {
  const n = matrix.length;
  const result = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }
  return result;
}

function shift(matrix, dir) {
  matrix;
}

function solution(key, lock) {
  const n = key.length;
  const result = Array.from({ length: n * 3 }, () => Array(n * 3).fill(0));
  for (let i = n; i < n * 2; i++) {
    for (let j = n; j < n * 2; j++) {
      result[i][j] = key[i - n][j - n];
    }
  }
  console.log(result);
}

solution(
  [
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 1],
  ],
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ]
); // true
