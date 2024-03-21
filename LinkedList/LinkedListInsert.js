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

    insert(index, value) {
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);

        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }
}

let myLinkedlist = new LinkedList(7);
myLinkedlist.insert(2, 4)