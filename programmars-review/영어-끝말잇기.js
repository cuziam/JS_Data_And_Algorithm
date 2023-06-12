/*
일반적인 끝말잇기 룰을 적용한다. 중복이 허용되지 않고 한 글자는 안 된다.

<input>
n: 사람 수
=> 2이상 10이하 '자연수'이다.
words: 사람들이 말한 단어들로 이루어진 배열.
=>배열의 원소는 모두 소문자다. 원소의 길이는 2이상 50이하다.
=>배열의 길이는 n이상 100이하다.

<output>
answer: 탈락하는 사람의 번호, 탈락한 차례를 담은 쌍
=>일단 숫자를 원소로 가지고, 길이가 2인 배열이다.

<자체 제약>
검색 메소드는 최대한 사용하지 않고 풀어본다.

<핵심 로직>
1. 탈락하는 사람의 번호는 어떻게 얻을까?
=>배열을 순회하며 카운터(객체나 Set으로 구현)를 만든다.
=>배열의 원소에 접근할 때 이전 원소의 끝이 현재 원소의 첫 번째와 일치하는지 확인한다.
=>일치하지 않으면 탈락자의 인덱스를 저장한다.
=>일치함을 확인하고 나서 카운터에 단어가 이미 들어있는지 확인한다.
=>없다면 해당 원소를 넣고, 있다면 중복이 나타난 탈락자의 인덱스를 확보하고 순회를 멈춘다.
=>Math.floor((중복이 나타난 인덱스+/n)+1로 번호를 구할 수 있다.

2. 그렇다면 탈락하는 차례는 어떻게 얻을까?
=>일단 중복한 단어가 나타난 시점의 인덱스를 알아야 한다.
위의 과정을 거친 뒤 Math.floor((중복이 나타난 인덱스+/사람 수)+1;로 탈락하는 차례를 얻을 수 있다.


<제한 사항 및 예상치 못한 입력 고려하기>
끝말잇기가 모두 정상적으로 끝났을 때 [0,0]을 반환해야한다.

<처음 작성한 슈도코드>
result=[]
counter={}
loserIndex=null;
for index in words
  if i>=1
    if words[i-1].end===counterwords[i].front
      loserIndex=i
      break;
    endif
  endif
  if counter[words[i]] doesn't exist
    counter[words[i]] = 1
  else
    loserIndex=i
    break
  endif           
endloop
  if loserIndex===null
    return [0,0];
  endlif
탈락한 차례= Math.floor((중복이 나타난 인덱스+/n)+1;
탈락한 번호= (중복이 나타난 인덱스 %n)+1
result.push(탈락한 번호,탈락한 차례)
return result
*/

function solution(n, words) {
  const answer = [];
  const counter = {};

  let loserIndex = null;
  for (let i = 0; i < words.length; i++) {
    if (i >= 1) {
      if (words[i - 1].charAt(words[i - 1].length - 1) !== words[i].charAt(0)) {
        loserIndex = i;
        break;
      }
    }
    if (!counter[words[i]]) {
      counter[words[i]] = 1;
    } else {
      loserIndex = i;
      break;
    }
  }

  if (loserIndex === null) {
    return [0, 0];
  }
  const loserCycle = Math.floor(loserIndex / n) + 1;
  const loserNum = (loserIndex % n) + 1;
  answer.push(loserNum, loserCycle);
  return answer;
}

console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']));
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']));
