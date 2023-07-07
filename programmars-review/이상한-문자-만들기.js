/*
문자열 길이 제한이 안 보인다. => 효율을 조금은 생각하자
문자열이 소문자로만 이루어져있는지 알 수 없다. => 소문자+대문자로 이루어진다고 가정
*/
function solution(s) {
  return s
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
        .join('')
    )
    .join(' ');
}
