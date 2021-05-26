let count = 0

function binarySearch(list, target) {
    let start = 0
    let end = list.length - 1
    while(start <= end) {
        let mid = Math.floor((start + end)/2)
        if(list[mid] === target) {
            return mid
        }
        if(list[mid] > target) {
            end = mid - 1
        }else if (list[mid] < target) {
            start = mid + 1
        }
    }
    return null
}

function binarySearch2(list, target, start=0, end=list.length - 1) {
    let mid = Math.floor(((start+end)/2))
    if (start > end ) {
        return null
    }
    if (list[mid] === target) {
        return mid
    }

    if (list[mid] > target) {
        return binarySearch(list, target, start, mid - 1)
    }
    if (list[mid] < target) {
        return binarySearch(list, target, mid + 1, end)
    }
}

const list = [1,2,3,4,5,6,7,8,9,10]
console.log("position intertively 6:", binarySearch(list, 6))
console.log("position recursively 7", binarySearch2(list, 7))