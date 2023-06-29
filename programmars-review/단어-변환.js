/*
begin에서 target문자열로 변환할 것이다.
규칙
1. 한번에 한 문자만 바꿀 수 있다.
2. 새로 만든 단어가 words안에 담겨있는 단어여야한다.

변환할 수 없으면 0 반환
최소 몇 단계(step)를 거쳐야 하는지 반환해라.

단어 길이는 같다.
중복단어 없다.

두 문자열 비교해서 한 글자 차이나는지 비교하는 함수.

정답변수를 하나 만들고 0으로 초기화한다.
begin문자열을 읽는다.
큐를 만들어서 begin 문자열을 넣는다.

큐에서 원소 하나(문자열)를 꺼낸다.
words에 딱 단어 하나만 차이나는 문자열이 있는지 확인한다.
    있다면 일단 result++
    그리고 문자열들이 target과 일치하는지 확인한다.
        일치하면 result반환
        일치하지 않는다면 큐에 집어 넣는다.
*/
function isOneCharDifference(str1, str2) {
  let diffCount = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      diffCount++;
    }
    if (diffCount > 1) {
      return false;
    }
  }
  return diffCount === 1;
}
function solution(begin, target, words) {
  const visited = {};
  const queue = [begin];
  while (queue.length > 0) {
    const currentWord = queue.shift();
    if (currentWord === target) break;
    for (const word of words) {
      if (isOneCharDifference(currentWord, word) && !visited[word]) {
        visited[word] = (visited[currentWord] || 0) + 1;
        queue.push(word);
      }
    }
  }
  return visited[target] ? visited[target] : 0;
}
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
