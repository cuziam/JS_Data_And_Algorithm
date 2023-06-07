/**
 * What is tree?
 * 1. 노드로 이루어지짐. 리스트는 선형이지만, 트리는 선형이 아니다.=> 노드에 접근 시에 여러 개의 길이 존재한다.
 * 2. 노드 간의 위계가 있어서 부모 노드와 자식 노드가 존재한다.
 * 3. 용어: root, parent, child, sibling, leaf 노드등이 있다.
 * 4. 부모 노드는 자식 노드를 가리키지만, 거꾸로는 불가능하다. 동일한 깊이의 노드들도 서로 가리키지 못한다.
 * => 오직 루트를 비롯한 부모 노드가 자식을 가리키는 방향을 가리킨다.
 * => 위계가 따로 없는 경우에는 그래프라고 부른다.
 *
 * ex) DOM, Network routing, Abstract Syntax Tree(AST), Artificial Intelligence, Folder.
 *
 * 일단 BST를 먼저 배운다.
 * BST에서 중요한 것은
 * 1. Binary Tree이므로, 자식 노드가 두 개 이하여야 한다.
 * 2. 자식 노드 중 한 쪽은 자신 보다 작은 수만, 다른 한 쪽은 자신보다 큰 수만 놓여야 한다.
 * 3. 중복 노드는 없다고 가정한다.
 *
 * 시간 복잡도는 대개 아래와 같다.
 * Insertion O(logn)
 * Searching O(logn)
 * 하지만 노드가 한쪽 방향으로만 추가되는 경우, 즉 최대값이나 최소값이 들어오는 경우 O(N)이 된다.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // 1. 아래 코드는 중복 노드가 없다고 가정하고 작성했다.
    // 2. 재귀를 사용하지 않는 방식을 사용했음.
    // 3. 만약에 중복노드가 있다면 무한 루프가 발생해버리므로 이를 처리하는 코드를 넣었다.

    const newNode = new Node(value);
    // 루트가 없는 경우
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // 루트가 있는 경우
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) {
        console.log('중복된 값입니다.');
        return undefined;
      }
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // 재귀를 사용해서 만들어본 방식. 코드는 좀 더 짧아지는데 특별히 유용해보이진 않는다.
  insert2(currentNode, value) {
    if (currentNode === null) {
      return new Node(value);
    }

    if (value < currentNode.value) {
      currentNode.left = this.insertNode(currentNode.left, value);
    } else if (value > currentNode.value) {
      currentNode.right = this.insertNode(currentNode.right, value);
    } else {
      console.log('중복된 값입니다.');
    }

    return currentNode;
  }

  find(value) {
    if (this.root === null) {
      console.log('the tree is empty');
      return false;
    }
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value === currentNode.value) {
        // 찾는 값이 있다면 해당 값을 가진 노드 반환.
        return currentNode;
      }
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    // 찾는 값이 없다면 false반환.
    return false;
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(55);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
tree.insert(55);
tree.insert(65);
console.log(tree.find(10));
