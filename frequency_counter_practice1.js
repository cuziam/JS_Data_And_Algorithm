/**
 * <문제>
 * Write a function called 'sameFrequency'.
 * 두 개의 자연수를 받는다.
 * 두 자연수가 동일한 숫자를 사용하고 있는지를 확인해라.
 * time complexity는 o(N)이하여야 한다.
 * 
 * <input,output>
 * input 1,2
 * 자연수, 범위제한 없음, 빈값은 없다고 가정
 * 이상적인 값이 들어온다고 가정. 즉 문자열이나 그런 거 X
 * 
 * output boolean(true or false)
 * 
 * <예시>
 * sameFrequency(182,281) // true
    sameFrequency(34,14) // false =>빈도수가 다르다.
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false =>길이가 다르다.
 * 
 * <풀이>
 * 각 숫자의 빈도수를 세야 한다. 자리 수를 넘겨가며 순회를 하고 카운터에 집어넣아야 한다.
 * 인풋이 숫자 자료형이기 때문에 iterable하지 않다. 따라서 지금은 순회가 불가능하다.
 * 따라서 숫자를 iterable한 객체인 문자열로 바꿔준다.(toString)
 * 그 후에 객체 카운터를 두 개 생성한다. {}{}
 * if 문자열의 길이가 다르면 return false 
 * 문자열의 길이가 같으면
 * 문자열을 순회해가며 객체 카운터에 각 문자의 빈도수를 저장한다.(for key in string)
 * 키가 일치하면 +1
 * 두 객체가 일치하면 return true
 * 아니면 false
 */

const sampleNum1 = 234567;
const sampleNum2 = 426573;
function sameFrequency(num1, num2) {
  // * 각 숫자의 빈도수를 세야 한다. 자리 수를 넘겨가며 순회를 하고 카운터에 집어넣아야 한다.
  // * 인풋이 숫자 자료형이기 때문에 iterable하지 않다. 따라서 지금은 순회가 불가능하다.
  // * 따라서 숫자를 iterable한 객체인 문자열로 바꿔준다.(toString)
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  // * 그 후에 객체 카운터를 두 개 생성한다. {}{}
  const freqCounter1 = {};
  const freqCounter2 = {};
  // * if 문자열의 길이가 다르면 return false
  if (freqCounter1.length !== freqCounter2.length) {
    return false;
  }
  // * 문자열의 길이가 같으면
  // * 문자열을 순회해가며 객체 카운터에 각 문자의 빈도수를 저장한다.(for key in string)
  for (const value of strNum1) {
    // * 키가 일치하면 +1
    freqCounter1[value] = (freqCounter1[value] || 0) + 1;
  }
  for (const value of strNum2) {
    freqCounter2[value] = (freqCounter2[value] || 0) + 1;
  }
  console.log(freqCounter1, freqCounter2);

  // * 두 객체가 일치하면 return true
  // * 아니면 false
  for (const key in freqCounter1) {
    if (freqCounter1.hasOwnProperty.call(freqCounter1, key)) {
      if (freqCounter1[key] !== freqCounter2[key]) {
        return false;
      }
    }
  }
  return true;
}
console.log(sameFrequency(22, 222));
