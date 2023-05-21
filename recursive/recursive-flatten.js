/*
<문제>
Write a recursive function called flatten
which accepts an array of arrays
and returns a new array with all values flattend

<input,output>
input: 숫자로만 이루어진 배열. 배열의 원소들은 다양한 깊이를 가질 수 있음, 빈 배열 가능 가정
output: 1차원 숫자 배열.

<예시>
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

<풀이>
1. 원본 배열을 건드리지 않기.
2. 배열의 원소 하나하나의 깊이를 줄이는 재귀함수 vs 전체 배열의 깊이를 하나씩 줄이는 재귀함수
3. 빈 배열이 들어오면 빈 배열을 그대로 리턴
4. 난 2번 방법으로 일단 시작해본다. 앞 원소부터 접근해서 배열의 깊이를 낮추고, 새로 만들어진 배열에 push로 넣겠음.
5. 그냥 flat메소드를 사용하면 끝이긴 한데, 그 방법은 제쳐둔다.

배열에 든게 없으면 arr을 그대로 리턴한다.
배열에 든게 있다면 앞 원소부터 접근한다.(루프 시작)
if 원소의 depth === 1이면(isArray[i]===false) 원소를 뽑아서 새 배열에 집어넣음
if 원소의 depth >== 2이면(isArray[i]===true) return arr=arr.concat(flatten(arr[i])) 필수
*/
// 문제점: 논리적인 흐름이 부족했다. 글을 자세히만 읽었으면 쌉가능했음
// 순수 재귀와 헬퍼 재귀를 사용할 때 패턴을 제대로 숙지하지 못했다.
// 순수 재귀 일 때=>concat써야했음, 헬퍼재귀 일 때=>concat 굳이 안 해도됨
//
const sampleArr = [1, [2, [3, 4], [[5]]]];
function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // base case
    // 배열이 맞다면 flatten 호출
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(flatten(sampleArr));

function flatten2(arr) {
  const newArr = [];
  function helper(helpedArr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(helpedArr[i]) === true) {
        return helper(helpedArr[i]);
      }
      newArr.push(helpedArr[i]);
    }
  }
  helper(arr);
  return newArr;
}
console.log(flatten2(sampleArr));
