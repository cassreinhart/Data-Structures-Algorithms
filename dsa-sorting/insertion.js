function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; //starts at the second value in arr //the next num to be sorted
        let j = i - 1; //j starts at index 0 (beginning of arr)

        //Move elements of arr[ 0 ... i - 1] that are > key to one place ahead of their current position
        while (j >= 0 && arr[j] > key) { 
            arr[j + 1] = arr[j] //swap value
            j = j - 1; //move backwards to check 
        }
        arr[j + 1] = key; //we don't swap ? Why do we need this line?
    }
    return arr
}
//     j   key
// [4, 20, 12, 10, 7, 9]

function insertionSort2(arr) {
    for (let i = 1; i < arr.length; i++) { //loop forwards starting at our "key" //next num to sort
        let j = i;
        while (j > 0) {
            if (arr[j] < arr[j - 1]) { //key is less than a prev value, so we swap them.
                const temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            }
            j--
        }
        // for (let j = i; j > 0; j--) { //compare our key to the already sorted values
        //     if (arr[j] < arr[j - 1]) { //key is less than a prev value, so we swap them.
        //         const temp = arr[j]
        //         arr[j] = arr[j - 1]
        //         arr[j - 1] = temp
        //     } else break;
        // }
    }
    return arr;
}

module.exports = {insertionSort, insertionSort2};