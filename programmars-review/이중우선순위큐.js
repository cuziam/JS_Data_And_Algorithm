function solution(operations) {
  const arr = [];
  for (const operation of operations) {
    const tokens = operation.split(' ');
    const instruction = tokens[0];
    if (instruction === 'I') {
      const data = Number(tokens[1]);
      arr.push(data);
    } else {
      const valueToDelete = (tokens[1] === '1' ? Math.max : Math.min)(...arr);
      arr.splice(arr.indexOf(valueToDelete), 1);
    }
  }
  return arr.length === 0 ? [0, 0] : [Math.max(...arr), Math.min(...arr)];
}

class DualPriorityQueue {
  constructor() {
    this.minHeap = []; // 최소 우선순위 큐
    this.maxHeap = []; // 최대 우선순위 큐
  }

  insert(value) {
    this.minHeap.push(value);
    this.maxHeap.push(value);
    this.heapifyUp(this.minHeap, this.minHeap.length - 1, (a, b) => a - b); // 최소 우선순위 큐를 위한 heapifyUp
    this.heapifyUp(this.maxHeap, this.maxHeap.length - 1, (a, b) => b - a); // 최대 우선순위 큐를 위한 heapifyUp
  }

  deleteMin() {
    if (this.minHeap.length > 0) {
      const min = this.minHeap[0];
      this.swap(this.minHeap, 0, this.minHeap.length - 1);
      this.minHeap.pop();
      this.heapifyDown(this.minHeap, 0, (a, b) => a - b); // 최소 우선순위 큐를 위한 heapifyDown
      this.maxHeap.splice(this.maxHeap.indexOf(min), 1); // 최대 우선순위 큐에서도 삭제
      return min;
    }
    return null;
  }

  deleteMax() {
    if (this.maxHeap.length > 0) {
      const max = this.maxHeap[0];
      this.swap(this.maxHeap, 0, this.maxHeap.length - 1);
      this.maxHeap.pop();
      this.heapifyDown(this.maxHeap, 0, (a, b) => b - a); // 최대 우선순위 큐를 위한 heapifyDown
      this.minHeap.splice(this.minHeap.indexOf(max), 1); // 최소 우선순위 큐에서도 삭제
      return max;
    }
    return null;
  }

  getMin() {
    return this.minHeap.length > 0 ? this.minHeap[0] : null;
  }

  getMax() {
    return this.maxHeap.length > 0 ? this.maxHeap[0] : null;
  }

  heapifyUp(heap, index, compareFn) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (compareFn(heap[index], heap[parentIndex]) >= 0) {
        break;
      }
      this.swap(heap, index, parentIndex);
      index = parentIndex;
    }
  }

  heapifyDown(heap, index, compareFn) {
    const lastIndex = heap.length - 1;
    while (true) {
      let smallest = index;
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      if (leftChild <= lastIndex && compareFn(heap[leftChild], heap[smallest]) < 0) {
        smallest = leftChild;
      }
      if (rightChild <= lastIndex && compareFn(heap[rightChild], heap[smallest]) < 0) {
        smallest = rightChild;
      }
      if (smallest === index) {
        break;
      }
      this.swap(heap, index, smallest);
      index = smallest;
    }
  }

  swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
