/*
<문제>
Write a recursive function called someRecursive
which accepts an array and a callback.
the function returns true
if single value in the array returns true when passed to the callback.
Otherwise it returns false.

<input,output>
input: 숫자 배열, 콜백함수
output: boolean, true or false.

<예시>
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false


<풀이>
문제를 재구성해보자.
배열의 원소 하나하나가 콜백함수의 인수가 됨.
*/
const isOdd = val => val % 2 !== 0;
function someRecursive(arr, callback) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return false;
  if (callback(arr[0]) === true) return true;
  return someRecursive(arr.slice(1), callback);
}
console.log(someRecursive([2, 4, 6, 8], isOdd));
