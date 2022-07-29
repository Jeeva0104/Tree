
/*
***Logic***

(height(LeftNode)-height(rightNode))<=1

*/

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

const checkBalanceBinaryTree = (node) => {
    if (node == null) return 0

    const lHeight = checkBalanceBinaryTree(node.left);
    const rHeight = checkBalanceBinaryTree(node.right);
    if (Math.abs(lHeight - rHeight) > 1) return -1
    return 1 + Math.max(lHeight, rHeight)
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4)
root.right.right = new Node(5)
console.log(checkBalanceBinaryTree(root))