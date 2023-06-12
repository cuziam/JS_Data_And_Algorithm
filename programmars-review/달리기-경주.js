/*

처음 슈도코드: 일부 테스트 케이스에서 시간 탈락
for index in callings
  calledPlayer=callings[index]
  calledPlayerIndex=callings[index]
  playerIdx=players.indexOf(calledPlayer)
  swap(players,playerIdx,PlayerIdx-1)
endloop
return players

문제점 분석: players와 callings의 길이가 상당히 긴 편이다. 근데 지금 로직은 callings와 players의 길이에 비례한다.
결국 indexOf 때문에 속도가 O(N^2)꼴이 되기 때문에 느려지는 듯 하다.
해결방향: indexOf를 사용하지 않고 calledPlayer의 인덱스를 바로 검색할 수 있는 방식을 찾아보자. 

두 번째로 짜본 슈도코드: 로직 문제 발생
Generate map. key=player's name, value=player's index
for index in callings
  calledPlayer=callings[index]
  calledPlayerIndex=callings[index]
  playerIdx=map.get(name)
  swap(players,...)
endloop
return players
문제점: 이 방식으로 접근해보니 추월의 결과를 하나의 Map에 갱신하기가 힘들었다.
해결방향: 두 개의 Map을 활용해보자. + 변수명좀 직관적인 걸로 바꾸자.

세 번째 슈도코드
Generate map1. key=player's name, value=player's index
Generate map2. key=player's index, value=player's name
for index in callings
    calledPlayerName = callings[i];
    calledPlayerRank = playersMap1.get(calledPlayerName);
    calledNewScore = calledPlayerRank - 1;
    frontName = playersMap2.get(calledPlayerRank - 1);
    frontRank = calledPlayerRank - 1;
    frontNewRank = calledPlayerRank;
    swap...
endloop
convert map1 to result<array>
return result
*/

function solution(players, callings) {
  // 키가 경주자 이름, 값이 경주자의 인덱스인 맵.
  // index라는 말 대신 rank라는 단어로 사용
  // 키가 이름, 값이 순위인 map
  const playersMap1 = new Map();
  // 키가 순위, 값이 이름인 map
  const playersMap2 = new Map();
  players.forEach((playerName, rank) => {
    playersMap1.set(playerName, rank);
    playersMap2.set(rank, playerName);
  });
  for (let i = 0; i < callings.length; i++) {
    const calledPlayerName = callings[i];
    const calledPlayerRank = playersMap1.get(calledPlayerName);
    const calledNewScore = calledPlayerRank - 1;
    const frontName = playersMap2.get(calledPlayerRank - 1);
    const frontRank = calledPlayerRank - 1;
    const frontNewRank = calledPlayerRank;

    // swap
    playersMap1.set(calledPlayerName, calledNewScore);
    playersMap1.set(frontName, frontNewRank);
    playersMap2.set(calledPlayerRank, frontName);
    playersMap2.set(frontRank, calledPlayerName);
  }
  const result = [];
  playersMap1.forEach((rank, playerName) => {
    result[rank] = playerName;
  });
  return result;
}
console.log(solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine']));
