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
새로운 빈 문자열 newStr 생성
str의 끝을 str.slice(str.length-1)로 얻고. newStr.concat으로 붙인다.
return reverse(str.slice(1))
basecase는 str.length===0이 될 때이다.
*/

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
console.log(reverse('abcde'));
