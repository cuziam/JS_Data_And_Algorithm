/*
다리=queue
대기 줄=stack으로 봐도 되고, queue로 봐도 됨. 어차피 입력이 없고 출력만 하므로 상관없음

stack.pop()
*/

function solution(bridgeLength, weight, truckWeights) {
  truckWeights.reverse(); // shift가 느리므로 pop을 쓸 수 있도록 만들어줌
  const bridge = [];
  let totalWeight = 0;
  let seconds = 0;
  while (truckWeights.length > 0) {
    const curTruckWeight = truckWeights.pop();
    // 무게가 초과하는 경우나 트럭이 모두 다리로 옮겨졌다면 계속 dequeue
    while (totalWeight + curTruckWeight > weight) {
      totalWeight -= bridge.shift();
      seconds += bridgeLength;
      console.log(bridge);
    }
    if (totalWeight + curTruckWeight <= weight) {
      bridge.push(curTruckWeight);
      totalWeight += curTruckWeight;
      console.log(bridge);
    }
  }
  return seconds + bridge.length * bridgeLength;
}
