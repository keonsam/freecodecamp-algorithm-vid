function quickSort(arr) {
    if (!arr || arr.length <= 1) {
        return arr
    }
    const lessThan = [];
    const greaterThan = [];
    const p = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] <= p) {
            lessThan.push(arr[i])
        } else {
            greaterThan.push(arr[i])
        }
    }
    return [ ...quickSort(lessThan) , p , ...quickSort(greaterThan)]
}

const arr = [1, 4, 9, 3, 7, 2, 8, 5, 6]

console.log("arr", quickSort(arr))