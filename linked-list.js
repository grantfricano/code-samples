class Node {
    
    constructor(element) {
        this.element = element;
        this.next = null;
    }
};

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }


    add(element) {

        var current;

        if (this.head == null) {
            this.head = new Node(element);
        }
        else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }

            current.next = new Node(element);
        }
        this.size++;
    }

    insertAt(index, element) {

        var current, prev;
        var i = 0;
        var node = new Node(element);
        current = this.head;

        if (index == 0) {
            node.next = this.head
            this.head = node;
        }
        else {
            while (i < index) { 
                prev = current;
                current = current.next;
                i++;
            }
            node.next = current;
            prev.next = node;
        }
        this.size++;
    }

};

var list = new LinkedList;
list.add(1);
console.log(list);
list.add(2);
console.log(list);
list.add(3);
console.log(list);
list.insertAt(0,10);
console.log(list);