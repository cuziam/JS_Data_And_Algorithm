/*
<문제>
1. 함수명 findLongestSubstring
2. input 소문자로 이루어진 문자열
3. output 0이상의 정수
4. returns the length of the longest substring with all distinct characters.

<input,output>
input: 소문자로 이루어진 문자열. 길이 제한X. 빈 값 가능
output: 0이상의 정수. the length of the longest substring with all distinct characters.

<예시>
findLongestSubstring('') // 0 => 빈값일 경우 리턴 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1 => 유니크한 값이 하나라서 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

<풀이>
문제2와 유사해보임. window의 조절해가면서 앞에서 부터 순회한다.
left와 right를 비교해가면서 window의 크기를 조절하는 방식을 쓰겠음
input1: str1
윈도우의 좌측 위치: winLeft,0
윈도우의 우측 위치: winRight,1
윈도우의 길이: winLength,1
최대 윈도우의 길이: maxWinLength, -Infinitiy

str1.length===0라면 0을 반환한다.
str1.length===1이면 1을 반환한다.
winRight가 arr1의 길이가 될 때까지 수행한다.
    str1[left]와 str1[right]가 서로 같다면
        left++
        winLength-=1
    str1[left]가 str1[right]과 동일하지 않다면
        winLength+=1;
        Math.max(winLength,maxWinLength)
        right++
*/
function findLongestSubstring(str1) {
  let longest = 0;
  const seen = {};
  let start = 0;

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}
console.log(findLongestSubstring('bbbbb'));
