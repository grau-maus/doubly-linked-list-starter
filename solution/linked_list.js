class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
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
            this.tail = newNode;
            this.head = this.tail;
        } else {
            const oldTail = this.tail;

            oldTail.next = newNode;
            newNode.previous = oldTail;
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
            const prevTail = oldTail.previous;

            prevTail.next = null;
            this.tail = prevTail;
        }

        oldTail.previous = null;
        this.length--;

        return oldTail;
    }

    addToHead(val) {
        const newNode = new Node(val);

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const oldHead = this.head;

            oldHead.previous = newNode;
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
            this.tail = null;
            this.head = null;
        } else {
            const nextHead = oldHead.next;

            nextHead.previous = null;
            this.head = nextHead;
        }

        oldHead.next = null;
        this.length--;

        return oldHead;
    }

    contains(target) {
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
        if (index === 0) return this.head;
        if (index === this.length - 1) return this.tail;

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

        const currNode = this.get(index);

        currNode.value = val;

        return true;
    }

    insert(index, val) {
        if (index >= this.length || index < 0) return false;

        if (index === 0) {
            this.addToHead(val);
        } else {
            let currNode = this.get(index);
            const newNode = new Node(val);
            const prevNode = currNode.previous;

            newNode.previous = prevNode;
            newNode.next = currNode;
            prevNode.next = newNode;
            currNode.previous = newNode;
            this.length++;
        }

        return true;
    }

    remove(index) {
        if (index >= this.length || index < 0) return;

        let oldNode = this.get(index);

        if (index === 0) {
            this.removeHead();
        } else if (index === this.length - 1) {
            this.removeTail();
        } else {
            const prevNode = oldNode.previous;
            const nextNode = oldNode.next;

            prevNode.next = nextNode;
            nextNode.previous = prevNode;
            oldNode.next = null;
            oldNode.previous = null;
            this.length--;
        }

        return oldNode;
    }

    size() {
        return this.length;
    }
}
