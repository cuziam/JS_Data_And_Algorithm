function solution(picks, minerals) {
  const totalFatigue = 0;
  const fatigues = {
    diamond: {
      diamond: 1,
      iron: 1,
      stone: 1,
    },
    iron: {
      diamond: 5,
      iron: 1,
      stone: 1,
    },
    stone: {
      diamond: 25,
      iron: 5,
      stone: 1,
    },
  };
  while (minerals.length > 0 && picks.some(tool => tool !== 0)) {
    // minerals에서 5개씩 읽어오기
    const fiveMinerals = minerals.splice(0, 5);
    const mineralsCount = {};
    // counter만들기
    fiveMinerals.forEach(name => {
      mineralsCount[name] = (mineralsCount[name] || 0) + 1;
    });
    console.log(mineralsCount);
    // 사용할 도구 고르기
    let toolToUse = '';
    if (mineralsCount.diamond && picks[0] > 0) {
      toolToUse = 'diamond';
      picks[0]--;
    } else if (mineralsCount.iron && picks[1] > 0) {
      toolToUse = 'iron';
      picks[1]--;
    } else if (mineralsCount.stone && picks[2] > 0) {
      toolToUse = 'stone';
      picks[2]--;
    } else {
      picks.forEach;
    }
    console.log(toolToUse);
    // 위에서 고른 도구로 광물을 캤을 때 피로도 구하기
    // let curFatigue=0;
    // for(let mineral in mineralsCount){
    //     curFatigue+=fatigues[toolToUse][mineral]*mineralsCount[mineral];
    // }
    // console.log(curFatigue);
    // totalFatigue+=curFatigue;
  }
  return totalFatigue;
}

solution([1, 3, 2], ['diamond', 'diamond', 'diamond', 'iron', 'iron', 'diamond', 'iron', 'stone']);
// 12
solution(
  [0, 1, 1],
  ['diamond', 'diamond', 'diamond', 'diamond', 'diamond', 'iron', 'iron', 'iron', 'iron', 'iron', 'diamond']
);
// 50
