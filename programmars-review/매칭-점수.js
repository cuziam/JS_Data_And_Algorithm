/*
접근 방향
1.이 코드로 면접을 볼 것이라고 가정함. 단방향 연결리스트로 자료형 직접 구현해보기
2.코드가 길더라도 가독성 좋고 사용하기 편한 자료구조 지향.
3.채점이 완료되면 다른 방법으로도 풀어보기.

기본점수:HTML에서 해당 문자열이 나타나는 횟수
=>대소문자 구분 X, 알파벳을 제외한 다른 모든 문자로 구분한다.
외부링크 수: 현재 웹페이지 to 다른 웹페이지의 연결의 수
링크점수:현재 웹페이지에 연결되어 있는 웹페이지의 점수/외부링크 수
매칭점수=기본점수+링크점수

반환값: 가장 높은 매칭점수를 가진 웹페이지의 인덱스(여러 개일 경우 인덱스가 가장 작은 것)

Node
constructor
    this.url/string
    this.href/{}(Set)
    this.baseScore/integer>=0
    this.linkScore/integer>=0
    this.linkCounts/integer>=0
    this.score/integer>=0
    this.index/integer>=0
Graph
constructor
    this.nodes/{}
addVertex(node)
addEdge(node)//이건 일반적인 경우랑 다르긴 하지만 가능
getNeighbors(node)
countIncomingNeighbors(node)
findMaxScoreIndex()
*/

class Node {
  constructor(word, page, index) {
    // 웹페이지의 url 정의
    const urlPattern = /<meta property="og:url" content="([^"]+)"/i;
    const url = page.match(urlPattern)[1];
    this.url = url;
    // 이 웹페이지가 연결한 다른 웹페이지들의 url들 정의
    const hrefPattern = /<a\shref="([^"]+)">/g;
    const hrefsTags = page.match(hrefPattern) || [];
    this.hrefs = new Set();
    hrefsTags.forEach(hrefTag => {
      const match = hrefTag.match(/<a href="([^"]+)">/);
      return match ? this.hrefs.add(match[1]) : null;
    });
    // 인덱스 정의
    this.index = index;
    // 기본 점수 정의(문자열이 나타난 횟수)
    const wordCountsPattern = new RegExp(`(?<=^|[^a-zA-Z])${word}(?=[^a-zA-Z]|$)`, 'gi');
    this.baseScore = (page.match(wordCountsPattern) || []).length;
    console.log(url, this.baseScore);
    // 외부 링크의 수, 링크 점수 정의(기본점수/외부 링크의 갯수)
    this.linkCounts = this.hrefs.size;
    this.linkScore = 0;
    // 총점 정의
    this.matchingScore = null;
  }
}

function solution(word, pages) {
  const nodeInfo = {};
  for (let i = 0; i < pages.length; i++) {
    const node = new Node(word, pages[i], i);
    nodeInfo[node.url] = node;
  }
  // linkScore 계산
  Object.values(nodeInfo).forEach(node => {
    node.hrefs.forEach(href => {
      if (nodeInfo[href]) {
        nodeInfo[href].linkScore += node.baseScore / node.linkCounts;
      }
    });
  });
  // matchingScore 계산 및 최고점수의 index 리턴
  let max = 0;
  let result = 0;
  Object.values(nodeInfo).forEach(node => {
    node.matchingScore = node.baseScore + node.linkScore;
    if (max < node.matchingScore) {
      max = node.matchingScore;
      result = node.index;
    }
  });
  return result;
}
const word = 'blind';
const pages = [
  '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://a.com"/>\n</head>  \n<body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. \n<a href="https://b.com"> Link to b </a>\n</body>\n</html>',
  '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://b.com"/>\n</head>  \n<body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n<a href="https://a.com"> Link to a </a>\nblind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n<a href="https://c.com"> Link to c </a>\n</body>\n</html>',
  '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://c.com"/>\n</head>  \n<body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n<a href="https://a.com"> Link to a </a>\n</body>\n</html>',
];
const word2 = 'Muzi';
const pages2 = [
  '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://careers.kakao.com/interview/list"/>\n</head>  \n<body>\n<a href="https://programmers.co.kr/learn/courses/4673"></a>0muzi0muzi0#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>',
  '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://www.kakaocorp.com"/>\n</head>  \n<body>\ncon%\tmuzI92apeach0lal&2<a href="https://hashcode.co.kr/tos"></a>\n\n\t^\n</body>\n</html>',
];
solution(word, pages);
solution(word2, pages2);
