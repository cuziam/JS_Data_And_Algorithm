// 재귀방식으로 구현한 조합
function combination(arr, r) {
  const result = [];
  // base case: r이 1이 되면 중단
  if (r === 1) {
    return arr.map(val => [val]);
  }
  arr.forEach((val, idx, self) => {
    const fixed = val; // fixed: 현재 선택한 값
    const restArr = self.slice(idx + 1); // 현재 원소를 하나를 선택했으면 현재 원소를 제외한 나머지 원소에서 선택해야 한다.
    const combinations = getCombinations(restArr, r - 1); // 나머지 원소들에서 조합을 r-1만큼 선택해야 한다.
    const attached = combinations.map(combination => [fixed, ...combination]); // 나머지 원소에서 r-1개를 선택한 결과에다가 현재 선택한 원소를 붙여줘야한다.
    result.push(...attached);
  });
  return result;
}
