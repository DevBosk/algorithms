export class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

export class BST {
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

    find(val) {
        if(!this.root) return false;
        let current = this.root;
        let found = false;
        while(current && !found) {
            if(val < current.value) {
                current = current.left;
            } else if(val > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }

        if(!found) return undefined;
        return current;
    }

    DFSPreOrder() {
        const list = [];
        const current = this.root;

        function traverse(node) {
            list.push(node.value);

            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(current);

        return list;
    }

    DFSPostOrder() {
        const list = [];
        const current = this.root;

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            list.push(node.value);
        }

        traverse(current);

        return list;
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
// console.log(bst.find(77));
// console.log(JSON.stringify(bst));