function findRotatedIndex(arr,val) {
    let leftIdx = 0;
    let rightIdx = arr.length -1;
    //search standard
    while(leftIdx <= rightIdx){
        let midIdx =  Math.floor((leftIdx + rightIdx) /2);
        let midVal = arr[midIdx];
        if(midVal === val){
            return midIdx
            //if its the val is in mididx
        }
        //sorts based on what half of index
        if (midVal <= arr[leftIdx]){
            if(val > midVal && val <= arr[leftIdx]){
                leftIdx = midIdx +1
            }else{
                //keeps search
                rightIdx = midIdx -1
            }
        }else{
            if (val >= arr[leftIdx] && val < midVal){
                rightIdx = midIdx -1;
            }else{
                leftIdx = midIdx +1
            }
        }
    }
    return -1
}






//module.exports = findRotatedIndex