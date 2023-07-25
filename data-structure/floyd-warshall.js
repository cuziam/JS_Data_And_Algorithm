function getTable(fares, n) {
  const table = Array.from({ length: n }, () => new Array(n)).fill(Infinity);
  table.forEach((vertex, idx) => {
    vertex[idx][idx] = 0;
  });
  fares.forEach(edge => {
    const [start, end, weight] = edge;
    table[start][end] = weight;
    table[end][start] = weight;
  });
  return table;
}
function solution(n, s, a, b, fares) {
  console.log(getTable(fares, n));
}

solution(6, 4, 6, 2, [
  [4, 1, 10],
  [3, 5, 24],
  [5, 6, 2],
  [3, 1, 41],
  [5, 1, 24],
  [4, 6, 50],
  [2, 4, 66],
  [2, 3, 22],
  [1, 6, 25],
]);
