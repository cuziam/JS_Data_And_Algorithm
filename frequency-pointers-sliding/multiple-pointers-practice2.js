/*
<문제>
1. Write a function "isSubsequence"
2. input: two strings
3. the function checks whether the characters in the first string
form a subsequence of the characters in the second thing.
4. No order changing

즉 첫 번째 문자열에 나타난 문자가 두 번째 문자열에 나타나는가를 묻는 문제이다.
대신 첫 번째 문자열의 문자 순서가 뒤바뀌는 일은 없어야 한다.

<제한 사항>
time-O(N+M)
space-O(1)

<예시>
isSubsequence('hello', 'hello world'); // true hello가 그대로 잘있음
isSubsequence('sing', 'sting'); // true sing이 분리되어 있지만 순서대로
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters) 순서가 바뀌었음

<input,output>
input: 문자열 두 개, 대소문자 구별 없음. 빈문자 없다고 일단 가정. 출력 및 제어문자 X.
대소문자 알파벳과 숫자 스페이스만 등장한다고 가정한다.
output: boolean(true or false), 숫자는 No

<풀이>
문자열 포인터 생성
두 번째 문자열이 끝에 다다를때까지 실행한다.{
첫 번째 문자열 포인터가 가리키는 값을 두 번째 문자열에서 앞에서 부터 찾는다.
만약 없다면 return false
있다면 첫 번째 문자열의 포인터를 두 번재 문자열의 인덱스로 옮긴다(재할당한다).
}
*/
function isSubsequence(str1, str2) {
  // 문자열 포인터 생성
  let i = 0;
  let j = 0;
  if (!str1) return true; // 빈값이면 return true
  if (str1.length > str2.length) return false; // str1이 더 길면 return false
  // 두 번째 문자열이 끝에 다다를때까지 실행한다
  // 첫 번째 문자열 포인터가 가리키는 값을 두 번째 문자열에서 앞에서 부터 찾는다.
  while (j < str2.length) {
    // 만약 있다면 첫 번째 문자열 포인터 증가
    if (str1[i] === str2[j]) i++;
    // 첫 번째 문자열 포인터가 str1의 length가 return true
    if (i === str1.length) return true;
    j++;
  }
}
console.log(isSubsequence('abcd', 'abc'));

// O(1)공간이 아닌 재귀방식
function isSubsequence2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence2(str1.slice(1), str2.slice(1));
  return isSubsequence2(str1, str2.slice(1));
}
