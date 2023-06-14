/**
처음 작성한 슈도 코드.
let answer=0
let currentChar=null
let firstCharCounts=0
let otherCharCounts=0
for let char of s
	if currentChar===null, currentChar=char
	currentChar===char?firstCharCounts++:otherCharCounts++
	if firstCharCounts===otherCharCounts
		answer++
		currentChar=null
		set first & other char counts zero.
	return answer.
  문자열이 마지막에 하나만 남는 경우를 고려하지 못했다. currentChar에 존재유무에 따라 answer값에 1을 더해줘야 한다.
+ currentChar라는 변수명이 읽을 때 헷갈려서 이름을 바꿨다.
 */

function solution(s) {
  let answer = 0;
  let firstCharCounts = 0;
  let otherCharCounts = 0;
  let checkChar = null;
  for (const char of s) {
    if (checkChar === null) checkChar = char;
    checkChar === char ? firstCharCounts++ : otherCharCounts++;
    if (firstCharCounts === otherCharCounts) {
      answer++;
      checkChar = null;
      firstCharCounts = 0;
      otherCharCounts = 0;
    }
  }
  // 마지막에 하나만 남는 경우 주의
  return checkChar ? ++answer : answer;
}
