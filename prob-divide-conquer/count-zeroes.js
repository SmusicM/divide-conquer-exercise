function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length -1;
    while(leftIdx <= rightIdx){
        let midIdx =  Math.floor((leftIdx + rightIdx) /2);
        let midVal = arr[midIdx];

        if(midVal ===0){
            if(midIdx ===0 || arr[midIdx -1]  !== 0){
                return arr.length - midIdx
                //counts subracts length of array to the last zero
                //since sorted arr the zeros can only be together
                //so if arr length is 10 and the zero is idx 5(counting from 0)
                //it would show 6 zeros BECAUSE SORTED ARR
            }
            rightIdx = midIdx -1;
        }else{
            leftIdx = midIdx +1
        }
    }
    return 0 //if no zero return 0
}

//module.exports = countZeroes