/**
 * binary search(이진 검색)
 * 선형검색은 한 개의 원소 씩을 탐색하는 반면
 * 이진 검색은 자료의 절반 씩을 제거해나가며 타겟을 탐색하는 방식
 * <조건>
 * 1. 자료가 정렬되어(sorted) 있어야 한다.
 * 2. left,middle,right를 정해줘야 한다.
 * 3. 못 찾았을 때 리턴값도 정해줘야 한다.

<문제>
Write a function called binarySearch
which accepts a sorted array and a value
and returns the index at which the value exists.
Otherwise, return -1.

문제가 어렵지 않아서 이해하긴 쉬움.

<ex>
binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1

<input, output>
input1: 오름차순으로 정렬된 숫자 배열. 숫자 범위는 자연수인 걸로 추정
input2: 타겟 값. 숫자 범위는 자연수인 걸로 추정.
output: 타겟 값의 인덱스. 범위는 0이상의 정수. 만약 타겟값이 없다면 리턴 -1.

<warning>
a.인자가 부족할 때: 에러 로그 출력
b.인자의 타입이 적절한 게 아닐 때: 에러 로그 출력
c.인자가 비어있을 때: 에러 로그 출력
d.범위가 맞지 않을 때: 이 상황은 없다고 가정하겠음.

<풀이>
자료형이 오름차순으로 정렬된 배열이고, 크기를 이용하여 타겟값을 찾을 수 있다.
그리고 그 인덱스도 찾을 수 있다. 따라서 이진 탐색을 사용할 수 있다.
1. left,right,mid 선언
2. left<right가 참이면 mid검색 계속실시
arg[0] name: arr
arg[1] name: target

//cond a
if(arguments.length<2){
    clg"Error: 인수가 부족합니다."
    return;
}
//cond b
if(Array.isArray(arr)!==true||typeof target!==='number'){
    clg"Error: 인수로 적절하지 않은 데이터를 사용합니다."
}
//cond c
if(arr.length===0){
    clg"배열이 비어있습니다."
}
left=0
right=arr.length-1
while(left<right){//이 부분때문에 처음에 버그가 발생했었음
    mid=Math.floor((left+right)/2)
    if(arr[mid]===target)
        return mid;
    else if(arr[mid]<target){
        left=mid+1;
    }else{
        right=mid-1
    }
}
return -1;
*/

function binarySearch(arr, target) {
  // 간단한 인수 검사 및 예외처리
  if (arguments.length < 2) {
    console.log('Error: 인수가 부족합니다.');
    return;
  }
  if (Array.isArray(arr) !== true || typeof target !== 'number') {
    console.log('Error: 인수로 적절하지 않은 데이터 타입을 사용합니다.');
    return;
  }
  if (arr.length === 0) {
    console.log('Error: 배열이 비어있습니다.');
    return;
  }

  // target 값 이진 탐색
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
const ans = binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95);
console.log(ans);
