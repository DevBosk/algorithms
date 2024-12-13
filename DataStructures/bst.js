class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(root) {
        this.root = root;
    }

    insert(val) {
        const newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while(true) {
            if(current.value === val) return undefined;

            if(val < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}
let rootNode = new Node(10);
let bst = new BST(rootNode);
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(25);
bst.insert(77);
bst.insert(45);
console.log(JSON.stringify(bst));