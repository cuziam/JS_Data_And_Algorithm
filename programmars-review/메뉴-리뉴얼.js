function getSubsets(order) {
  const subsets = [];
  const n = order.length;
  for (let i = 0; i < 1 << n; i++) {
    let subset = '';
    let count = 0;
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        subset += order[j];
        count++;
      }
    }
    if (count >= 2) {
      subsets.push(subset);
    }
  }
  return subsets;
}

function getCombination(arr, r) {
  const result = [];
  // base case
  if (r === 1) {
    return arr.map(ele => [ele]);
  }
  // recursion
  arr.forEach((val, idx, self) => {
    const fixed = val;
    const restArr = self.slice(idx + 1);
    const combinations = getCombination(restArr, r - 1);
    const attached = combinations.map(combination => [fixed, ...combination].sort().join(''));
    result.push(...attached);
  });
  return result;
}

function solution(orders, course) {
  const result = [];
  course.forEach(menuNum => {
    const combCounter = {};
    orders.forEach(order => {
      const combs = getCombination(order.split(''), menuNum); // 메뉴 수 별로 조합 얻기
      combs.forEach(comb => {
        // 조합 별 빈도 수 얻기
        combCounter[comb] = (combCounter[comb] || 0) + 1;
      });
    });
    const max = Math.max(...Object.values(combCounter)); // 빈도 수 중 최댓값 얻기
    for (const comb in combCounter) {
      // 빈도 수가 최대값과 일치하는 조합을 정답배열에 추가
      if (max >= 2 && combCounter[comb] === max) result.push(comb);
    }
  });
  return result.sort();
}
