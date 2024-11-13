function solution(participant, completion) {
  const answer = '';
  const counter = {};
  participant.forEach(ele => {
    counter[ele] = (counter[ele] || 0) + 1;
  });
  for (const finisher of completion) {
    if (counter[finisher] >= 2) {
      return finisher;
    }
    if (counter[finisher] === 1) {
      delete counter[finisher];
    }
  }
  return Object.keys(counter)[0];
}

function solution2(participant, completion) {
  const answer = '';
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

function solution3(participant, completion) {
  participant.sort();
  completion.sort();
  for (const i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
