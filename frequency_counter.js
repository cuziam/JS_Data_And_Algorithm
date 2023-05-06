/*
객체를 이용하여 다양한 값과 빈도를 수집하는 것
주로 배열이나 문자열에서 중첩루프를 사용하는 것을 방지하기 위해서 사용한다.

두 개의 배열을 허용하는 'same'이라는 함수를 작성해라.
어떤 배열의 모든 값이 다른 배열의 모든 값을 제곱한 것과 동일하면 참을 반환해야 한다.
값들은 섞일 수 있지만 빈도는 동일해야 한다.

same([1,2,3],[1,4,9]) true => 단순, 순서대로 있는 경우
same([1,2,3],[1,9,4]) true => 순서대로 있지 않은 경우
same([1,2,3],[1,9]) false => 길이가 다른 경우
same([1,2,1],[4,4,1]) false => frequency가 다른 경우.
same([1,4,9],[1,2,3]) true => arr1이 arr2보다 큰 경우 
input= 두 개의 배열이고 원소는 전부 원시 타입 숫자라고 가정한다.
output= 불리언값


두 배열의 길이가 다르면 false
두 배열의 길이가 같다면
    arr1과 arr2를 오름차순으로 정렬한다. //정렬하면 순서 문제를 빠르게 해결.
    arr1의 원소를 하나씩 순회
        arr1의 원소^2===arr2의 원소인지 확인한다.
        만약 아니면 ret false
    순회가 다 끝났다면 ret true
내가 푼 방식
*/
const sampleArr1 = [1, 2, 3];
const sampleArr2 = [1, 9, 4];

function same(arr1, arr2) {
  // 두 배열의 길이가 다르면 false
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    //두 배열의 길이가 같다면
    //arr1과 arr2를 오름차순으로 정렬한다. 정렬하면 순서 문제를 빠르게 해결.
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    // arr1의 원소를 하나씩 순회
    for (let i in arr1) {
      //arr1의 원소^2===arr2의 원소라면 리턴 false
      if (arr1[i] * arr1[i] !== arr2[i]) {
        return false;
      }
    }
    //위 과정을 전부 통과하면
    return true;
  }
}
//O(N)을 가지는 알고리즘이다.
console.log(same(sampleArr1, sampleArr2));
console.log(sampleArr1);
console.log(sampleArr2);

//a맘에
