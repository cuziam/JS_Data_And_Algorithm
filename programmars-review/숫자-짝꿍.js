function solution(x, y) {
  const counterX = Array(10).fill(0);
  const counterY = Array(10).fill(0);
  const result = [];
  for (const value of x) {
    counterX[value]++;
  }
  for (const value of y) {
    counterY[value]++;
  }
  for (let i = 9; i >= 0; i--) {
    let count = Math.min(counterX[i], counterY[i]);
    if (i === 0 && count > 0 && result.length === 0) {
      return '0';
    }
    if (count !== 0) {
      while (count !== 0) {
        result.push(i);
        count--;
      }
    }
  }
  return result.length === 0 ? '-1' : result.join('');
}
console.log(solution('100', '2345'));
console.log(solution('100', '203045'));
