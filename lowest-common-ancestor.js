class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const findLCA = (node, l, r) => {
    if (node == null) return null;

    if (node.data == l || node.data == r) {
        return node
    }
    const Lside = findLCA(node.left, l, r);
    const Rside = findLCA(node.right, l, r);

    if (Lside && Rside) return node;

    if (Lside) return Lside;
    if (Rside) return Rside;
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
console.log(findLCA(root, 4, 5).data)  // LCA=2
console.log(findLCA(root, 4, 3).data)  // LCA=1
