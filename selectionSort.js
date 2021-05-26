function selectionSort2(arr) {
    // selection sort remove around elements in the array
    for(let i = 0; i < arr.length; i++) {
        let min = i
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

function selectionSort(arr) {
    // selection sort moving elements to sorted array
    const sorted = [];
    while(arr.length > 0) {
        const n = arr.length
        let min = 0
        for(let i = 1; i < n; i++) {
            if(arr[i] < arr[min]) {
                min = i
            }
        }
        sorted.push(arr[min])
        arr.splice(min, 1)
    }
    return sorted
}

const arr = [1, 4, 9, 3, 7, 2, 8, 5, 6]

console.log("arr", selectionSort(arr))