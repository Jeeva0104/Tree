class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
const inorderTraversal = (node) => {
    if (node == null) return null;
    inorderTraversal(node.left);
    console.log(node.data);
    inorderTraversal(node.right);
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
inorderTraversal(root)
// o/p
// 4 2 5 1 6 3 7