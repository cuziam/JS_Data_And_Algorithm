// /*
// 객체를 이용하여 다양한 값과 빈도를 수집하는 것
// 주로 배열이나 문자열에서 중첩루프를 사용하는 것을 방지하기 위해서 사용한다.

// 두 개의 배열을 허용하는 'same'이라는 함수를 작성해라.
// 어떤 배열의 모든 값이 다른 배열의 모든 값을 제곱한 것과 동일하면 참을 반환해야 한다.
// 값들은 섞일 수 있지만 빈도는 동일해야 한다.

// same([1,2,3],[1,4,9]) true => 단순, 순서대로 있는 경우
// same([1,2,3],[1,9,4]) true => 순서대로 있지 않은 경우
// same([1,2,3],[1,9]) false => 길이가 다른 경우
// same([1,2,1],[4,4,1]) false => frequency가 다른 경우.
// same([1,4,9],[1,2,3]) true => arr1이 arr2보다 큰 경우
// input= 두 개의 배열이고 원소는 전부 원시 타입 숫자라고 가정한다.
// output= 불리언값

// 두 배열의 길이가 다르면 false
// 두 배열의 길이가 같다면
//     arr1과 arr2를 오름차순으로 정렬한다. //정렬하면 순서 문제를 빠르게 해결.
//     arr1의 원소를 하나씩 순회
//         arr1의 원소^2===arr2의 원소인지 확인한다.
//         만약 아니면 ret false
//     순회가 다 끝났다면 ret true
// 내가 푼 방식
// */
const sampleArr1 = [1, 2, 3];
const sampleArr2 = [1, 9, 4];

// function same(arr1, arr2) {
//   // 두 배열의 길이가 다르면 false
//   if (arr1.length !== arr2.length) {
//     return false;
//   } else {
//     //두 배열의 길이가 같다면
//     //arr1과 arr2를 오름차순으로 정렬한다. 정렬하면 순서 문제를 빠르게 해결.
//     arr1.sort((a, b) => a - b);
//     arr2.sort((a, b) => a - b);
//     // arr1의 원소를 하나씩 순회
//     for (let i in arr1) {
//       //arr1의 원소^2===arr2의 원소라면 리턴 false
//       if (arr1[i] ** 2 == arr2[i]) {
//         return false;
//       }
//     }
//     //위 과정을 전부 통과하면
//     return true;
//   }
// }
// //O(N)을 가지는 알고리즘이다.
// console.log(same(sampleArr1, sampleArr2));
// console.log(sampleArr1);
// console.log(sampleArr2);

/*
맘에 안 드는 부분
1. same 함수가 호출되기 전까지 변경되지 않고 유지되어야 함.
2. same 함수 만이 sample 값들을 변경할 수 있으면 좋을 것 같다.
*/

// //또 다른 풀이
// //arr2에서 arr1[i]**2과 일치하는 숫자를 하나씩 제거하는 방식
// //이 과정이 전부 끝나면 true

// function same2(arr1, arr2) {
//   //두 배열의 길이가 다르면 false
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   //arr1 브루트 포스
//   for (let i = 0; i < arr1.length; i++) {
//     //arr1의 원소 제곱과 일치하는 것을 arr2의 원소에서 찾고, 그 인덱스를 변수에 저장함.
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     //일치하는 게 없으면 false
//     if (correctIndex === -1) {
//       return false;
//     }
//     //일치하는 게 있다면, 해당 원소를 제거한다.
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }
// console.log(same2(sampleArr1, sampleArr2));
// //O(N^2)의 방식임.

//또 다른 풀이2
//두 배열을 순회해서 두 배열의 값의 빈도를 두 객체에 넣고 사용하는 법.
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}
same(sampleArr1, sampleArr2);
//이 방식은 O(N)이 됨
//빈도 수를 저장할 때엔 객체를 사용하는 것이 좋다.
