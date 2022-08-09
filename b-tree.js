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
}

var bTree = new BTree();
bTree.insert(5);
bTree.insert(10);
bTree.insert(3);