function getInitialTable(n, fares) {
  const table = Array.from({ length: n }, () => new Array(n).fill(Infinity));
  table.forEach((vertex, idx) => {
    table[idx][idx] = 0;
  });
  fares.forEach(edge => {
    const [start, end, weight] = edge;
    table[start - 1][end - 1] = weight;
    table[end - 1][start - 1] = weight;
  });
  return table;
}

function getLastTable(table) {
  const { length } = table;
  const newTable = JSON.parse(JSON.stringify(table)); // deep copy
  for (let h = 0; h < length; h++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (newTable[i][h] + newTable[h][j] < newTable[i][j]) {
          newTable[i][j] = newTable[i][h] + newTable[h][j];
        }
      }
    }
  }
  return newTable;
}

function calculateMinFare(lastTable, s, a, b) {
  const noCarpoolFare = lastTable[s - 1][a - 1] + lastTable[s - 1][b - 1];
  return lastTable.reduce((acc, _, idx) => {
    const carpoolFare = lastTable[s - 1][idx] + lastTable[idx][a - 1] + lastTable[idx][b - 1];
    return Math.min(acc, carpoolFare);
  }, noCarpoolFare);
}

function solution(n, s, a, b, fares) {
  const initialTable = getInitialTable(n, fares);
  const lastTable = getLastTable(initialTable);
  return calculateMinFare(lastTable, s, a, b);
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
