/*
출력
=> 65536=정수부만 출력할 것(정확히 17bit째니까 시프트 연산을 사용할 수도 있다=>필요없음)

입력
문자열 두개: 특수,공백,숫자 다 가능

자카드 유사도=교집합의 크기/합집합의 크기
1.중복원소의 경우도 고려한다.=>이거 set으로 어떻게 나오나 테스트해보기(완료)
2.어떤 문자열의 집합=두 글자씩 끊어서 원소를 정의한다.문자열의 길이가 다행이 2이상이다.
3.두 글자씩 끊었을 때 특수문자가 있다면 제거한다.
4.원소의 대소문자 차이는 무시한다.

접근
1. str1과 str2는 두 문자씩 자른 후에 배열에 넣기
2. 배열의 원소에 대해서 특수문자 제거
1+2. 정규표현식 사용 가능/문제: 그냥 쓰면 중복글자는 넣지 않을 것이다.
ex)fr을 찾으면 ra를 못 찾는다.
일단 고집을 조금 버리고 단순하게 가자

3.각 배열을 set에 넣고 연산?
set에 넣으면=> 중복원소가 다 사라짐. 즉 아예 사용하면 안됨.
배열에 넣으면=> 교집합 합집합 연산이 어려워짐.하지만 이 방향으로 해야한다.
그냥 편하게 가면=> 두 개의 map을 카운터로 사용, map의 key는 원소명, value는 원소의 개수
map순회(for in)
    두 map에 모두 그 값이 있다면 교집합size에 최소값만큼 더 하기,합집합size에 최대값 만큼 더하기   
return Math.floor(교집합 size/합집합 size*65536)


주의: 예제4
*/

// 집합의 원소 만드는 메소드.(문자열이 입력)+카운터도 가능?
function splitString(str) {
  const result = [];
  for (let i = 0; i < str.length - 1; i++) {
    result.push(str.slice(i, i + 2).toLowerCase());
  }
  return result.filter(pair => /[A-Za-z]{2}/.test(pair));
}

function solution(str1, str2) {
  // 1. str1과 str2는 두 문자씩 자른 후에 유효한 원소만 배열로 반환(완료)
  const arrOfStr1 = splitString(str1);
  const arrOfStr2 = splitString(str2);
  // 2. 객체를 카운터로 사용,카운터 완성/map의 key는 원소명, value는 원소의 개수
  const counter1 = {};
  const counter2 = {};
  arrOfStr1.forEach(ele => {
    counter1[ele] = (counter1[ele] | 0) + 1;
  });
  arrOfStr2.forEach(ele => {
    counter2[ele] = (counter2[ele] | 0) + 1;
  });
  console.log(counter1, counter2);
  // 3. 카운터 순회, 교집합 size와 합집합 size 만들기
  // hasOwnProperty검증은 생략
  let intersectionSize = 0;
  let unionSize = 0;
  for (const ele in counter1) {
    if (counter1[ele] && counter2[ele]) {
      intersectionSize += Math.min(counter1[ele], counter2[ele]);
    }
  }
  const keys = new Set([...Object.keys(counter1), ...Object.keys(counter2)]);
  keys.forEach(key => {
    unionSize += Math.max(counter1[key] || 0, counter2[key] || 0);
  });
  const result = Math.floor((intersectionSize / unionSize) * 65536);
  console.log(0 / 1);
  return result >= 0 && result <= 65536 ? result : 65536;
}
