function maxPair(str1, str2) {
  /**
   * 두 문자열에서 동일한 숫자(문자)를 찾아내야함.
   * 두 문자열에서 동일한 문자가 나타난다면 나타난 횟수를 기록해야함.=>객체 카운터 만들고 채워야함
   *    for char of str1
   *        counterX[char]=...
   *    for char of str2
   *        counterY[char]=...
   * 나타난 횟수가 더 작은 것을 사용해야 한다.=>1~9의 키값을 이용해서 카운터를 순회해서 더 작은 값만큼 문자열을 채워야함.
   * 카운터에서 값이 0이상인 프로퍼티만 접근
   * 제일 큰 값을 만들기 위해선 키 값이 가장 큰 값을 먼저 문자열에 넣어야 한다.=>역순으로 순회해야 한다.
   *    for(key=9;key>0;key--)
   *        if(counterX[key]>0 and counterY[key]>0)//여기서 key는 문자열로 암묵적형변환 된다.
   *            countPerKey=min(counterX[key],...)
   *            while(countPerKey>0)
   *                result=result.concat(key)
   *                countPerKey--
   *            endloop
   *        endif
   *    endloop
   *    return result;
   *
   * 배열 카운터 보다 객체 카운터가 좋은 경우가 많다.
   * 배열 카운터는 쓸데 없는 공간을 만들 가능성이 높다.
   */
  let result = '';
  const counterX = {};
  const counterY = {};
  for (const char of str1) {
    counterX[char] = (counterX[char] || 0) + 1;
  }
  for (const char of str2) {
    counterY[char] = (counterY[char] || 0) + 1;
  }

  console.log(counterX, counterY);
  for (let key = 9; key >= 0; key--) {
    if (counterX[key] > 0 && counterY[key] > 0) {
      let countPerKey = Math.min(counterX[key], counterY[key]);
      while (countPerKey > 0) {
        result = result.concat(key);
        countPerKey--;
      }
    }
  }
  console.log(result);
  return result;
}
const sam1 = '23948502123';
const sam2 = '123412323';
maxPair(sam1, sam2);
