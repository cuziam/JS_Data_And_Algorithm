function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map(value => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // fixed 이후의 부분을 slice
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대한 조합
    const attached = combinations.map(combination => [fixed, ...combination]); // 돌아온 조합에 대해 원래의 요소를 붙임
    results.push(...attached);
  });

  return results;
}

function solution(numbers) {
  const set = new Set();
  const combinations = getCombinations(numbers, 2);
  combinations.forEach(([a, b]) => {
    set.add(a + b);
  });
  return Array.from(set).sort((a, b) => a - b);
}
