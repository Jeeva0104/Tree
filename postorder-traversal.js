class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}
const postOrder = (node) => {
    if (node == null) return null;
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.data)
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
postOrder(root)

// o/p
// 4 5 2 6 7 3 1