function isPrimeNum(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  let result = 0;
  const uniqueNumbers = new Set();
  // 모든 경우 탐색함
  function dfs(restStr, prevStr = '') {
    // 재귀함수 종료 조건
    if (restStr.length === 0) {
      return;
    }
    for (const char of restStr) {
      const curStr = prevStr + char;
      if (!uniqueNumbers.has(Number(curStr))) {
        uniqueNumbers.add(Number(curStr));
      }
      dfs(restStr.replace(char, ''), curStr);
    }
  }
  dfs(numbers);
  uniqueNumbers.forEach(number => {
    if (isPrimeNum(number)) {
      result++;
    }
  });
  return result;
}
