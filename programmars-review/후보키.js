/*
후보키의 갯수를 반환해야한다.
해결방향
1. 슈퍼키를 먼저 찾는다.
=> 속성 중에서 중복값이 안 나타나는 (단일)속성,이 녀석들은 무조건 후보키에 들어간다.
=> 중복되는 튜플이 최대 한 개만 있는 속성 집합?
=> 중복되는 튜플이 
2. 슈퍼키 중에서 최소성을 가진 키를 찾는다.
=>13,34 중복값이 동일하지 않아야함
뭐가 문제지 최소성을 가진 녀석을 어떻게 선택하지?
=>슈퍼키 중에서 
13 234 45=> 슈퍼키는 이렇게도 될 수 있음
13 234 56 중복집합이 서로 아예 안겹치면 그 속성들은 걸러낸다.

중복집합 리스트를 만든다.
중복집합끼리 조합해서 서로 겹치는 원소가 있나 확인한다.(최대 256개의 부분집합이 나올 것이다.)
  있다면 하나이하 인지 확인한다. 하나 이하라면 그 중복집합은 후보키가 된다.
*/
function isUnique(relation, subset) {
  const uniqueSet = new Set();
  for (const row of relation) {
    let key = '';
    for (const idx of subset) {
      key += row[idx];
    }
    if (uniqueSet.has(key)) {
      return false;
    }
    uniqueSet.add(key);
  }
  return true;
}

function isMinimal(candidateKeys, subset) {
  for (const key of candidateKeys) {
    if (key.every(attr => subset.includes(attr))) {
      return false;
    }
  }
  return true;
}

function solution(relation) {
  const numColumns = relation[0].length;
  const columnIndices = Array.from({ length: numColumns }, (_, idx) => idx);
  const candidateKeys = [];

  for (let r = 1; r <= numColumns; r++) {
    const subsets = getCombinations(columnIndices, r);
    for (const subset of subsets) {
      if (isUnique(relation, subset) && isMinimal(candidateKeys, subset)) {
        candidateKeys.push(subset);
      }
    }
  }

  return candidateKeys.length;
}

// getCombinations 함수 구현
function getCombinations(array, r) {
  const combinations = [];
  const indices = Array.from({ length: r }, (_, idx) => idx);

  while (indices[0] <= array.length - r) {
    combinations.push(indices.map(idx => array[idx]));
    let i = r - 1;
    while (i >= 0 && indices[i] === array.length - r + i) {
      i--;
    }
    if (i < 0) {
      break;
    }
    indices[i]++;
    for (let j = i + 1; j < r; j++) {
      indices[j] = indices[i] + j - i;
    }
  }
  return combinations;
}
//-----------------------또 다른 풀이------------------------
function isUnique(relation, subset) {
  const uniqueSet = new Set();
  for (const row of relation) {
    let key = '';
    for (let i = 0; i < row.length; i++) {
      if (subset & (1 << i)) {
        key += row[i];
      }
    }
    if (uniqueSet.has(key)) {
      return false;
    }
    uniqueSet.add(key);
  }
  return true;
}

function isMinimal(candidateKeys, subset) {
  for (const key of candidateKeys) {
    if ((key & subset) === key) {
      return false;
    }
  }
  return true;
}

function solution(relation) {
  const numColumns = relation[0].length;
  const numRows = relation.length;
  const candidateKeys = [];

  for (let bitmask = 1; bitmask < 1 << numColumns; bitmask++) {
    if (!isUnique(relation, bitmask)) {
      continue;
    }

    if (!isMinimal(candidateKeys, bitmask)) {
      continue;
    }

    candidateKeys.push(bitmask);
  }

  return candidateKeys.length;
}

solution([
  ['100', 'ryan', 'music', '2'],
  ['200', 'apeach', 'math', '2'],
  ['300', 'tube', 'computer', '3'],
  ['400', 'con', 'computer', '4'],
  ['500', 'muzi', 'music', '3'],
  ['600', 'apeach', 'music', '2'],
]);
