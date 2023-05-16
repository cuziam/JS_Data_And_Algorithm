/*
<문제>
1. minSubArrayLen를 만들어라
2. 두 개의 인자를 받는다. 하나는 자연수 배열이고, 다른 하나는 자연수이다.
3. 주어진 자연수보다 같거나 큰 합을 가지는 부분집합들 중에서, 그 부분집합의 길이 최소값을 구해라.

<제한사항>
time=O(n)
space=O(1)

<예시>
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0


<input,output>
input1: 자연수 배열, 빈값은 없다고 가정.
input2: 자연수. 빈값은 없다고 가정.
output: 0이상 정수. input2보다 큰 값을 가지는 부분집합이 없으면 0이 됨.

<풀이>
*/
function minSubArrayLen(numArr, targetSum) {
  let winSum = 0;
  let winLeft = 0;
  let winRight = 0;
  let minLen = Infinity;
  while (winLeft < numArr.length) {
    if (winSum < targetSum) {
      winSum += numArr[winRight];
      winRight++;
    } else if (winSum >= targetSum) {
      minLen = Math.min(minLen, winRight - winLeft);
      winSum -= numArr[winLeft];
      winLeft++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
