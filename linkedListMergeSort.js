const LinkedList = require("./linkedList")

function split(list) {
    // divide linked list at mid point
    if (list === null || list.head === null) {
        const left = list
        const right = null
        return [left, right]
    }

    const count = list.size()
    const h = Math.floor(count / 2)
    const mid = list.nodeAtIndex(h - 1)
    const left = list
    const right = new LinkedList()
    right.head = mid.next
    mid.next = null
    return [left, right]
}

function merge(left, right) {
    // merges two linked list
    const merged = new LinkedList()
    merged.add(0)
    let current = merged.head
    let leftHead = left.head
    let rightHead = right.head
    while(leftHead || rightHead) {
        if (leftHead === null) {
            current.next = rightHead
            rightHead = rightHead.next
        } else if (rightHead === null) {
            current.next = leftHead
            leftHead = leftHead.next
        }else {
            const leftData = leftHead.data
            const rightData = rightHead.data
            if (leftData < rightData) {
                current.next = leftHead
                leftHead = leftHead.next
            } else {
                current.next = rightHead
                rightHead = rightHead.next
            }
        }
        current = current.next
    }
    merged.head = merged.head.next
    return merged
}

function mergeSort(list) {
    // sorts a linked list in ascending order
    if (list.size() === 1 || list.head === null) {
        return list
    }
    const [left, right] = split(list)
    const leftSide = mergeSort(left)
    const rightSide = mergeSort(right)
    return merge(leftSide, rightSide)
}

const list = new LinkedList()

list.add(10)
list.add(20)
list.add(5)

const sortedList = mergeSort(list)
console.log(sortedList.head)