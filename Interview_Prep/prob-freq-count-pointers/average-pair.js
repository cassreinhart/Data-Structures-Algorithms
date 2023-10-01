// add whatever parameters you deem necessary
function averagePair(arr, targetAvg) {
    let left = 0; 
    let right = arr.length - 1;

    while (left <= right) {
        let avg = (arr[left] + arr[right] / 2);
        
        if (avg === targetAvg) return true;
        else if (avg < targetAvg || avg - targetAvg < 1) {
            left++
        } else {
            right--
        }
    }
    return false
}
