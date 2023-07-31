function solution(bridgeLength, weight, truckWeights) {
  let time = 0;
  const bridge = Array(bridgeLength).fill(0);
  const totalWeight = 0;

  while (true) {
    bridge.shift();
    bridge.push(0);
    time++;
    let totalWeight = bridge.reduce((acc, cur) => acc + cur);
    if (totalWeight + truckWeights[0] <= weight) {
      const truck = truckWeights.shift();
      bridge[bridgeLength - 1] = truck;
      totalWeight += truck;
    }
    if (totalWeight === 0) {
      break;
    }
  }
  return time;
}
