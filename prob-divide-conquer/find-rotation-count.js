function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length -1;
   
   while(leftIdx <= rightIdx){
     //return 0 if no rotations
      if(arr[leftIdx] <= arr[rightIdx]){
        return leftIdx
      }
      let midIdx = Math.floor((leftIdx+rightIdx)/2)
      //gets next index using modulo
      let nextIdx = (midIdx + 1) % arr.length
      //gets prev , uses modulo so we can stay in bounds of index's
      let prevIdx = (midIdx + arr.lengthc-1)% arr.length

      if(arr[midIdx] <= arr[nextIdx] && arr[midIdx] <= arr[prevIdx]){
        return midIdx
        //where it rotates return if mididx is less than or equal to next or prev idx
      }
      //ajust where the searh needs to be , right or left some
      if (arr[midIdx] <= arr[rightIdx]){
        rightIdx = midIdx -1
      }else{
        leftIdx = midIdx +1
      }
   }
   //return -1
   //if no rotation is in play
}

//module.exports = findRotationCount