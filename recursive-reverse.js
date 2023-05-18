/*
<문제>
write a recursive function called reverse which accepts a string and returna new string in reverse.

<input,output>
input: string, 전부 소문자 알파벳. 빈 문자열은 없다고 가정
output: string, 전부 소문자 알파벳

<예시>
reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'

<풀이>
문자열리터럴은 값을 바꿀 수 없다. 따라서 복사해서 이용해야 한다.
인자이름은 str로
배열을 끝부분만 남기고 끝에서 부터 하나씩 더하는 방식. 재귀함수의 입력값은 다음 실행되는 재귀함수의 출력값이다.
*/

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse('abcde'));
