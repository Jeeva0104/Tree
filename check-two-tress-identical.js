class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
const isSame = (node1, node2) => {
    if (node1 == null || node2 == null) {
        return node1 == node2
    }
    return (node1.data == node2.data) && isSame(node1.left, node2.left) && isSame(node1.right, node2.right)
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

/*
        1
    2        3
4      5  6     7
*/
const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);
console.log(isSame(root, root1)) // false
root1.right.right = new Node(7);
console.log(isSame(root, root1)) // true