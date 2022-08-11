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
        var node = new Node(element);

        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(index, element) {

        var current, prev;
        var i = 0;
        var node = new Node(element);
        current = this.head;

        if (index == 0) {
            node.next = this.head;
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

    print() {
        var output = this.head;
        while(output){
            console.log('Output: ' + output.element);
            output = output.next;
        }
    }

};

var list = new LinkedList;
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.insertAt(0,10);
list.print();
