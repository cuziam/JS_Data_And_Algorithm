function solution(babbling) {
  let answer = 0;
  const wordToUse = ['aya', 'ye', 'woo', 'ma'];
  let unusedWord = '';
  // 어떤 문자열을 만들 수 있는지 확인하는 헬퍼함수
  function canMakeBabbling(str) {
    if (str === '') return true;
    for (const word of wordToUse) {
      if (str.startsWith(word) && word !== unusedWord) {
        unusedWord = word;
        return canMakeBabbling(str.slice(word.length));
      }
    }
    return false;
  }
  // 문자열을 만들 수 있다면 answer++
  for (const chatter of babbling) {
    if (canMakeBabbling(chatter)) {
      answer++;
    }
    // 다른 문자열을 확인하기 전에, 사용하지 않는 문자는 ''로 초기화.
    unusedWord = '';
  }
  console.log(answer);
  return answer;
}
solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']);

function solution2(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans), 0);
}
