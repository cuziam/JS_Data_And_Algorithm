/*
택배기사님의 지시에 따라 택배를 쌓아야 한다.
보조컨테이너에 다른 택배를 넣음(stack임)
*/

function solution(order) {
  const loaded = [];
  const conveyerBelt = [];
  const boxnum = 0;
  let i = 0;
  for (let boxnum = 1; boxnum <= order.length; boxnum++) {
    if (boxnum !== order[i]) {
      conveyerBelt.push(boxnum);
    } else {
      loaded.push(boxnum);
      i++;
      while (i < order.length && order[i] === conveyerBelt[conveyerBelt.length - 1]) {
        loaded.push(conveyerBelt.pop());
        i++;
      }
    }
  }
  return loaded.length;
}
