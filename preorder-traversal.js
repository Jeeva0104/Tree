class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
const preOrderTraversal = (node) => {
    if (node == null) return null
    console.log(node.data);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
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
root.right.left = new Node(6);
root.right.right = new Node(7);
preOrderTraversal(root)
// o/p
// 1 2 4 5 3 6 7