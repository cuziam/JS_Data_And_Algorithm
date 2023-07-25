/*
<반환>
트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동 거리를 return
택배배달을 한다. 배달 다니며 빈 재활용 택배상자를 수거한다.

<입력>
cap은 실을 수 있는 택배의 수

<주의>
각 집에 배달 및 수거할 때, 원하는 개수만큼 택배를 배달 및 수거할 수 있습니다.
인덱스가 아니라 i"번째"로 되어 있다.
보니까 가면서 수거도 같이하지 않는다. 따라서 왕복은 딱 한번만 한다고 가정한다.

<로직 정리>
1. solution
초기에 배달할 상자 수, 수거할 상자 수 계산
while(배달 상자 수===0&&수거 상자 수===0){
    최상단 0제거(분리)
    이동할 거리 계산(=Max(배달 스택의 길이, 수거 스택의 길이))
    answer+=이동할 거리
    남은 배달 상자 수 계산
    남은 수거 상자 수 계산
        (남은 상자 수 계산은 분리)
}
return answer

2. function removeTopZero(arr)
이건 그냥 while문으로 돌리면 된다. no

3. function calculateUsedBoxes(arr,cap){
    let result=0;
    배열 끝에서 부터 순회(for문)
        arr[i]>=cap일 때
            arr[i]-=cap
            result+=cap
            break
        cap에서 arr[i] 빼고, result+=arr[i] arr[i]=0 
    return result
}

*/
function removeTopZero(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) arr.pop();
    else break;
  }
}
function calculateUsedBoxes(arr, cap) {
  let result = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= cap) {
      arr[i] -= cap;
      result += cap;
      break;
    } else {
      cap -= arr[i];
      result += arr[i];
      arr[i] = 0;
    }
  }
  return result;
}

function solution(cap, n, deliveries, pickups) {
  let totalDistance = 0;
  let deliveryBoxCount = deliveries.reduce((acc, cur) => acc + cur);
  let pickupBoxCount = pickups.reduce((acc, cur) => acc + cur);
  while (!(deliveryBoxCount === 0 && pickupBoxCount === 0)) {
    removeTopZero(deliveries);
    removeTopZero(pickups);
    const distance = Math.max(deliveries.length, pickups.length) * 2;
    totalDistance += distance;
    deliveryBoxCount -= calculateUsedBoxes(deliveries, cap);
    pickupBoxCount -= calculateUsedBoxes(pickups, cap);
  }
  return totalDistance;
}
