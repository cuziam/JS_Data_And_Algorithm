2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;

/*
과일 장수의 최대 이익은?
사과엔 1점 이상의 점수가 있다. 최대값은 k다.
사과 한 상자는 m개씩 담는다.
사과 한 상자의 가격은 최하점*m이다.

주어지는 것: 상자당 사과의 갯수, 점수의 최대값, 사과들의 점수
이익이 X: return 0
남는 사과도 버린다...

낮은 점수를 최대한 안 섞어야 한다.

정렬한 후에 m개씩 읽는다.
m개씩 읽었을 때 최소값은 언제나 첫 번째 원소가 된다.
*/
function solution(k, m, score) {
  let result = 0;
  score.sort((a, b) => a - b);
  const endIdx = score.length % m;
  for (let i = score.length - m; i >= endIdx; i -= m) {
    result += score[i] * m;
  }
  return result;
}
