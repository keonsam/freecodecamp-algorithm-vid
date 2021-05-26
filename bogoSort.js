function isSorted(values) {
    for(let i = 0; i < values.length - 1; i++) {
        if (values[i] > values[i + 1]) {
            return false;
        }
    }
    return true;
}

function shuffle(arr){
    let count = arr.length, temp, index;

    while(count > 0){
        index = Math.floor(Math.random() * count);
        count--;

        temp = arr[count];
        arr[count] = arr[index];
        arr[index] = temp;
    }

    return arr;
}

function bogoSort(arr) {
    let sorted = false
    let count = 0
    while(!sorted) {
        arr = shuffle(arr)
        sorted = isSorted(arr)
        count++
    }
    console.log("sort count", count)
    return arr
}

const arr = [4, 6, 2, 1, 8, 3, 9]
console.log("unsorted arr", arr)
console.log("sorted arr", bogoSort(arr))
