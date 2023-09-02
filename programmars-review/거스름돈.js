// 어떤 금액을 만드는 경우의 수는
// money의 각 금액을 뺀 값에 대한 경우의 수들을 더해주면 됨.
function solution(n, money) {
  const mem = Array(n + 1).fill(0);
  mem[0] = 1;
  money.forEach(curMoney => {
    for (let i = curMoney; i <= n; i++) {
      mem[i] += mem[i - curMoney] % 1000000007;
    }
  });
  return mem[n];
}
