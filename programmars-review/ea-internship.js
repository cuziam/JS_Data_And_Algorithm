function solution(v) {
  const result = [];
  const counterX = {};
  const counterY = {};

  v.forEach(([x, y]) => {
    counterX[x] = (counterX[x] || 0) + 1;
    counterY[y] = (counterY[y] || 0) + 1;
  });
  v.forEach(([x, y]) => {
    if (counterX[x] !== 2) result[0] = x;
    if (counterY[y] !== 2) result[1] = y;
  });
  return result;
}
