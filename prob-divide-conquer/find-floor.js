function findFloor(arr,floor) {
  let leftIdx = 0;
  let rightIdx = arr.length -1;
  let floorVal = -1
  while(leftIdx <= rightIdx){
    let midIdx = Math.floor((leftIdx + rightIdx) /2);
    if(arr[midIdx] <= floor){
        floorVal = arr[midIdx];
        leftIdx = midIdx +1
    }else{
        rightIdx = midIdx -1
    }
  }
    return floorVal
}

//module.exports = findFloor