class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Queue {
    constructor() {
        this.items = []
    }
    enqueue(data) {
        return this.items.push(data)
    }
    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift()
        }
    }
    isEmpty() {
        return this.items.length === 0;
    }
    isSize() {
        return this.items.length;
    }
}
const LevelOrder = (node, q) => {
    if (node == null) return node;
    console.log(node.data);
    q.enqueue(node.left);
    q.enqueue(node.right);
    node = q.dequeue();
    LevelOrder(node, q)

}
/*
        1
    2        3
4      5  6     7
*/

// o/p 1 2 3 4 5 6 7
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
const q = new Queue()
LevelOrder(root, q)