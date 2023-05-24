/**
 선형 검색(linear search)은 그냥 순서대로 하나씩 대조해서 찾는 방법.
선형검색 함수의 요건: 배열과 기준값

 linear search의 예시=> 이것도 정리해야 할듯
 indexOf(searchElement[, fromIndex]) return the index of searchElement
 includes(valueToFind[, fromIndex]) return boolean
 find(callback[, thisArg])
array.prototype.findIndex(callback(element[, index[, array]])[, thisArg])

testtest
<문제>
Write a function called linearSearch
which accepts an array and a value,
and returns the index at which the value exists.
If the value does not exist in the array, return -1.
Don't use indexOf to implement this function!

<ex>
linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
linearSearch([100], 100) // 0
linearSearch([1,2,3,4,5], 6) // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
linearSearch([100], 200) // -1
 */
function linearSearch(arr, val) {
  // 간단한 exception 처리
  if (Array.isArray(arr) !== false || typeof val !== 'number') {
    console.log('data type Error!');
  }
  if (arr.length === 0) {
    return -1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
