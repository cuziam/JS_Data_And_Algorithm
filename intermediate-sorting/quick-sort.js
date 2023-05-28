/*
퀵 정렬.
1.시간 복잡도 최선, 평균의 경우O(nlogn)
=배열의 logN번 분해하고, N번의 대소비교를 실행하는 경우

2.최악의 경우 O(n^2)=>데이터가 정렬된 경우=최소값이나 최대값을 피봇으로 설정하는 경우 즉,
=배열을 분해할 때 마다, 하나의 원소만 가지는 배열+나머지 원소들을 가진 배열로 나뉘는 경우이다.
배열을 N번 분해하고, N번의 대소비교를 실행하므로 O(n^2)이 된다.

pivot은 되도록 중간값을 선택하는 것이 좋다. 중간값을 정확히 알지는 못하므로 대개 랜덤한 인덱스를 선택하는 방식을 사용한다.

3.공간 복잡도 O(logn)
합병정렬과 비슷한 과정으로 시작한다.
재귀적으로 배열을 원소의 갯수가 0이나 1이 되도록 만든다.
2. pivot을 임의로 선택한다.(동영상에선 첫 번째 원소를 이용함)
3. 배열의 원소를 순회한다. pivot보다 작은 값은 pivot오른쪽 && 배열의 왼쪽에, 큰 값은 배열의 오른쪽에 위치시킨다.
4. pivot을 제자리에 위치 시킨다.
5. pivot의 오른쪽 배열과 왼쪽 배열에 대해 2~4의 동일한 작업을 실시한다.

*/
function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivot(arr, start = 0, end = arr.length - 1) {
  // 초기 pivotIdx를 0번 인덱스로 설정하는 방식을 사용했음
  // 다른 값을 사용해도 된다.
  let pivotIdx = start;
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[pivotIdx] > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  pivotIdx = swapIdx;
  return pivotIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  // basecase
  return arr;
}
console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
