function Node(data) {
    // node funtion is data and next link to next node
    this.data = data;
    this.next = null;
}

function LinkedList () {
    // singly linked list
    this.head = null;

    this.empty = function () {
        return this.head === null;
    }

    this.size = function () {
        let count = 0
        let current = this.head
        while(current) {
            count++
            current = current.next
        }
        return count
    }

    this.add = function (data) {
        // adds new node to head and increments count
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    this.search = function (key) {
        let current = this.head;
        while(current && current.data !== key) {
            current = current.next
        }
        return current
    }

    this.insert = function (data, index) {
        const count = this.size
        if (index > count - 1) {
            throw new Error(`index is 0 - ${ count - 1 }`)
        }
        if (index === 0) {
            this.add(data)
        }else if (index > 0) {
            let newNode = new Node(data)
            let current = this.head
            let position = index
            while(current && position > 1) {
                position--;
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode
        }
    }

    this.remove = function(key) {
        let current = this.head;
        // check head to see if it equal key
        if (current.data === key) {
            current = current.next
            return true
        }
        let prev = current
        current = current.next
        let found = false;
        while(current && !found) {
            if (current.data !== key) {
                prev = current;
                current = current.next;
            } else {
                prev.next = current.next
                found = true;
            }
        }
        return false;
    }

    this.nodeAtIndex = function(index) {
        const count = this.size
        if (index < 0 || index >= count - 1) {
            throw new Error(`index must be 0 - ${count - 1 }`)
        }
        if (index === 0) {
            return this.head
        } else {
            let position = 0
            let current = this.head
            while (position < index) {
                current = current.next
                position++
            }
            return current
        }
    }
}

module.exports = LinkedList;
const list = new LinkedList();
// list.add(10)
// list.add(20)
// list.add(30)
// list.add(40)
// console.log(list.search(20))
// list.insert(25, 2)
// console.log(list.head)
// list.remove(30)
// console.log(list.head)
// console.log(list.nodeAtIndex(2))
// console.log("size", list.size())
