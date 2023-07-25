/*
<input>
1<n<10^15로 이루어진 배열
   1 <=input.length<10000

<output>
1or0으로 이루어진 배열, input이 주어졌을 때 하나의 이진트리로 해당 수를 표현하면 1 아니면 0이다.
    output.length is input.length
<주의>
입력 원소의 크기가 매우 큼.
더미 노드는 마음껏 넣을 수 있다고 가정한다.

어떤 이진트리인데?
1. 빈문자열 생성
2. padding해서 포화이진트리를 만든다. 루트 노드는 유지
3. 왼쪽에 있는 순서대로 읽는다.=>postorder
4. 살펴본 노드가 더미면 문자열 뒤에 0을 추가. 더미노드가 아니면 문자열 뒤에 1을 추가
5. 만들어진 이진수를 십진수로 변환한다.


<로직>
1. numbers에서 주어진 수 number를 읽는다.
2. number를 이진수로 바꾼 뒤 타입을 문자열(toString(2))로 바꾸고 그 이진수의 길이를 확인한다. 
3. 해당 이진수를 포화트리로 표현했을 때 필요한 깊이를 확인한다.
    =>n=1부터 시작 2^n<이진수의 길이<2^(n+1)이면 2^(n+1)을 반환하거나
    =>그냥 log2(이진수의 길이)+1를 하고 이 값을 정수로 내림하면 된다.
4. 필요한 깊이만큼 해당 이진수에 0을 padding한다.
    if n is depth, string.padStart(2^neededDepth,0)
5. 이제 이 이진수가 포화이진트리를 만족하는지 확인한다.
    어떻게 하는가? 부모노드가 0일 때, 자식노드가 1이면 0을 반환해서 결과 배열에 넣고 다음 number를 읽는다.
    만약에 문제가 없다면 1을 넣고 다음 number를 읽는다.
*/
// 십진수를 이진수로 바꾼 뒤, 이 이진수를 포화이진트리에 넣었을 때의 깊이를 계산한다.
// 그리고 해당 이진수와 깊이를 반환한다.
function getBinaryAndDepth(decimal) {
  const decimalToBinary = decimal.toString(2);
  const neededDepth = Math.floor(Math.log2(decimalToBinary.length)) + 1;
  return [decimalToBinary, neededDepth];
}

// 포화이진트리로 표현하는데 필요한 노드의 수에 맞춰 이진수값 앞에 0을 추가해준다.
function getZeroPaddedBinary(binary, neededDepth) {
  return binary.padStart(2 ** neededDepth - 1, '0');
}

// 0이 추가된 이진수가 포화이진트리를 정말로 만들 수 있는지를 확인하고 결과에 따라 0과 1을 반환한다.
function isFullBinaryTree(currentBinary, start, end) {
  const parentIdx = Math.floor((start + end) / 2);
  const leftChildIdx = Math.floor((start + parentIdx - 1) / 2);
  const rightChildIdx = Math.floor((parentIdx + 1 + end) / 2);
  if (start === end) {
    return 1;
  }
  if (
    currentBinary[parentIdx] === '0' &&
    (currentBinary[leftChildIdx] === '1' || currentBinary[rightChildIdx] === '1')
  ) {
    return 0;
  }
  if (isFullBinaryTree(currentBinary, start, parentIdx - 1) === 0) return 0;
  if (isFullBinaryTree(currentBinary, parentIdx + 1, end) === 0) return 0;
  return 1;
}
function solution(numbers) {
  return numbers.map(number => {
    const binaryDepthArr = getBinaryAndDepth(number);
    const paddedBinary = getZeroPaddedBinary(binaryDepthArr[0], binaryDepthArr[1]);
    return isFullBinaryTree(paddedBinary, 0, paddedBinary.length - 1);
  });
}

const a = 8 >> 1;
console.log(a);
