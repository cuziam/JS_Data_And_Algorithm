/**
 * 해쉬 테이블(해쉬 맵)
 * 키를 (인덱스)값으로 매핑하여 저장하는 자료구조이다.
 * Javascript에선 Object나 Map을 활용할 수 있다.
 * =>Object의 경우 키 값으로 문자열만 사용할 수 있지만, Map은 다양한 자료형을 허용한다.
 *
 * <특징>
 * 1. keys are not ordered
 * 2. Unlike arrays, hash tables are fast for all of the following operations
 * ex) finding values, adding new values, and removing values.
 * 3. 순수배열의 경우 연속된 데이터에 좋으나, 대다수의 데이터들은 해쉬로 저장하는 게 유용하다.
 * 왜냐하면 배열의 색인은 숫자라서 직관적이지 않을 때까 많기 때문이다. 색인은 문자로 사용하는 게 대개 직관적이다.
 * ex) 색깔의 이름을 키로, 16진법으로 표현된 색상을 값으로 저장하고자 할 때.
 * 0이라는 표현보다는 'pink'로 표현하는 것이 좋다.
 *
 * <해쉬 함수>
 * wikipedia: A hash function is any function that can be used to map data of arbitrary size to fixed-size values.
 * though there are some has functions that support variable length output.
 * 결과값으로 입력값을 거의 불가능하기 때문에, 암호화 기법에서도 많이 쓰인다.
 *
 * <좋은 해쉬의 조건>
 *  1. 상수 시간 만큼 동작이 빨라야 한다.
 *  2. 결과값이 특정 값 주위에 모여있으면 안된다.=> distribute uniformly.
 *  3. Deterministic(same input yields same output)
 */

// 바보같은 예시긴 하지만 나쁜 해쉬의 예시
// 루프를 넣는 순간 개느려진다.
function slowHash(key) {
  for (let i = 0; i < 10000; i++) {
    console.log("everyday i'm hashing");
  }
  return key[0].charCodeAt(0);
}
// not deterministic
function notDeterministic(key) {
  Math.floor(Math.random() * 1000);
}

// 문자열의 경우 charcode(utf-16)을 이용하는 방식을 사용할 수 있다.
const ex = 'a'.charCodeAt(0) - 9;

// 간단한 해시함수(문자열 to 숫자)
// 문제점: 문자열만 사용, 상수 시간이 아님, 값이 들어갈 공간이 너무 적어서 겹쳐버리는 상황발생
function hash(key, arrayLen) {
  let total = 0;
  for (const char of key) {
    const value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

/*
개선해보기
1. make uniformly distrubuted output: Use prime number
2. Dealing with collision
3. speed 

충돌처리는 seperate chaining, linear probing으로 해결한다.
1. seperate chaining: 각각 다른 키들에 대해 동일한 인덱스값이 나온다면, 중첩 배열 형태로 저장한다.
그리고 해당 인덱스를 가진 배열을 순회해서 키 값을 찾는다.
=> 배열의 길이보다 더 많은 데이터를 저장할 수 있다는 장점이 있다.

2. linear probing: 특정 인덱스에 무언가가 이미 있다면, 배열을 순회해가며 빈 공간을 찾아서 사용한다.

*/
function hash2(key, arrayLen) {
  let total = 0;
  // 소수를 사용하면 데이터가 좀 더 균일하게 퍼진다.=> 왜 인지 알고 싶으면 quora 참고
  // https://www.quora.com/Does-making-array-size-a-prime-number-help-in-hash-table-implementation-Why?q=does%20making%20array%20size
  const WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    const value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
