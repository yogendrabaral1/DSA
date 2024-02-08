class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    shift() {
        if(!this.head) return undefined
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }
}

let myLinkedlist = new LinkedList(7);
myLinkedlist.shift();