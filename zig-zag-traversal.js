class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}


class Queue {
    constructor() {
        this.items = []
    }
    enqueue(data) {
        if (data)
            return this.items.push(data)
    }
    dequeueShift() {
        return this.items.shift()
    }
    dequeuePop() {
        return this.items.pop()
    }

}

/*
        1
    2        3
4      5  6     7
*/
let flag = 0
let tempArr = []
const zigzagTraversal = (node, q) => {
    if (node == null) return
    q.enqueue(node.left)
    q.enqueue(node.right)
    node = q.dequeueShift()
    console.log(node.data)
    zigzagTraversal(node, q)




}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
const q = new Queue()
zigzagTraversal(root, q)