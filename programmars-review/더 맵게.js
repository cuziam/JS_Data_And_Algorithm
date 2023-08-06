class Heap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element > parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMin() {
    const previousRoot = this.values[0];
    const newRoot = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = newRoot;
      this.sinkDown();
    }
    return previousRoot;
  }

  sinkDown() {
    let parentIdx = 0;
    const parentValue = this.values[parentIdx];
    const { length } = this.values;

    while (true) {
      const leftChildIdx = 2 * parentIdx + 1;
      const rightChildIdx = 2 * parentIdx + 2;
      let leftChildValue;
      let rightChildValue;
      let swap = null;

      if (leftChildIdx < length) {
        leftChildValue = this.values[leftChildIdx];
        if (leftChildValue < parentValue) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChildValue = this.values[rightChildIdx];
        if ((swap === null && rightChildValue < parentValue) || (swap !== null && rightChildValue < leftChildValue)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[parentIdx] = this.values[swap];
      this.values[swap] = parentValue;
      parentIdx = swap;
    }
  }
}

function solution(scoville, K) {
  let answer = 0;

  // 힙생성과 scoville 힙에 저장
  const scovilleHeap = new Heap();
  scoville.forEach(el => {
    scovilleHeap.insert(el);
  });

  // 스코빌 지수 설정
  while (true) {
    if (scovilleHeap.values[0] >= K) break;
    if (scovilleHeap.values.length <= 1) {
      answer = -1;
      break;
    }
    const low1 = scovilleHeap.extractMin();
    const low2 = scovilleHeap.extractMin();
    scovilleHeap.insert(low1 + low2 * 2);
    answer++;
  }

  return answer;
}
