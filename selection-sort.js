/**
 * 선택 정렬
 * 버블 정렬과 유사하지만, 버블 정렬은 계속 swap해서 큰 값을 배열 끝에 위치시키는 반면
 * 선택 정렬은 작은 값을, 가장 왼쪽에 위치시키는 방식.(최소값 선택해서 가장 왼쪽에 위치 시키겠다.)
 *
 * 
0. 가장 작은 값의 초기값은 첫 번째 원소가 됩니다.
1. 주어진 배열에서 가장 작은 값을 찾습니다.
2. 찾은 가장 작은 값을 배열의 가장 왼쪽 요소와 교환합니다.
3. 정렬되지 않은 부분의 왼쪽을 한 칸씩 옮깁니다.
4. 위 과정을 정렬되지 않은 부분이 없어질 때까지 반복합니다.

SelectionSort(array):
    n = 배열의 길이

    반복 (i = 0 to n-1):
        minIndex = i

        i+1부터 n까지 반복 (j = i+1 to n):
            만약 array[j] < array[minIndex]이면:
                minIndex = j

        array[i]와 array[minIndex]를 교환

정렬된 배열(array) 반환

 */
function swap1(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap1(arr, i, minIndex);
  }
  return arr;
}
console.log(selectionSort([34, 22, 10, 19, 10]));
// O(N^2)
// 버블 정렬 보다 나은 점: swap을 하는 횟수가 적다. (즉 거의 없긴 하지만)메모리를 많이 신경써야하는 상황이면 선택정렬이 낫다.
// 아주 쉽다는 점도 나름 장점이라고 할 수 있다.
// 그것 말고는 딱히 장점이라고 할만한 것이 없다...
