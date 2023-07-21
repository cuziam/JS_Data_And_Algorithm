/*
공간은 공백또는 벽
두 지도에서 어느 하나라도 벽이 있으면 전체지도에서도 벽
둘 다 공백이면 공백=>둘이 반대논리네

<접근>
정답배열 생성
arr1,arr2를 인덱스 이용하여 순회
row 배열 생성
각 숫자 이진법 변환 후, 뒤의 5글자만 자른다.
    5글자 순회
    글자를 숫자로 바꾼 다음에 서로 OR시킨다.
        맞으면 배열에 push #
        아니면 배열에 push ' '
row 배열 join시킨 뒤 정답배열에 push
*/
function convertToBinary(num, n) {
  const binary = num.toString(2);
  const paddingZeros = n - binary.length;
  return '0'.repeat(paddingZeros) + binary;
}

function solution(n, arr1, arr2) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    const binary1 = convertToBinary(arr1[i], n);
    const binary2 = convertToBinary(arr2[i], n);
    for (let j = 0; j < n; j++) {
      binary1[j] | binary2[j] ? row.push('#') : row.push(' ');
    }
    result.push(row.join(''));
  }
  return result;
}
