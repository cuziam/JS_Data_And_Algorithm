/*
다익스트라 알고리즘은 최단 경로 알고리즘 중에 제일 유명한 알고리즘이다.
다익스트라는 너무 많은 업적을 남겼는데, 그 중에서 다익스트라 알고리즘이 제일 유명하다.
이 알고리즘을 설계한 계기가 좀 어이없기는 하다. => 그냥 커피마시다가 한번 만들어볼까 해서 20분만에 만듬...
사용분야: GPS&navigation, data찾기, 바이러스가 퍼지는 모델 설계, 목적지까지 도착하는 가장 값싼 루트 etc...

선수학습: (가중) 그래프, 우선순위 큐
중요한 것! 어떤 그림을 사용해서 설명했는지 기억하면 알고리즘을 이해하기 편하다.

<컨셉>
A에서 B까지 수많은 노드가 있다. 노드들을 이동할 때 가장 짧은 길이 놓인 쪽으로 이동하자.

알고리즘 만들 때 필요한 것.
1. 시작 정점과 도착 정점을 정한다.
2. 시작 정점에서부터 다른 정점(시작 정점포함)까지 이르는 가장 짧은 거리를 표로 만든다.
=>key=vertex, value=weights
3. 방문한 노드에 대한 리스트를 만든다.=Visited
4. 어떤 노드까지 도착할 때 사용한 그 전 노드를 저장하는 객체를 만든다.=previous

알고리즘 동작 과정.
1. 표에서 시작 정점의 값을 0으로 설정하고, 나머지는 infinity로 설정한다.
2. 현재 방문하는 정점을 택한다.(초기엔 시작정점) 현재 정점과 연결된 간선들을 확인하고, 간선들의 가중치를 이용해서 표,previous를 갱신한다.
3. visited에 현재 정점을 추가한다.
4. 방문하지 않은 정점 중에 표에서 가중치가 가장 작은 정점으로 이동한다.
2,3,4를 반복한다.

가중 그래프를 그려봅시다.
 */

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}
const graph = new WeightedGraph();
graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addEdge('a', 'b', 9);
graph.addEdge('a', 'c', 5);
graph.addEdge('b', 'c', 7);
console.log(graph);
