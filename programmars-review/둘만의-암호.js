function solution(s, skip, index) {
  // 시간효율을 위해 skip 문자열의 코드정보를 set에 저장했다.
  const skipArr = skip.split('').map(ele => ele.charCodeAt(0));
  const skipChars = new Set(skipArr);
  const resultArr = s.split('').map((char, idx) => {
    // s의 문자를 하나씩 읽음
    let charCode = char.charCodeAt(0);
    let count = index;
    while (count > 0) {
      charCode++;
      charCode = charCode > 122 ? charCode - 26 : charCode;
      if (!skipChars.has(charCode)) {
        count--;
      }
    }
    return charCode;
  });
  return String.fromCharCode(...resultArr);
}
