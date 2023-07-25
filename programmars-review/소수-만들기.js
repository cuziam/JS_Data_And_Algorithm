function getCombinations(array, size) {
  const result = [];
  function combination(start, depth, resultSoFar) {
    if (depth === size) {
      result.push([...resultSoFar]);
      return;
    }
    for (let i = start; i < array.length; ++i) {
      combination(i + 1, depth + 1, resultSoFar.concat(array[i]));
    }
  }
  combination(0, 0, []);
  return result;
}
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(nums) {
  const combArr = getCombinations(nums, 3);
  return combArr.reduce((acc, comb) => {
    const total = comb.reduce((acc2, num) => acc2 + num, 0);
    return acc + (isPrime(total) ? 1 : 0);
  }, 0);
}
