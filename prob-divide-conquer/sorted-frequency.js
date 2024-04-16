function sortedFrequency(arr,num) {
  //calculates frequency
  //find index of first time num appears
  let firstIdx = findFirst(arr,num);
  //return first index if num not found
  if(firstIdx == -1)return firstIdx;
  //find index of the last time number appears
  let lastIdx = findLast(arr,num)
  let frequency = lastIdx - firstIdx +1
  //gets frquency adds one because js math starts at 0
  return frequency
}

function findFirst(arr,num){
  let leftIdx = 0;
  let rightIdx = arr.length -1

  while (rightIdx >= leftIdx){
    let midIdx = Math.floor((leftIdx + rightIdx)/2);
     //returns mididx if first times appearing and does it 
     //if mididx is 0 or if the num is higher than prev num in arr
    if((midIdx === 0 || num > arr[midIdx -1]) && arr[midIdx] === num){
      return midIdx
      //keeps searching adjust search
    }else if(num > arr[midIdx]){
      leftIdx = midIdx +1;
    }else{
      rightIdx = midIdx -1;
    }
  }
  return -1 //num doesnt exist
}

function findLast(arr,num){
  let leftIdx = 0;
  let rightIdx = arr.length -1
  
  while (leftIdx <= rightIdx){
    let midIdx = Math.floor((leftIdx + rightIdx)/2);
    //checks last time appearing and returns
    if((midIdx === arr.length -1 || num < arr[midIdx +1]) && arr[midIdx] === num){
      return midIdx
      //keeps searching adjust search
    }else if(num < arr[midIdx]){
      rightIdx = midIdx -1
    }else{
      leftIdx = midIdx +1
    }
  }
  return -1//num doesnt exist
}



  //module.exports = sortedFrequency