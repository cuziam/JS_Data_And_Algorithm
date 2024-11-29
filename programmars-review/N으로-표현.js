function solution(N, number) {
  if (N === number) return 1;

  const dp = Array.from({ length: 9 }, () => new Set()); // dp[i]: N을 i번 사용해 만들 수 있는 값의 집합
  dp[1].add(N); // N을 1번 사용했을 때는 N 자신만 가능

  for (let i = 2; i <= 8; i++) {
    // i번 사용한 경우
    dp[i].add(Number(String(N).repeat(i))); // N을 i번 결합한 값 추가

    for (let j = 1; j < i; j++) {
      // j번 사용한 경우와 (i-j)번 사용한 경우의 결과를 연산
      for (const val1 of dp[j]) {
        for (const val2 of dp[i - j]) {
          dp[i].add(val1 + val2); // 덧셈
          dp[i].add(val1 - val2); // 뺄셈
          dp[i].add(val1 * val2); // 곱셈
          if (val2 !== 0) dp[i].add(Math.floor(val1 / val2)); // 나눗셈 (0으로 나누기 방지)
        }
      }
    }

    // number가 dp[i]에 포함되어 있으면 최소 횟수 반환
    if (dp[i].has(number)) return i;
  }

  return -1; // 8번 사용해도 만들 수 없는 경우
}
