/*
지금까지의 정렬은 '비교정렬'이라고 부른다.
배운 것 중에 가장 빠른 정렬은 (특수한 데이터가 아니라면)O(nlogn)의 시간 복잡도를 가졌다.
이제 배울 기수 정렬은 '정수 정렬' 알고리즘에 속한다. 
<특징>
1. 기수 정렬은 두 원소끼리 비교를 하지 않는다.
2. 기수 정렬은 숫자에만 적용된다.
3. 숫자의 자리 수가 숫자의 크기를 나타내고 있다는 것을 이용한다.=> 자리 수가 많을 수록 더 큰 숫자이다.

분할횟수는 자리 수와 동일하다. 한 번 분할해서 만들어지는 그룹의 수는 radix에 달려있다.

시간복잡도: 어떤 경우건 O(nk) n=자료의 길이 k=자료의 평균 자리 수. 숫자가 완전히 랜덤한 경우엔 O(NlogN)이랜다.
공간복잡도: O(n+k) 배열 버켓을 만들어야 해서 k개는 반드시 필요.
*/

// 헬퍼함수. returns the digit in num at the given place value
// 특정 자리 수에 있는 숫자를 리턴하는 함수
// 밑의 방법 말고도 숫자로 문자열로 변환해서 끝의 문자만 얻고, 다시 숫자로 강제형변환 시키는 방법도 있다.
function getDigit(num, i) {
  return Math.floor((Math.abs(num) / 10 ** i) % 10);
}

function getDigit2(num, i) {
  const stringfiedNum = String(num);
  return Number(stringfiedNum.charAt(stringfiedNum.length - i));
}
// 헬퍼함수2. 자리 수를 계산하는 함수
// 배열의 원소에서 가장 큰 자리 수를 찾아야 하는데, 이를 위해 어떤 숫자의 자리 수를 계산하는 헬퍼함수를 만든다.
// 이것 역시 숫자를 문자열로 변환해서 문자열의 길이를 얻는 방법이 있다. but 사용하지 않는다.
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
console.log(getDigit(2589, 0));
console.log(digitCount(95332));

// 헬퍼함수3. 배열을 입력받아서 리스트의 원소 중, 가장 큰 자리 수를 리턴하는 함수.
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
console.log(mostDigits([23, 567, 89, 123664634, 90]));

function radixSort(arr) {
  let result = [];
  // figure out how many digits the largest number has
  const maxDigitCount = mostDigits(arr);
  // Loop from k=0 up to this largest number of digits
  for (let k = 0; k < maxDigitCount; k++) {
    // for each iteration of the loop
    // 1.Create buckets for each digit(0 to 9)
    const digitBuckets = Array.from({ length: 10 }, () => []);
    // 2.Place each number in the corresponding bucket based on its kth digit.
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    // Replace our existing array with values in our buckets,
    result = [].concat(...digitBuckets);
  }
  // return list at the end.
  return result;
}
console.log(radixSort([23, 567, 89, 1245673432, 90]));
