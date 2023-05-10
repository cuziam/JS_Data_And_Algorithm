/*
sliding window가 무엇인지 개념적으로는 이해하고 있음

<문제>
주어진 배열에서 윈도우 내부의 합이 최대가 되는 maxSubarraySum이라는 함수를 만들어라.
첫 번째 매개변수는 배열. 두 번째 매개 변수는 윈도우의 길이이다.


<input,output>
parameter1: <array>, 원소가 모두 자연수, 길이 상관없음.
output: <number>, 자연수.

ex)
[1,2,3,4,5],2 => 9/ 배열 
[],4=>null/ 배열의 길이 < 윈도우의 길이인 경우 return NULL
[3,2,4,9],2=> 3
[5,6,13,12,7,2],3 => 32

<풀이>
배열의 길이 < 윈도우의 길이인 경우 return NULL
주어진 길이 만큼 arr을 복사해서 copiedArr변수에 저장한다.
=>arr의 인덱스 i와 arr.slice(i,i+winLength) 메소드를 이용한다.
copiedArr을 순회하며 모두 더하고 maxSum에 저장한다.

*/
// naive approach O(N^2)
const sampleArr = [5, 6, 13, 12, 7, 2];
function maxSubarraySum(arr, winLength) {
  if (winLength > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    let sum = 0;
    for (let j = 0; j < winLength; j++) {
      sum += arr[i + j];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
console.log(maxSubarraySum(sampleArr, 3));

// an better approach. O(N)
// 윈도우 내부의 모든 원소에 다시 접근해서 더하는 것이 아니라
// 윈도우에서 맨 앞 원소를 빼고 뒤에 원소를 더하면 sum이 완성된다.
function maxSubarraySum2(arr, winLength) {
  let maxSum = 0;
  let tempSum = 0;
  if (winLength > arr.length) {
    return null;
  }
  for (let i = 0; i < winLength; i++) {
    maxSum += arr[i];
  }
  for (let i = winLength; i < arr.length; i++) {
    tempSum = maxSum - arr[i - winLength] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log(maxSubarraySum2(sampleArr, 3));
