/*
<문제>
숫자배열에서 고유값들의 갯수를 출력하는 countUniqueValues 함수를 만들어라

input: 오름차순으로 정렬된 배열. 전부 숫자. 음수가능. 빈값 가능.
output: 고유값들의 갯수. 숫자. count

[1,1,1,1,1,2] 2
[1,2,3,4,4,4,7,7,12,12,13] 7
[] 0
[-2,-1,-1,0,1] 4

<풀이>
나만의 방법: 앞에서 부터 두개씩 비교해 나가기.
arr이 비었다면 return 0
arr이 비어있지 않으면
    arr의 앞에서 부터 i 순회
        if i=0
            count += 1
        else if arr[i-1] != arr[i]
            count += 1
    
    


*/
const sampleArr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return 1;
  }
  let count = 0;
  for (const i in arr) {
    if (Object.prototype.hasOwnProperty.call(arr, i)) {
      if (arr[i] !== arr[i - 1]) {
        count += 1;
      }
    }
  }
  return count;
}
console.log(countUniqueValues(sampleArr));

// 출제자가 가이드한 방식
// 비슷하긴 한데, 포인터를 두 개쓰고, 배열을 바꾸는 특이한 방식을 사용하고 있음
// 코드가 굉장히 간결해졌음. 그리고 count변수를 따로 만들지도 않는다.
function countUniqueValues2(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValues2(sampleArr));
