/*
<문제>
1.Implement a function called, 'areThereDuplicates'
2.this function accepts 'variable number of arguments'
3.this function checks whether there are any duplicates among the arguments passed in
4.it can use frequency counter pattern or multiple pointers pattern.

<제한사항>
time complexity<=O(N), O(nlogn)일 경우 bonus
space complexity<=O(N), O(1)일 경우 bonus

<예시>
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

<input,output>
의문... 숫자와 문자가 섞이는 경우는 없다고 가정하는 건가. 그럼 이진탐색 가능할듯 하다.
input: 숫자로만 or 문자로만 되어있음. 인자는 여러개가 될 수 있음. 빈값 가능. 각 인자의 길이는 1.
문자의 경우 영어 소문자만으로. 숫자의 경우 자연수로만 이루어졌다고 가정.
output: boolean true or false

<풀이>
arguments 객체에 직접 접근하기.
카운터에 넣고 만약에 카운터가 2이상이면 무조건 return false
go
글
*/
function sameThereDuplicates(...args) {
  // 카운터 생성

  const argsCounter = {};
  // 카운터에 값 넣음
  for (const value of args) {
    argsCounter[value] = (argsCounter[value] || 0) + 1;
  }
  for (const key in argsCounter) {
    if (Object.prototype.hasOwnProperty.call(argsCounter, key)) {
      if (argsCounter[key] > 1) {
        return true;
      }
    }
  }
  return false;
}

console.log(sameThereDuplicates(2, 4, 9, 9, 9));


//다중 포인터
function areThereDuplicates1(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

//한 줄 코드
//Set(<array>)는 array를 Set으로 변경해준다.
//거꾸로 [...<set>]은 Set을 array형태로 변경해준다.
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}