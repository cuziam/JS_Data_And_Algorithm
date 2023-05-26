/**
 * 삽입 정렬
 * 왼쪽 과반을 항상 정렬된 상태로 만들면서 점진적으로 정렬을 만들어나가는 기법.
 * 정렬된 배열의 바로 다음 원소를, 정렬된 배열에 끼워넣음으로써(insertion) 완성한다.
 
1. 맨 처음 원소는 정렬된 것이라고 가정
2. 두 번째 원소를 고른다.
3. 첫 번째 원소와 두 번째 원소는 필요하다면 swap한다.
4. 다음 원소로 넘어간다.
5. 순서가 맞지 않다면, 정렬된 부분에서 적절한 위치에 배치시킨다.
6. 배열이 정렬될 때까지 실행 1~5

데이터가 어느 정도 정렬되어 있는 경우 유용하다.
실시간으로 번호를 정렬해야하는 경우=> 즉 라이브 스트리밍 같은 걸로 배열의 크기가 수시로 변하게 될 때 유용하다.
 */

// 정석적인 방법, 맨 처음 두개의 원소도 swap할 수 있다.
// 즉 arr[0]에 currentVal을 대입할 수 있다.
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    let j = i - 1;
    for (j; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}
console.log(insertionSort([2, 1, 9, 76, 4]));

// 내가 설명듣고 처음에 만들어본 방식. 이 방법은 맨 왼쪽 두 개의 원소를 swap하지 못함.
function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    let j = i - 1;
    for (j; j >= 0; j--) {
      if (arr[j] > currentVal) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = currentVal;
        break;
      }
    }
    console.log(arr);
  }
  return arr;
}
console.log(insertionSort2([2, 1, 9, 76, 4]));
