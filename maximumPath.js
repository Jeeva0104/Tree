/*
**** Logic ***

const l = maximumPath(node.left)
const r = maximumPath(node.right)
max = Math.max(max, l + r + node.data)
return node.data


*/


class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
let max = 0;
const maximumPath = (node) => {
    if (node == null) return 0
    const l = maximumPath(node.left)
    const r = maximumPath(node.right)
    max = Math.max(max, l + r + node.data)
    return node.data
}
const root = new Node(15);
root.left = new Node(10);
root.right = new Node(20);
root.right.left = new Node(-30);
root.right.right = new Node(-15);
maximumPath(root)
console.log(max)