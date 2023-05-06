//Write a function which takes in a string and returns counts of each charater in the string.
//===============================================================

//1. Understand the problem
    //a. Restate the problem in my own words.
        //어떤 문자열에서 각 문자의 개수를 출력하는 함수를 만들어라.
    //b. Understand inputs and outputs.
        //입력값: 문자열(대,소,숫자)
        //출력값: 객체형태로 출력. 키는 알파벳 소문자, 프로퍼티는 문자의 개수 숫자.
    //c. Check information
    //d. labeling the important pieces of data
//2. Explore concrete examples
    //a. Start with simple examples
        //입력값: "aaaa" "myfather"...
    //b. Progress to complex examples
        //입력값: "My name is yameame320"
        //입력값: "~!civilq'apo"
            //대문자와 소문자는 계산
            //띄어쓰기는 제외
            //특수문자는 제외
        //입력값: "ko핝rf&"
            //한글같은 경우 제외
        //입력값: 없음
            //있는 거 넣으라고 메세지.
//3. Break it down
    //-리턴이 될 객체 생성
    //-처음엔 빈 객체
    //-주어진 문자열에서 문자 하나씩 순회하며 탐색하고 객체 갱신
        //탐색문자==숫자,문자타입 and 객체 내에 탐색 문자 있다
            //문자 개수 카운트 1
        //탐색문자==숫자,문자타입 and 객체 내에 탐색 문자 없다.
            //탐색문자 키 추가 하고, 초기값 1로 세팅
        //탐색문자가 나머지인 경우엔
            //아무일도 안함
    //-객체 리턴