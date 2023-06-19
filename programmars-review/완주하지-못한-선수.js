function solution(participant, completion) {
  var answer = '';
  let counter = {};
  participant.forEach(ele => {
    counter[ele] = (counter[ele] || 0) + 1;
  });
  for (let finisher of completion) {
    if (counter[finisher] >= 2) {
      return finisher;
    }
    if (counter[finisher] === 1) {
      delete counter[finisher];
    }
  }
  return Object.keys(counter)[0];
}

function solution(participant, completion) {
  var answer = '';
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}
