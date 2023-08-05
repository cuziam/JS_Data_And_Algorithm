class Heap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    if (val === null) return;
    this.values.push(val);
    this.bubbleUp();
    console.log("this: ", this);
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const ele = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (ele > parent) break;
      this.values[parentIdx] = ele;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMin() {
    if (this.values.length === 0) return undefined; // 힙이 비어있는 경우
    const prevRoot = this.values[0];
    let newRoot = this.values.pop();
    if (this.values.length > 0) {
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
      let leftChildIdx = 2 * parentIdx + 1;
      let rightChildIdx = 2 * parentIdx + 2;
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
        if (
          (swap === null && rightChildValue < parentValue) ||
          (swap !== null && rightChildValue < leftChildValue)
        ) {
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
