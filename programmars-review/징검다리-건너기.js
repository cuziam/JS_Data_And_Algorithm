function solution(stones, k) {
  let min = 1;
  let max = 200000000;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
      count = stones[i] - mid <= 0 ? ++count : 0;
      if (count === k) break;
    }
    count === k ? (max = mid - 1) : (min = mid + 1);
  }
  return min;
}
