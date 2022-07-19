
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
    // console.log(node.data, 'node')
    if (Math.abs(lHeight - rHeight) > 1) {
        console.log("Not Balanced")
    }
    if (lHeight > rHeight) {
        return lHeight + 1
    } else {
        return rHeight + 1
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4)
root.right.right = new Node(5);
root.right.left.left = new Node(6)
checkBalanceBinaryTree(root)