// 외부함수에서 호출된 재귀함수에, 외부함수의 인수를 전달하는 패턴
// 헬퍼 메소드: 객체 지향 프로그래밍에서 주로 사용한다.
// 클래스의 인스턴스 메소드에서 특정 작업을 수행하기 위해 만들어진 보조 메소드.
// 여기선 함수가 됨

// 중첩함수가 재귀인 경우(헬퍼 메소드 재귀)
function collectOddValues(arr) {
  const result = [];
  function helper(helperInput) {
    // base case
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 그냥 함수가 재귀인 경우(순수 재귀)
// 배열이 인수인 순수 재귀 함수의 경우 slice, 전개 연산자, concat등으로 카피해서 사용하면 데이터를 변경하지 않을 수 있다.
// 특히 문자열의 경우엔 데이터를 변경할 수 없다.(immutable하다) 그래서 slice,substr,substring등으로 카피해서 사용해라.
function collectOddValues2(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues2(arr.slice(1)));
  return newArr;
}
console.log(collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9]));
