function solution(gems) {
  const totalGems = new Set(gems).size; // 전체 보석 종류의 수를 미리 계산
  let distance = Infinity;
  let answer = [];

  for (let i = 0; i < gems.length; i++) {
    const usedSet = new Set();
    let j = i;

    // 현재 보석을 추가하고, 이미 찾은 거리보다 큰 거리에서는 종료
    while (usedSet.size < totalGems && j < gems.length && j - i < distance) {
      usedSet.add(gems[j]);
      j++;
    }

    if (usedSet.size === totalGems && j - i < distance) {
      distance = j - i;
      answer = [i + 1, j];
    }
  }

  return answer;
}

function solution(gems) {
  const totalGems = new Set(gems).size; // 전체 보석 종류의 수를 미리 계산
  let distance = Infinity;
  let answer = [];
  let left = 0;
  let right = 0;
  const counter = new Map();

  while (right < gems.length) {
    counter.set(gems[right], (counter.get(gems[right]) || 0) + 1);
    right++;
    while (counter.size === totalGems) {
      if (right - left < distance) {
        distance = right - left;
        answer = [left + 1, right];
      }
      counter.set(gems[left], counter.get(gems[left]) - 1);
      if (counter.get(gems[left]) === 0) {
        counter.delete(gems[left]);
      }
      left++;
    }
  }
  return answer;
}
