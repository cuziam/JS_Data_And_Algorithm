/**
 * 남아 있는 병의 갯수=몫+나머지
 * 남아있는 병이 a미만일 때 까지 돌림.
 * 3 2 23
 */
function solution(a, b, n) {
  let given = 0;
  let rest = n;
  while (rest >= a) {
    given += Math.floor(rest / a) * b;
    rest = Math.floor(rest / a) * b + (rest % a);
  }
  return given;
}
