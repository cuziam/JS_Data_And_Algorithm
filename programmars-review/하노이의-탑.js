function solution(n) {
  const result = [];
  function hanoi(n, from = 1, by = 2, to = 3) {
    if (n === 1) {
      result.push([from, to]); // 원반이 하나일 경우 이동
      return;
    }
    hanoi(n - 1, from, to, by);
    result.push([from, to]);
    hanoi(n - 1, by, from, to);
  }
  hanoi(n);
  return result;
}
