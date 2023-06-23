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
  // aya,ye,woo,ma가 한번이라도 반복되는 패턴 정의
  // ex) ayaaya
  const regex1 = /(aya|ye|woo|ma)\1+/;
  // aya,ye,woo,ma로 만들 수 있는 모든 패턴 정의
  const regex2 = /^(aya|ye|woo|ma)+$/;
  return babbling.reduce((acc, cur) => (!regex1.test(cur) && regex2.test(cur) ? ++acc : acc), 0);
}
