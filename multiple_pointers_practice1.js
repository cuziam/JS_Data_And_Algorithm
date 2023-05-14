/* <문제>
function name: averagePair()
input:sorted array, target average
Determine if there is a pair of values in the array where the average of the pair equals the target average.
There may be more than one pair that matches the average target.

<예시>
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],4) // true
averagePair([-1,0,3,4,5,9], 4.1) // false
averagePair([],4) // false

<input,output>
인수는 두 개만 딱 들어온다고 가정.
input1: 0이상 정수 배열. 오름차순으로 정렬되어있음. 빈값 가능. 배열 길이 제한 없음.
input2: 부동소수점 값 하나.

<풀이>

*/
function averagePair(sampleArr,target){
    let left=0;
    let right=sampleArr.length-1;
    while(left<right){
        let average=(sampleArr[left]+sampleArr[right])/2
        if(average===target){
            return true
        }else if(average<target){
            left+=1;
        }else{
            right-=1;
        }
    }
    return false;
}
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));