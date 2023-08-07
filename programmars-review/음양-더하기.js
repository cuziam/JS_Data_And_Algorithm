function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < absolutes.length; i++) {
    result += signs[i] === true ? absolutes[i] : -absolutes[i];
  }
  return result;
}
