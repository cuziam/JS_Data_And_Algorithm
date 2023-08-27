function solution(n, s) {
  const answer = [];
  const quotient = Math.floor(s / n);
  const mod = s % n;
  if (quotient === 0) return [-1];
  for (let count = 1; count <= n - mod; count++) {
    answer.push(quotient);
  }
  for (let count = 1; count <= mod; count++) {
    answer.push(quotient + 1);
  }
  return answer;
}
