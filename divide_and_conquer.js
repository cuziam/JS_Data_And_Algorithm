/*
분할 정복이라는 개념이다.
데이터를 작은 덩어리로 나누어서, 데이터 부분집합에 대해 동일한 작업을 반복하는 패턴.
분할 정복은 시간 복잡도를 극적으로 줄여줄 수 있다.

<문제>
오름차순으로 정렬된 배열에서 주어진 숫자가 몇 번 인덱스에 존재하는지 출력하는 함수 search를 만들어라.
만약에 배열에 주어진 숫자가 존재하지 않으면 -1을 출력해라.

<input,output>
parameter1: <array>, 원소는 모두 자연수, 숫자는 오름차순으로 정렬되어 있음,범위 노, 중복되는 수는 없음, 빈 배열 가능
parameter2: <number>, 그냥 자연수. 빈값은 없다고 가정.
*/

// naive approach
// 그냥 앞에서 부터 하나씩 해보는 일. O(N)

const sampleArr = [1, 2, 3, 4, 5, 6, 7];
function search(arr, num) {
  return arr.indexOf(num);
}
console.log(search(sampleArr, 5));

// 이진 탐색 방법. 정렬된 데이터에서, 데이터를 반씩 잘라가며 탐색하는 것.
// 정렬된 데이터에서 키가 되는 값을 대소 비교를 해가며 탐색 범위를 좁혀나갈 수 있다.
// 1. 정렬된 자료의 처음과 끝에 두 개의 포인터를 둔다.
// 2. 자료에서 처음과 끝 사이의 중간지점을 계산한다.
// 3. 만약 중간지점에 해당하는 값과 타겟값이 일치한다면 완료된 셈이다.
// 4. 만약 중간값이 더 크면 끝 포인터를 중간인덱스 -1로
// 5. 만약 중간값이 더 작으면 시작 포인터를 중간인덱스 +1로
// 6. 2,3,4과정을 반복하다보면 타겟값을 찾을 수 있다. 복잡도는 O(logN)
function search2(arr, num) {
  // 1. 정렬된 자료의 처음과 끝에 두 개의 포인터를 둔다.
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  while (minIndex <= maxIndex) {
    // 2. 자료에서 처음과 끝 사이의 중간지점을 계산한다.
    const midIndex = Math.floor((minIndex + maxIndex) / 2);
    if (num === arr[midIndex]) {
      return midIndex;
    }
    if (num < arr[midIndex]) {
      maxIndex = midIndex - 1;
    } else {
      minIndex = midIndex + 1;
    }
  }
}
console.log(search2(sampleArr, 5));
