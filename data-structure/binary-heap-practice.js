// 최대힙 처음부터 끝까지 힌트없이 만들어보기
class Node {
  constructor(val) {
    this.val = val;
  }
}

class MaxBinaryHeap {
  constructor() {
    // test case1
    this.data = [22, 9, 10, 2, 4, 6, 8];
  }

  insert(val) {
    const newNode = new Node(val);
    this.data.push(newNode.val);
    this.bubbleUp();
    console.log(`this.data: ${this.data}`);
  }

  bubbleUp() {
    let idx = this.data.length - 1;
    const element = this.data[idx];

    // bubbleup을 하기 위해선 루트가 존재해야하므로 idx값이 0이상이 되어야 한다.
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parentValue = this.data[parentIdx];
      if (element <= parentValue) break;
      this.data[parentIdx] = element;
      this.data[idx] = parentValue;
      idx = parentIdx;
    }
  }

  extractMax() {
    const previousRoot = this.data[0];
    const newRoot = this.data.pop();
    // data가 비어있으면 힙을 갱신할 필요가 없으므로, if의 표현식으로 이에 대한 부분 처리.
    if (this.data.length > 0) {
      this.data[0] = newRoot;
      this.heapDown();
    }
    return previousRoot;
  }

  heapDown() {
    let parentIdx = 0;
    const parentValue = this.data[parentIdx];
    const { length } = this.data;

    // heapdown을 하려면 child node의 index가 this.data.length보다 작아야 한다.
    while (true) {
      // 처음에 변수 선언부를 루프밖에 놓고 있어서 무한루프가 발생하는 버그가 발생했다.
      // 잘 안되면 디버깅 or 머릿속으로 차근차근 생각.

      const leftChildIdx = 2 * parentIdx + 1;
      const rightChildIdx = 2 * parentIdx + 2;
      let leftChildValue;
      let rightChildValue;
      let idxToSwap = null;

      if (leftChildIdx < length) {
        leftChildValue = this.data[leftChildIdx];
        if (leftChildValue > parentValue) {
          idxToSwap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChildValue = this.data[rightChildIdx];
        if (
          (idxToSwap === null && rightChildValue > parentValue) ||
          (idxToSwap !== null && rightChildValue > leftChildValue)
        ) {
          idxToSwap = rightChildIdx;
        }
      }
      if (idxToSwap === null) break;
      this.data[parentIdx] = this.data[idxToSwap];
      this.data[idxToSwap] = parentValue;
      parentIdx = idxToSwap;
    }
    console.log(`this.data: ${this.data}`);
  }
}
const maxHeap = new MaxBinaryHeap();
maxHeap.insert(67);
maxHeap.extractMax();
