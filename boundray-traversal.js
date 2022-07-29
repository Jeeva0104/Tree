class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
const leftArr = []
const rightArr = []
const LeftBounday = (node) => {
    if (node == null) return;
    if (node.left == null && node.right == null) return;
    if (node.left != null && node.right != null) {
        leftArr.push(node.data)
    }
    if (node.left) {
        node = node.left
    } else {
        node = node.right
    }
    LeftBounday(node)

}
const rightBounday = (node) => {
    if (node == null) return;
    if (node.left == null && node.right == null) return;
    if (node.left != null && node.right != null) {
        rightArr.push(node.data)
    }
    if (node.left) {
        node = node.right
    } else {
        node = node.left
    }
    rightBounday(node)
}
const boundaryTraversal = (node) => {
    LeftBounday(node.left)
    // perform inorder traversal
    rightBounday(node.right)

}

/*
        1
    2        3
4      5  6     7
*/
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.left.left = new Node(6);
root.left.left.right = new Node(7);


root.right.left = new Node(6);
root.right.right = new Node(7);
boundaryTraversal(root)
console.log(leftArr)
console.log(rightArr)