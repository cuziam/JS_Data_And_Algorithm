/**
 * <문제>
 * Write a recursive function called nestedEvenSum.
 * Return the sum of all even numbers in an object
 * which may contain nested objects.
 * 
 * <input,output>
 * 이 함수에 딱히 목적이 있어보이진 않음.
 * input: 중첩 객체. 키는 문자열. 값은 다양한 타입. 깊이는 알 수 없음. 빈 객체 가능.
 * 
 * output: 숫자, 프로퍼티 값이 짝수일 때 그 값들을 모두 더한 값. 짝수가 없다면 그냥 0으로 리턴한다.
 * 
 * 
<고려사항 정리>
1. Search all the values in nested object.(Search values in leaf by post-order)
2. and calculate the sum of even values.
a. If the input is empty, return 0.
b. If all the values is not even, return 0.

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
*/
const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};
function nestedEvenSum(obj) {
  // a. If the input is empty, return 0.
  if (Object.keys(obj).length === 0) {
    return 0;
  }

  let sum = 0;
  // 1. Search all the values in nested object.(Search values in leaf by post-order)
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // 2. and calculate the sum of even values.
      if (obj[key] > 0 && obj[key] % 2 === 0) {
        sum += obj[key];
      }
      if (typeof obj[key] === 'object') {
        sum += nestedEvenSum(obj[key]);
      }
    }
  }
  // b. If all the values is not even, return 0.
  return sum;
}
console.log(nestedEvenSum(obj2));
/**
 * 보완해야 했던 점.
 * 1. obj가 일반 객체인데, for of문을 쓰려고 했다.
 * 2. isEmpty()라는 메소드가 없는데 사용하려고 했다.
 * 3. 변수명을 한 번에 바꾸지 않았다.
 * 4. base case는 잘 설정했는데, 리턴 값을 잘못 설정했음
 * => 객체 원소에 대해서 return nestedEvenSum(obj[key])를 했었다.
 */
