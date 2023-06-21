/*
비내림차순 수열에서 부분 수열을찾는다.
1.두 인덱스와 그 사이 원소
2.부분 수열의 합=k인 수열
3.합이 k인 부분이 여러 개인 경우 제일 짧은 수열을 찾는다!
4.제일 짧은 수열도 여러 개일 경우 앞쪽 인덱스가 가장 작은 수열을 찾는다.
반환값: 시작 인데스와 마지막 인덱스

접근 방법
1,2 => 슬라이딩 윈도우를 사용해서 윈도우 내의 합이 k인지 계산한다.
3 => 만약 슬라이딩 윈도우를 뒤쪽에서 시작하면 쉽게 충족. 윈도우 내의 합이 k를 만족할 때&&right-left가 기존의 것보다 짧을 때 정답을 갱신해나가면 된다.
4 => 만약 슬라이딩 윈도우를 앞쪽에서 시작하면 쉽게 충족.

나는 윈도우를 앞쪽에서 시작하는 방식을 사용했다.
*/

// left는 윈도우의 왼쪽 인덱스, right는 윈도우의 오른쪽 인덱스임.
function solution(sequence, k) {
  let result;
  let sum = sequence[0];
  let right = 0;
  let gap = sequence.length - 1;
  for (let left = 0; left < sequence.length; left++) {
    while (sum < k && right < sequence.length) {
      right += 1;
      sum += sequence[right];
    }
    if (sum === k && right - left < gap) {
      result = [left, right];
      gap = right - left;
    }
    sum -= sequence[left];
  }
  return result;
}
