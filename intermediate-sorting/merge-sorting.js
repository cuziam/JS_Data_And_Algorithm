/*
합병 정렬
분할 정복 알고리즘 중 하나
무려 시간은 무슨 상황이든 O(nlogn), 공간은 O(n)이다.
1. 분할
2. 정렬과 합병

0 or 1개 원소 배열이 이미 정렬되어 있다는 점을 활용한다.
배열을 0 or 1개의 원소로만 이루어진 더 작은 배열로 나눈 다음에, 작업을 수행하고 합치는 것이다.

*/

// 합병 헬퍼 함수
function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;
  // 하나 이상 배열의 원소를 전부 순회할 때까지 while문 실행
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // 어차피 두 배열은 정렬 되어있으므로 남은 원소는 그냥 그대로 넣어버리면 됨}
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }
  const midIdx = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midIdx));
  const right = mergeSort(arr.slice(midIdx));
  return merge(left, right);
}
console.log(mergeSort([1, 10, 50, 66, 77, 12, 3, 4, 450, 203, 23]));
