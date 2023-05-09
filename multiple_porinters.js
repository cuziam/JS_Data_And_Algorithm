/* 강의에선 c를 다루지 않아서 그런지 포인터를 엄밀하게 정의하지 않는다.

<주제>
인덱스나 위치에 대응하는 포인터(i나 j 같은 거)를 여러 개 만들어서 사용하는 기법
공간 복잡도를 최소화하는 문제에서 활용하기가 좋다.

<문제>
정렬된 배열을 취하는 sumZero라는 함수를 작성해라.
이 함수는 합이 0이 되는 '첫 번째' 쌍을 찾아내야 한다.
이 쌍은 배열 형태로 output이 나와야 한다.
만약 합이 0이 되는 쌍이 없다면 undefined를 output으로 내보내라.

<input, output>
input
숫자 배열, 내림차순으로 정렬되어 있음.
인수는 언제나 배열 한 개.
길이 제한 X
빈값 가능 O


<예시>

[-3,-1,0,1,3] -> [-3,3]  
[-2,0,1,3] -> undefined
[1,2,3] -> undefined
[-4,-2,0,1,2,3,4,5] -> [-4,4]
[]-> undefined

중복 원소 처리
빈 값 처리

*/
// naive approach

const arrSample = [-4, -2, 0, 1, 2, 3, 4, 5];
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}
console.log(sumZero(arrSample));
// O(N^2) 방식

// 내가 생각한 방식
// 빈값이면 undefined
// 맨 앞과 맨 뒤에서 동시에 순회 시작
// 맨 앞의 값과 맨 뒤의 값이 부호가 같다면 undefined
// 아니라면
// 앞의 값 + 뒤의 값>0 뒤에서 다음 원소접근
// 앞의 값 + 뒤의 값<0 앞에서 다음 원소 접근
// 같으면 그 값 배열에 넣어서 리턴
function sumZero2(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return undefined;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  return false;
}
sumZero2(arrSample);
// 이 방법은 O(N)의 방법을 사용함
