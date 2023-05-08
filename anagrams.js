/*
아나그램: 어떤 문자를 재배열 하여 다른 뜻을 가지는 다른 단어로 바꾸는 것을 말한다.
ex)
fried=fired
gainly=laying
sadder=dreads

<문제>
두 문자열이 주어졌을 때, 두 번째 문자열이 첫 번째 문자열의 아나그램인지 알아내는 함수를 만들어라.
즉 두 번째 문자열을 재배치하면 첫 번째 문자열이 나오는 가 알아본다.

<input,output>
input: two string
길이 제한: X
숫자: X
특수문자: X
대소문자: 전부 소문자
통신문자: X
빈값 가능?: O

output: boolean
숫자: X

<예시>
'' '' true 빈값일 때 가능
'aaz' 'zza' false 각 문자의 빈도 수가 다르면 false, 반대로 같으면 true 
'dice' 'doc' false 문자열의 길이가 다르면 false

<풀이>
input 문자열의 길이가 다르면 false
input 문자열에서, 각 문자열의 문자 빈도 수 카운트를 저장할 객체인 Counter 2개 생성
for key in string으로 방금 생성한 객체에 문자 빈도 수 저장. 
for key of counter로 counter1과 counter2의 문자 빈도가 일치하는지 확인한다.
*/

str1 = `Korea`;
str2 = `oreaK`;
str3 = `level`;
str4 = `llevv`;

function isAnagram(str1, str2) {
  //input 문자열의 길이가 다르면 false
  if (str1.length !== str2.length) {
    return false;
  }
  //input 문자열에서, 각 문자열의 문자 빈도 수 카운트를 저장할 객체 2개 생성
  let strCounter1 = {};
  let strCounter2 = {};
  //for key in string으로 방금 생성한 객체에 문자 빈도 수 저장.
  for (const value of str1) {
    strCounter1[value] = (strCounter1[value] || 0) + 1;
  }
  for (const value of str2) {
    strCounter2[value] = (strCounter2[value] || 0) + 1;
  }
  console.log(strCounter1, strCounter2);
  //for key of counter로 counter1과 counter2의 문자 빈도가 일치하는지 확인한다.
  for (const key in strCounter1) {
    if (strCounter1[key] !== strCounter2[key]) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram(str1, str2));
console.log(isAnagram(str3, str4));
