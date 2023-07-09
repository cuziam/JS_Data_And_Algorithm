function solution(n, lost, reserve) {
  const actualLost = lost.filter(a => !reserve.includes(a));
  let actualReserve = reserve.filter(a => !lost.includes(a));
  actualLost.sort((a, b) => a - b);
  actualReserve.sort((a, b) => a - b);
  return (
    n -
    actualLost.filter(a => {
      const found = actualReserve.find(r => Math.abs(r - a) <= 1);
      if (found) {
        actualReserve = actualReserve.filter(r => r !== found);
        return false;
      }
      return true;
    }).length
  );
}
