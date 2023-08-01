/**
중복조합으로 풀 수도 잇을 것 같다.
3^5=243 정도 밖에 안된다.
*/

function findAllCombination(arr, length) {
  // base case
  if (length === 1) return arr.map(ele => [ele]);
  // recursive case
  const combinations = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = findAllCombination(arr, length - 1);
    for (let j = 0; j < rest.length; j++) {
      combinations.push([arr[i], ...rest[j]]);
    }
  }
  return combinations;
}

function solution(picks, minerals) {
  let totalFatigue = 0;
  const fatigues = [
    {
      diamond: 1,
      iron: 1,
      stone: 1,
    },
    {
      diamond: 5,
      iron: 1,
      stone: 1,
    },
    {
      diamond: 25,
      iron: 5,
      stone: 1,
    },
  ];
  minerals = minerals.slice(
    0,
    picks.reduce((acc, cur) => acc + 5 * cur, 0)
  );
  let fiveMineralsArr = [];
  while (minerals.length > 0) {
    const fiveMinerals = minerals.splice(0, 5);
    const mineralsCount = {};
    fiveMinerals.forEach(name => {
      mineralsCount[name] = (mineralsCount[name] || 0) + 1;
    });
    fiveMineralsArr.push([fiveMinerals, mineralsCount]);
  }
  fiveMineralsArr = fiveMineralsArr
    .sort((a, b) => {
      const aDiamond = a[1].diamond || 0;
      const bDiamond = b[1].diamond || 0;
      if (aDiamond === bDiamond) {
        return (b[1].iron || 0) - (a[1].iron || 0);
      }
      return bDiamond - aDiamond;
    })
    .map(ele => ele[0]);
  console.log(fiveMineralsArr);
  let toolIdx = picks[0] ? 0 : picks[1] ? 1 : 2;
  for (const fiveMinerals of fiveMineralsArr) {
    totalFatigue += fiveMinerals.reduce((acc, cur) => acc + fatigues[toolIdx][cur], 0);
    if (--picks[toolIdx] <= 0) toolIdx++;
    if (picks.every(ele => ele === 0)) return totalFatigue;
  }
  return totalFatigue;
}

solution([1, 3, 2], ['diamond', 'diamond', 'diamond', 'iron', 'iron', 'diamond', 'iron', 'stone']);
// 12
// solution(
//   [0, 1, 1],
//   ['diamond', 'diamond', 'diamond', 'diamond', 'diamond', 'iron', 'iron', 'iron', 'iron', 'iron', 'diamond']
// );
// 50
