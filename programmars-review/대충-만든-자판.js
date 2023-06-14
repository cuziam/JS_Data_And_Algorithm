/**
 * <input,output 분석>
 * keyMap,targets의 길이와 원소의 길이 모두 1이상 100이하다.
 * 문자는 (다행히) 대문자로만 통일되어 있다.
 *
 * <예시분석>
 * 처음에 로직을 어떻게 짜야할 지 감이 오지 않아서 예시를 살펴봤다.
 * keyMap에서
 * <슈도코드>
 */

function solution(keymap, targets) {
  const result = [];
  const tapCountsMap = new Map();
  for (const keypad of keymap) {
    // tapCountsMap에 각 알파벳을 누를 때의 최소값을 저장한다.
    // (최소값은 알파벳이 나타나는 최소 인덱스 + 1)로 표현해야 한다.
    for (let i = 0; i < keypad.length; i++) {
      if (!tapCountsMap.has(keypad[i]) || i + 1 < tapCountsMap.get(keypad[i])) {
        tapCountsMap.set(keypad[i], i + 1);
      }
    }
  }

  // 이제 알파벳을 누를 때 필요한 최소횟수를 Map에 저장했으므로
  // targets 문자열들을 만들 때 필요한 최소횟수도 간단하게 구할 수 있다.
  for (const target of targets) {
    let count = 0;
    for (let i = 0; i < target.length; i++) {
      count += tapCountsMap.get(target[i]);
    }
    result.push(count || -1);
  }
  return result;
}
