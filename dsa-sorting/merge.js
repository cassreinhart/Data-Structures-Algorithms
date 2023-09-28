function merge(arr1, arr2) {
    let out = [];
    let a = 0;
    let b = 0;

    while (a < arr1.length && b < arr2.length) {
        let swapped = false;

        if (arr1[a] < arr2[b]) {
            out.push(arr1[a])
            a++
            swapped = true;
        } else {
            out.push(arr2[b])
            b++
            swapped = true;
        }
        if (!swapped) break;
    }
    while (a < arr1.length) {
        out.push(arr1[a])
        a++
    }
    while (b < arr2.length) {
        out.push(arr2[b])
        b++
    }
    return out;
}

function mergeSort(arr) {
    //base case
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.splice(0, mid))
    let right = mergeSort(arr.splice(mid))
    
    merge(left, right)
}

module.exports = { merge, mergeSort};