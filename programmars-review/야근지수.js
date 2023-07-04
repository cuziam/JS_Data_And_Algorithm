// 효율성 탈락
function solution(n, works) {
  works.sort((a, b) => b - a);
  while (n > 0) {
    if (works[0] === 0) return 0;
    works[0]--;
    n--;
    if (works[0] < works[1]) works.sort((a, b) => b - a);
  }
  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}

// 그냥 이진 힙 복습할 겸 만들어서 풀어야겠다.
class MaxHeap {
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
    // bubbleup을 하려면 루트가 존재해야 한다.
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
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
        swap = leftChildValue > parentValue ? leftChildIdx : swap;
      }
      if (rightChildIdx < length) {
        rightChildValue = this.values[rightChildIdx];
        if ((rightChildValue > parentValue && swap === null) || (rightChildValue > leftChildValue && swap !== null)) {
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
function solution1(n, works) {
  const heap = new MaxHeap();
  works.forEach(work => heap.insert(work));
  while (n > 0) {
    const max = heap.extractMax();
    if (max <= 0) return 0;
    heap.insert(max - 1);
    n--;
  }
  return heap.array.reduce((acc, cur) => (cur !== null ? acc + cur ** 2 : acc), 0);
}

function solution3(n, works) {
  const sorted_works = [...works].sort((a, b) => b - a);
  let max_work = sorted_works[0];
  while (n > 0) {
    for (let i = 0; i < sorted_works.length; i++) {
      if (max_work === sorted_works[i]) {
        sorted_works[i] -= sorted_works[i] > 0 ? 1 : 0;
        n--;
      }
      if (!n) break;
    }
    max_work--;
    if (!max_work) break;
  }
  return sorted_works.reduce((acc, curr) => acc + curr ** 2, 0);
}
