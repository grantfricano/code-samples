class TNode {

    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
};

class BTree {

    constructor() {
        this.root = null;
    }

    insert(element) {

        if (this.root == null) {
            this.root = new TNode(element);
        }
        else {
            this.insertNode(this.root, new TNode(element));
        }
    }

    insertNode(node, newNode) {

        if (newNode.element < node.element){
            if (node.left == null){
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right == null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    print() {

        this.printTree(this.root);

    }

    printTree(node) {
        
        if (node.left == null && node.right == null){
            console.log(node.element);
            return;
        }
        else if (node.left == null && node.right != null){
            console.log(node.element);
            this.printTree(node.right);
        }
        else if (node.left != null && node.right == null) {
            this.printTree(node.left);
            console.log(node.element);
        }
        else if (node.left != null && node.right != null) {
            this.printTree(node.left);
            console.log(node.element);
            this.printTree(node.right);
        }
    }
}

var bTree = new BTree();
bTree.insert(5);
bTree.insert(10);
bTree.insert(4);
bTree.insert(1);
bTree.insert(20);
bTree.insert(3);
bTree.insert(7);
bTree.insert(15);
bTree.insert(2);
bTree.print();