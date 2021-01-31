// ============================================================================
// Implementation Exercise: Doubly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Doubly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}






class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToTail(val) {
        const newTail = new Node(val);

        if (!this.length) {
            this.tail = newTail;
            this.head = this.tail;
        } else {
            newTail.prev = this.tail;
            this.tail.next = newTail;
            this.tail = newTail;
        }

        this.length++;

        return this;
    }

    removeTail() {
        if (!this.length) return undefined;

        const oldTail = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else if (this.length === 2) {
            this.tail.prev = null;
            this.head.next = null;
            this.tail = this.head;
        } else {
            const newTail = oldTail.prev;

            oldTail.prev = null;
            this.tail = newTail;
            this.tail.next = null;
        }

        this.length--;

        return oldTail;
    }

    addToHead(val) {
        const newHead = new Node(val);

        if (!this.length) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head.prev = newHead;
            this.head = newHead;
        }

        this.length++;

        return this;
    }

    removeHead() {
        if (!this.length) return undefined;

        const oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else if (this.length === 2) {
            // this.head.next = null;
            this.tail.prev = null;
            this.head = this.tail;
        } else {
            const newHead = oldHead.prev;

            // oldHead.next = null;
            this.head = newHead;
            this.tail.prev = null;
        }

        this.length--;

        return oldHead;
    }

    contains(target) {
        let currHead = this.head;

        while (currHead) {
            if (currHead.value === target) {
                return true;
            }

            currHead = currHead.next;
        }

        return false;
    }

    get(index) {
        if (index >= this.length || index < 0) return null;

        let currObj = this.head;

        for (let i = 0; i <= index; i++) {
            if (i === index) {
                return currObj;
            }

            currObj = currObj.next;
        }
    }

    set(index, val) {
        if (index >= this.length || index < 0) return false;

        const newObj = new Node(val);

        if (index === this.length - 1) {
            const oldTail = this.tail;
            const prevObj = oldTail.prev;

            newObj.prev = prevObj;
            prevObj.next = newObj;
            this.tail = newObj;
            oldTail.prev = null;
        } else if (index === 0) {
            const oldHead = this.head;

            oldHead.prev = newObj;
            newObj.next = oldHead.next;
            this.head = newObj;
            oldHead.next = null;
        } else {
            let currObj = this.head;

            for (let i = 0; i <= index; i++) {
                if (i === index) {
                    const oldObj = currObj;
                    const prevObj = currObj.prev;
                    const nextObj = currObj.next;

                    newObj.prev = prevObj;
                    newObj.next = nextObj;
                    prevObj.next = newObj;
                    nextObj.prev = newObj;
                    currObj = newObj;
                    oldObj.next = null;
                    oldObj.prev = null;
                }

                currObj = currObj.next;
            }
        }

        return true;
    }

    insert(index, val) {
        if (index >= this.length || index < 0) return false;

        if (index === 0) {
            this.addToHead(val);
        } else {
            const newObj = new Node(val);
            let currObj = this.head;

            for (let i = 0; i <= index; i++) {
                if (i === index) {
                    const prevObj = currObj.prev;

                    newObj.prev = prevObj;
                    newObj.next = currObj;
                    prevObj.next = newObj;
                    currObj.prev = newObj;
                }

                currObj = currObj.next;
            }

            this.length++;
        }

        return true;
    }

    remove(index) {
        if (index >= this.length || index < 0) return undefined;

        let rmVal;

        if (index === 0) {
            rmVal = this.removeHead();
        } else if (index === this.length - 1) {
            rmVal = this.removeTail();
        } else {
            let currObj = this.head;

            for (let i = 0; i <= index; i++) {
                if (i === index) {
                    const prevObj = currObj.prev;
                    const nextObj = currObj.next;

                    prevObj.next = nextObj;
                    nextObj.prev = prevObj;
                    // currObj.next = null;
                    // currObj.prev = null;
                    rmVal = currObj;
                }

                currObj = currObj.next;
            }

            this.length--;
        }

        return rmVal;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
