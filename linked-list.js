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
};

var list = new LinkedList;
list.add(1);
list.add(2);
list.add(3);
console.log(list);