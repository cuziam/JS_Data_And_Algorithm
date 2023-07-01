/*
바탕화면 아이콘 정리

격자형태의 바탕화면이 주어진다.
빈칸은 '.' 파일은 '#'.
드래그를 한 번에 해서 모든 파일을 지우려고 한다.
start to end= left to right
드래그 한 거리는 x,y의 절대값으로 합산
시작점은 어디인가?
startRow:모든 점 중에 가장 작은 row index를 가진 점
startCol:모든 점 중에 가장 작은 col index를 가진 점

끝점은 어디인가?
endRow: 가장 큰 row index+1
endCol: 가장 큰 col index+1

각 점을 어떻게 찾을까?
일단 4개의 변수를 전부 0으로 초기화
전부 순회해서 가장 낮은 row값이 startRow
전부 순회해서 가장 낮은 col값이 startCol
~
#이 마지막으로 나타난 행+1 endRow
wallpaper를 i와 j를 이용하여 순회

*/

function solution(wallpaper) {
  const answer = [];
  const height = wallpaper.length;
  const width = wallpaper[0].length;
  let startRow = height;
  let startCol = width;
  let endRow = 0;
  let endCol = 0;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (wallpaper[row][col] === '#') {
        startRow = row < startRow ? row : startRow;
        startCol = col < startCol ? col : startCol;
        endRow = row + 1 > endRow ? row + 1 : endRow;
        endCol = col + 1 > endCol ? col + 1 : endCol;
      }
    }
  }
  answer.push(startRow, startCol, endRow, endCol);
  return answer;
}
