class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const depth = (node) => {
    if (node == null) return 0;
    const ldepth = depth(node.left);
    const rdepth = depth(node.right);
    if (ldepth > rdepth) return ldepth + 1;
    return rdepth + 1;
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
// root.right.left.left = new Node(8);
console.log(depth(root))  // o/p 3