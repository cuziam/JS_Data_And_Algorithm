/**
 * <내 언어로 문제 정리>
 * 예전 휴대폰 자판처럼 된 자판이 있다.
 * 자판의 갯수는 1이상 100이하
 *
 * 여러 문자를 키 바인딩 할 수 있다.
 * 같은 문자가 여러 번 발생할 수 있다.
 * 아예 할당이 안 된 자판도 있다.
 *
 * 키 바인딩 정보는 keyMap에 담겨있다.
 * 문자열은 targets에 주어진다.
 *
 * <input,output>
 * keyMap: 키 바인딩 정보, 문자열이 담겨있는 배열의 형태
 * 배열 길이는 1이상 100이하
 * 문자열(원소) 길이도 1이상 100이하
 *
 * targets: 작성하려는 문자열이 담긴 배열.
 * 이 녀석도 배열 길이와 문자열 길이가 1이상 100이하.
 *
 * output: 최소로 눌러야 하는 횟수
 *
 * 시간초과도 신경써줘야 하는 문제 같다.
 *
 * <예시 관찰>
 * 로직이 한번에 안 떠오르므로 예시들을 관찰해본다.
 * 1번 예시
 * -첫 번째 문자가 키패드의 첫 번째에 존재해야 한다.
 * -키패드에서 첫 번째 문자가 존재하는 키패드를 찾는다.
 * -없다면 바로 리턴 -1
 * -있다면 키패드의 두 번째 문자도 연속으로 존재하는지 확인한다...
 * -...n 번째 문자도 존재하는지 확인한다.
 *
 * -없다면 다른 키패드들의 첫 번째에 존재하는지 찾는다.
 * -없다면 바로 리턴 -1
 * -있다면 키패드에 n번째 문자가 존재하는 키패드를 찾는다.
 * -없다면 다시..
 * =>이제 힌트를 얻었다. 재귀 방법으로 구현할 수 있을 것 같다.
 *
 * 2번 예시
 * targets에 keyMap의 문자가 존재하지 않으면 -1을 리턴한다.
 *
 * <슈도 코드>
 * result<array> 생성
 * count<number> 생성
 * keypadsToUse<array> 생성.
 * for i in targets
 *  for j in targets[i]
 *      keyMap에서 문자열의 첫 번째가 targets[j]인 키패드들을 찾아서 keypadsToUse에 넣는다.
 *      키패드가 없을 때(keypadsToUse가 비어있다면)
 *          i가 0일 때
 *              return -1
 *          i가 1이상이라면 다른 키패드들에서 첫 번째가 targets[i]인 문자열을 찾는다.
 *      있다면
 *          count++
 *  endloop
 *  result.push(count)
 * endloop
 * return result
 */
function solution(keyMap, targets) {
  const result = [];
  let keypadsToUse = [];
  let count = 0;
  for (let i = 0; i < targets.length; i++) {
    for (let j = 0; j < targets[i].length; j++) {
      keypadsToUse = keypadsToUse.filter(keypad => targets[i][j] === keypad[j]);
      if (!keypadsToUse && j === 0) {
        result.push(-1);
        break;
      }
      if (!keypadsToUse) break;
      count++;
    }
    result.push(count);
  }
  return result;
}
console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
