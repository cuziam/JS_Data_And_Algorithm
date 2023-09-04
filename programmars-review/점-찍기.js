function solution(k, d) {
  let answer = 0;
  for (let x = 0; x <= d; x += k) {
    answer += Math.floor(Math.sqrt(d ** 2 - x ** 2) / k) + 1;
  }
  return answer;
}
