//assign 1st element to be smallest "minimum" value
//compare minimum to next value until you find a smaller number
//if a smaller num is found, designate it to be the new minimum and continue to the end of the array.
//if the minimum is not the initial value, swap the two values

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        } //flip the values of minIdx w/ arr[i]
        let temp = arr[i];
        arr[i] = arr[minIdx]
        arr[minIdx] = temp
       
        // [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; //use array destructuring to swap?
    }
    return arr;
}

module.exports = selectionSort;