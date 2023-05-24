/**
 * 나이브 문자열 검색
 * 긴 문자열에서 짧은 문자열이 나타나는 횟수를 찾으려고 할 때
 * 한 문자 씩 매칭해서 찾는 방식
 * 1.Loop over the longer string
 * 2.Loop over the shorter string
 * 3. if the characters don't match, break out of the inner loop
 * 4.if the characters do match. keep going.
 * 5 if I complete the inner loop and find a match, increment the count of matches
 * 6.return the count
 */

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}
naiveSearch('lorie loled', 'lol');
console.log(naiveSearch('lorie loled', 'lol'));
