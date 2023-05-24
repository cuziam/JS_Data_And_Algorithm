/**
 * 버블정렬(혹은 싱킹정렬이라고도 하는듯)
 * 루프를 돌면서 인접한 두 개의 원소를 서로 비교해서 정렬하는 기법
 * 가장 큰 값이 거품이 터지듯이 오른쪽으로 점점 밀린다고 해서 버블정렬이라고 한다.
 *
 * 1. i변수로 배열의 처음부터 끝까지 순회하는 루프를 만든다.
 * 2. j변수로 배열의 처음부터 i-1까지 순회하는 내부 루프를 만든다.
 * 3. 만약 arr[j]>arr[j+1]면, 두 원소의 값을 서로 바꾼다(swap).
 * +그렇지 않다면, 내부 루프를 빠져나온다
 * 4. 정렬이 완료되면 배열을 반환한다.
 *
 */
// es5방식
function swap1(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// es2015방식(destructuring)
// 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.
const swap2 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// 최적화되지 않은 버블정렬
// 정렬이 완료되었음을 확인하지 않기 때문에, 무조건 끝까지 정렬하려고 든다.
// 예를 들어 [8,1,2,3,4,5] 같은 경우 실제론 배열을 딱 한번만 순회하면 되는데 무조건 다 순회한다.
// 인접한 두 수를 비교했을 때, 뒤의 수가 더 크다면 swap을 생략할 수 있도록 해야한다.
function bubbleSort1(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap1(arr, j, j + 1);
      }
    }
  }
  return arr;
}
// 이 경우 총 6번의 비교를 실행한다.
console.log(bubbleSort1([37, 45, 29, 8]));

// 최적화된 버블 정렬. 뒤의 수가 더 큰 경우, 루프를 돌며 Swap을 굳이 실행하지 않음
// 이 방식을 사용하면 일반적인 랜덤 배열에선 O(N^2)이지만 정렬이 거의 완료된 경우 선형시간(O(N)에 가깝다.
function bubbleSort2(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap1(arr, j, j + 1);
        noSwaps = false;
      }
      if (noSwaps) break;
    }
  }
  return arr;
}
console.log(bubbleSort2([45, 8, 29, 37]));
