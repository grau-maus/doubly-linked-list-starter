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
        const newNode = new Node(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const oldTail = this.tail;

            oldTail.next = newNode;
            newNode.prev = oldTail;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    removeTail() {
        if (!this.length) return;

        const oldTail = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const prevTail = this.tail.prev;

            prevTail.next = null;
            this.tail = prevTail;
        }

        oldTail.prev = null;
        this.length--;

        return oldTail;
    }

    addToHead(val) {
        const newNode = new Node(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            const oldHead = this.head;

            oldHead.prev = newNode;
            newNode.next = oldHead;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    removeHead() {
        if (!this.length) return;

        const oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const oldHead = this.head;
            const nextHead = oldHead.next;

            nextHead.prev = null;
            this.head = nextHead;
        }

        oldHead.next = null;
        this.length--;

        return oldHead;
    }

    contains(target) {
        if (!this.length) return;

        let currNode = this.head;

        while (currNode) {
            if (currNode.value === target) {
                return true;
            }

            currNode = currNode.next;
        }

        return false;
    }

    get(index) {
        if (index >= this.length || index < 0) return null;

        let currNode = this.head;

        for (let i = 0; i <= index; i++) {
            if (i === index) {
                return currNode;
            }

            currNode = currNode.next;
        }
    }

    set(index, val) {
        if (index >= this.length || index < 0) return false;

        const newNode = new Node(val);

        if (index === 0) {
            const nextNode = this.head.next;

            newNode.next = nextNode;
            nextNode.prev = newNode;
            this.head = newNode;
        } else if (index === this.length - 1) {
            const prevNode = this.tail.prev;

            newNode.prev = prevNode;
            prevNode.next = newNode;
            this.tail = newNode;
        } else {
            let currNode = this.head;

            for (let i = 0; i <= index; i++) {
                if (i === index) {
                    const prevNode = currNode.prev;
                    const nextNode = currNode.next;

                    newNode.next = nextNode;
                    newNode.prev = prevNode;
                    nextNode.prev = newNode;
                    prevNode.next = newNode;
                    currNode = newNode;
                }

                currNode = currNode.next;
            }
        }

        return true;
    }

    insert(index, val) {
        if (index >= this.length || index < 0) return false;

        const newNode = new Node(val);

        if (index === 0) {
            this.addToHead(val);
        } else {
            let currNode = this.head;

            for (let i = 0; i <= index; i++) {
                if (i === index) {
                    const prevNode = currNode.prev;

                    newNode.prev = prevNode;
                    newNode.next = currNode;
                    prevNode.next = newNode;
                    currNode.prev = newNode;
                    this.length++;
                }

                currNode = currNode.next;
            }
        }

        return true;
    }

    remove(index) {
        if (index >= this.length || index < 0) return;

        let removedNode;

        if (index === 0) {
            this.removeHead();
        } else if (index === this.length - 1) {
            this.removeTail();
        } else {
            let currNode = this.head;

            for (let i = 0; i <= index; i++) {
                if (i === index) {
                    removedNode = currNode;


                    const prevNode = currNode.prev;
                    const nextNode = currNode.next;

                    prevNode.next = nextNode;
                    nextNode.prev = prevNode;
                    currNode.next = null;
                    currNode.prev = null;
                }

                currNode = currNode.next;
            }

            this.length--;
        }

        return removedNode;
    }

    size() {
        return this.length;
    }
}
