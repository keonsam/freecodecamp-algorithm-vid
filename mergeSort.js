function split(list) {
    const h = Math.floor(list.length / 2);
    const left = list.slice(0, h);
    const right = list.slice(h)
    return [left, right]
}

function merge(left, right) {
    let i = 0
    let j = 0
    const arr = []
    while (i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            arr.push(left[i])
            i++
        }else {
            arr.push(right[j])
            j++
        }
    }

    if (i !== left.length) {
        arr.push(...left.slice(i))
    }

    if (j !== right.length) {
        arr.push(...right.slice(j))
    }

    return arr
}

function mergeSort(list) {
    if (list.length === 1) {
        return list
    }
    const [left, right] = split(list)
    const leftSide = mergeSort(left)
    const rightSide = mergeSort(right)
    return merge(leftSide, rightSide)
}

const list = [4,3,6,1,9,7,8,5,2, 12, 15, 62, 744, 21, 64, 334]
console.log(mergeSort(list))