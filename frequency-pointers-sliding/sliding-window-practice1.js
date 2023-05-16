/*
<문제>
1. maxSubarraySum을 구해라.
2. 이 함수는 두 개의 인자를 사용한다.
3. 인자 중 하나는 정수로 구성된 배열이며, 두 번째 인자는 자연수이다.
4. 이 함수는 부분집합의 최대합을 구하는 문제이다. 부분집합의 원소의 갯수는 두 번째 인자에 들어간다.
5. 결과적으로 리턴값은 정수이다.

<제한사항>
Time=O(N)
space=O(1)

<input,output>
input1: 정수 배열. 길이 제한X, 빈 배열 가정.
input2: 자연수. 빈 값X.

<예시>
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null

<풀이>
배열 arr1과 숫자 winLength을 넘겨받는다.
arr1.length>winLength이면 return null
arr1을 winLength만큼 순회하여
    maxSum초기값 세팅(maxSum+=arr[i])
slidingwindow 방식으로 maxSum갱신
for let i=winLength; i<arr1.length;i++
    sum=maxSum-arr1[i]+arr1[i+winLength-1]
    maxSum=Math.max(maxSum,sum)
return maxSum
*/
function maxSubarraySum(arr1, winLength) {
  if (arr1.length < winLength) return null;
  let maxSum = 0;
  let sum = 0;
  for (let i = 0; i < winLength; i++) {
    maxSum += arr1[i];
  }
  sum = maxSum;
  for (let i = winLength; i < arr1.length; i++) {
    sum += arr1[i] - arr1[i - winLength];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
