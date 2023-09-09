function solution(N, A, B) {
  let round = 0;

  while (A !== B) {
    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);
    round++;
  }

  return round;
}
