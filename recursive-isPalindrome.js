/*
<문제>
Write a recursive function called isPalindrome
which returns true
if the string passed to it is a palindrome(reads the same forward and backward)
Otherwise it returns false.

<input,output>
input: string, 전부 소문자 알파벳. 빈 문자열은 없다고 가정
output: string, 전부 소문자 알파벳

<예시>
// isPalindrome('a') true? => 내가 만든 예시
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
<풀이>
문자열의 양끝이 동일한지 찾고 동일하면 해당 원소들 삭제.
문자열 양끝에서 부터 순회를 하되, 서로의 인덱스가 동일해지거나, 앞의 포인터 인덱스가 더 커지면 순회를 종료하고 반환해야함.

input은 arr로 명명
left=0;
right=arr.length-1;
if(arr[left]===arr[right]){
    return()
}
*/
function isPalindrome(str) {
  const left = str[0];
  const right = str[str.length - 1];
  if (left !== right) {
    return false;
  }
  if (str.length <= 1) {
    return true;
  }
  return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome('amanaplanacanalpandemonium'));
console.log(isPalindrome('amanaplanacanalpanama'));

// 사실 재귀적 방식 보다 이게 더 나은 것 같다. 굳이 콜스택 쌓아가면서 해야할 이유가 있나.
// 간결해지는 것도 아니고.
function isPalindrome2(str) {
  let left = 0;
  let right = str.length - 1;
  while (str[left] < str[right]) {
    if (left !== right) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome2('amanaplanacanalpandemonium'));
console.log(isPalindrome2('amanaplanacanalpanama'));
