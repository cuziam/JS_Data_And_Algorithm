function solution(lottos, winNums) {
  const winNumsSet = new Set(winNums);
  let maxRank = 1;
  let minRank = 7;
  for (const num of lottos) {
    if (winNumsSet.has(num)) {
      minRank--;
    } else if (!winNumsSet.has(num) && num !== 0) {
      maxRank++;
    }
  }
  maxRank = maxRank >= 6 ? 6 : maxRank;
  minRank = minRank >= 6 ? 6 : minRank;
  return [maxRank, minRank];
}
