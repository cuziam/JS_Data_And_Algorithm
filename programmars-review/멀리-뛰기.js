// 처음 만든 방법의 문제: 2^n꼴로 경우의 수를 계산한다.
function solution(n) {
  const mem = new Array(2001);
  mem[1] = 1;
  mem[2] = 2;
  for (let i = 3; i <= n; i++) {
    mem[i] = (mem[i - 1] + mem[i - 2]) % 1234567;
  }
  return mem[n];
}
