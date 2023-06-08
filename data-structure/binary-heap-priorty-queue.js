/**
 * <binary heap>
 * 최대 힙(Max binary heap): 부모 노드가 자식 노드보다 큰 값을 가지는 이진 트리.
 * 최소 힙(Min binary heap): 부모 노드가 자식 노드보다 작은 값을 가지는 이진 트리.
 *
 * 이진 힙은 언제나 최적의 용량을 가진다.
 * => 이진 힙은 완전 이진 트리의 형태를 갖춘다.
 * => 즉 균형을 반드시 맞추는 트리이다.
 *
 * 주로 언제 사용하는가?
 * 1. 우선순위 큐를 구현하기 위해서
 * 2. 몇몇 그래프 순회 알고리즘을 구현할 떄
 *
 * 시공간복잡도는?
 * Insertion-O(logN) 보장
 * Removal-O(logN) 보장
 * Search-O(N), 탐색에 좋은 것은 아니다.
 *
 * 여기서 만들어볼 이진 힙은, 일반적인 기법으로 만들지 않을 것이다.
 * 즉 노드를 만들어서 직접 연결하는 방법을 사용하지 않는다.
 * 대신 배열을 활용해서 인덱스를 기반으로 이진 힙 구조를 모형화하는 방식을 사용할 것이다.
 * =>이 방법은 확실히 장점이 있다. 메모리 부분에서나 속도 부분에서나.
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  // insert의 과정
  // 일단 중복되는 값은 들어오지 않는다고 가정한다.
  // 1. Add to the end: 노드를 일단 남는 자리에 붙인다.
  // 2. Bubble up: 부모 노드와 비교해보면서 계속 swap한다.
  insert(value) {
    this.values.push(value);
    this.Bubbleup();
    console.log(this);
  }

  Bubbleup() {
    // 처음 만들었던 방식
    // 배열에 원소가 0 or 1개일 때 idx는 -1, 0이 되며 parentIdx는 -1이 되는 문제가 발생한다.
    // let idx = this.values.length - 1;
    // let parentIdx = Math.floor((idx - 1) / 2);
    // while (this.values[idx] > this.values[parentIdx]) {
    //   [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
    //   idx = parentIdx;
    //   parentIdx = Math.floor((idx - 1) / 2);

    // 따라서 idx의 값이 1 이상 일 때만(루트가 존재할 때) bubbleUp을 해야한다.
    // 두 번째로 만든 방식
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // down-heap하는 메소드이다. 즉 기존의 루트를 제거하고 트리를 재정렬하는 메소드
  // Synonym: sink-down, bubble-down, percolate-down, sift-down... etc...
  // 과정
  // 1. 끝의 원소를 떼서 루트 자리에 넣는다.
  // 2. 루트 노드와 자식 노드의 크기를 비교한 결과에 따라서 위치를 swap한다.
  // 3. 제 위치를 찾아갈 때까지 계속 swap하면 끝!
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
        if (leftChildValue > parentValue) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChildValue = this.values[rightChildIdx];
        if ((swap === null && rightChildValue > parentValue) || (swap !== null && rightChildValue > leftChildValue)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[parentIdx] = this.values[swap];
      this.values[swap] = parentValue;
      parentIdx = swap;
    }
    console.log(this);
  }
}

const heap = new MaxBinaryHeap();
heap.insert(55);
heap.extractMax();

/**
 * <회고>
 * 1.복습이 반드시 필요한 알고리즘이다. 컨셉을 이해하기는 쉬운 편인데 코드로 직접 작성하려고 하니까
 * 중간 중간 막히는 부분이 있었다. 복습할 땐 코드룰 처음부터 직접 작성하는 방식을 사용하자.
 *
 * 2. 기존엔 노드를 만들어서 트리형태로 연결하는 방식을 사용했는데, 이게 더 나아보이긴 한다.
 * 다만 처음 사용해보는 방식이라 그런지 슈도코드만으로 다소 이해하기 힘든 로직이었다.
 * 한 두번씩 정신차리고 차근차근 생각하는 과정이 있었다면, 좀 더 빠르게 이해했을 것 같다.
 */

/**--------------------------------------------------------
 * <priority queue>
 * a data structure where each element has a priority.
 * Elements with higher priorities are served before elements with lower priorities.
 * ex1) 응급실의 대기줄을 생각하면 된다. 위급한 환자를 먼저 처리하고, 안 급한 사람은 나중에 처리한다.
 * ex2) UNIX/LINUX OS에서 nice value를 활용한 우선순위 스케쥴링 기법.
 * => 예전에 스레드 프로그래밍할 떄 nice value를 고정시켜서 시분할 스케쥴링 구현한 적이 있음.
 * => 이때 경험 떠올리면 컨셉을 이해하기 정말 쉬움.
 *
 * <구현방법>
 * 그냥 배열이나 리스트로 구현하면 상당히 비효율적이다. 일반적으로 힙이 최고다.
 */

class Node {
  constructor(value) {
    this.val = value;
    // priority는 랜덤 생성하게 했음.
    this.priority = Math.floor(Math.random() * 1000);
  }
}

class minBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    const newNode = new Node(val);
    this.values.push(newNode);
    this.Bubbleup();
    console.log(this);
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
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
    console.log(this);
  }
}
