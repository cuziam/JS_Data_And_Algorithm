class MinHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    if (val === null) return;
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    if (this.values.length === 0) return;
    let idx = this.values.length - 1;
    const value = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (value > parent) break;
      this.values[parentIdx] = value;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMin() {
    if (this.values.length === 0) return undefined;
    const prevRoot = this.values[0];
    if (this.values.length > 1) {
      const newRoot = this.values.pop();
      this.values[0] = newRoot;
      this.sinkDown();
    }
    return prevRoot;
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
        if (leftChildValue < parentValue) swap = leftChildIdx;
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

function solution(n, k, enemy) {
  if (enemy.length <= k) return enemy.length;
  let sum = 0;
  const heap = new MinHeap();
  enemy.slice(0, k).forEach(ele => heap.insert(ele));
  for (let i = k; i < enemy.length; i++) {
    heap.insert(enemy[i]);
    const min = heap.extractMin();
    if (sum + min > n) return i;
    sum += min;
  }
  return enemy.length;
}
