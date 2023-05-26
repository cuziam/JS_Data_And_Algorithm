/*
<문제>
로봇 강아지 산책 수행
미리 입력된 명령에 따라 수행.
    명령 수행 이전에
    1. 공원 벗어나는지 확인
    2. 장애물을 만나는지 확인
    => 해당 경우엔 다음 명령 수행

좌표칸의 값 H*W 형식
park: 공원 문자열 배열=> 문자열을 쌓으면 모양이 나온다.
routes: 명령 문자열 배열=> op n구조.

최종적인 놓인 위치result를 [H,W]형식으로 리턴하시오.
해야할 것.
1. 루트를 하나씩 읽기.
2. 루트를 읽을 때 park의 장애물 조건을 고려하는 것.
3. 투트를 읽을 때 park의 크기를 고려하는 것.

<로직>
park, routes가 주어짐.

초기위치 계산
초기 위치의 H값은 S가 속한 문자열 원소의 인덱스이다.
초기 위치의 W값은 S가 속한 문자열 원소에서 S가 위치한 인덱스이다.
pos=[undefined,undefined];
for index in park
    if park[index].indexOf('S')
        pos[0]=index
        pos[1]=park[index].indexOf('S')


루트 배열이 빌 때까지 루프 
while routes.length===0
    루트 하나 씩 읽기
    action=routes.shift()
    루트 파싱 및 새 변수에 방향과 거리 저장.
    op=action[0]
    n=action[2]
    루트를 수행했을 때 변화된 위치 계산
    case E:
        pos[1]+=n
    ...
    위치가 공원의 범위를 벗어나는 경우
        아무 일도 하지 않는다.
    움직일 때 장애물을 만나는 경우
        아무 일도 하지 않는다.
    나머지 경우
        위치=변화된 위치

    
*/
