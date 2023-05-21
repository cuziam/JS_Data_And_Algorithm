/*
<문제>
Write a recursive function called capitalizeFirst.
Given an array of strings,
capitalize the first letter of each string in the array.

<input,output>
input: 문자열을 원소로 갖는 배열. 알파벳 대소문자 섞여 있음. 빈 배열 가능. 반드시 이중배열. 이 경우 빼고는 없다고 가정.
output: 문자열을 원소로 갖는 배열. 알파벳 대소문자 섞여 있음.

<예시>
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
// ['car'] => ['Car']
// []=>[]
// ['2car'] => ['2car']

<풀이 및 특이사항>
1. 이중 배열의 형태와 유사하다. 배열의 원소가 문자열인 형태
2. 문자열-제어문자X, 특수문자X, 구두문자X, 공백문자X, 숫자X
3. 각 원소에 대해서 동일한 과정을 수행한다. => 재귀나 반복문 가능성
4. 반복문 풀이로 가보자.


*/
// 반복문을 사용해 본 내 풀이.
function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return [];
  }

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    newArr.push(str.replace(str[0], str[0].toUpperCase()));
  }
  return newArr;
}
console.log(capitalizeFirst2(['car', 'taco', 'banana']));
// O(N^2)인디... 아깝네
// 재귀 함수를 사용해본 풀이

function capitalizeFirst2(arr) {
  if (arr.length === 0) {
    return [];
  }
  let newArr = [];
  // base case
  if (arr.length === 1) {
    return arr[0].toUpperCase();
  }
  newArr = newArr.push(capitalizeFirst2(arr.slice(0, -1)));
  return newArr;
}
/**
 * 검토 결과 함수 이름을 바꿔야 함. First2에서 처음 두 문자를 바꾸라는 뜻으로 받아들여질 수 있다.
 *
 */
