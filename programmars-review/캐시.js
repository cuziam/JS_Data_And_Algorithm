/*
캐시 크기에 따른 실행시간 측정 프로그램
<입력> 
도시이름:대소문자 알파벳으로 구성된 영문자.
캐시사이즈: 0이상 30이하 정수
<출력>
캐시 크기에 따른 실행시간: 0이상의 정수(캐시사이즈가 0이상이므로)

<주의>
캐시사이즈가 0이 가능하다.
캐시교체 알고리즘은 LRU이다.
대소문자.

<접근>
LRU알고리즘이 내가 알고있는 게 맞는지부터 확인.=>맞는 것 같다.
캐시는 (우선순위) 큐로 구현해야한다.
    1번 방법:가장 편한 것은 당연히 shift와 push다.
    2번 방법(naive approach):캐시 크기가 지금 최대 30밖에 안되는 걸 이용한다?=>그래도 최대 300만번 계산한다.
    3번 방법: 직접 구현
1->3 순으로 시도해보기
*/
function solution(cacheSize, cities) {
  const cache = [];
  return cacheSize === 0
    ? cities.length * 5
    : cities.reduce((acc, cur, idx) => {
        // 소문자로 통일하기
        cur = cur.toLowerCase();
        // 캐시 큐에 있나 확인
        if (cache.includes(cur)) {
          cache.splice(cache.indexOf(cur), 1);
          cache.push(cur);
          acc += 1;
        } else {
          // 캐시 큐에 없는 경우 처리
          if (cache.length === cacheSize) cache.shift();
          cache.push(cur);
          acc += 5;
        }
        return acc;
      }, 0);
}
