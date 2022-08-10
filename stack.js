class Stack {

    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        
        if (this.items.length == 0){
            return "empty";
        }
        else {
            return this.items.pop();
        }
    }
}

var stack = new Stack();
stack.push(3);
stack.push(10);
console.log(stack.pop());
