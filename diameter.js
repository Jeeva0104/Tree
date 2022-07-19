
/*
***Logic***

maxmimum of LeftHeight+RightHeight
max(Lheight+Rheight)

*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
let max = 0;
const findMax = (maxNode) => {
    if (maxNode > max) {
        max = maxNode;
        return max
    }
}
const findLeftHeight = (Lnode) => {
    if (Lnode == null) return 0;
    const lH = findLeftHeight(Lnode.left)
    return lH + 1;
}
const findRightHeight = (Rnode) => {
    if (Rnode == null) return 0;
    const rH = findRightHeight(Rnode.right);
    return rH + 1;
}
const findDiameter = (node) => {
    if (node == null) return
    const lHeight = findLeftHeight(node.left);
    const rHeight = findRightHeight(node.right);
    findMax(rHeight + lHeight);
    findDiameter(node.left)
    findDiameter(node.right)

}
/*  Tree structure

        1
    2        3
          5     6
        7         8
      9             10
*/
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.right.right = new Node(8);
root.right.left.left.left = new Node(9);
root.right.right.right.right = new Node(10)
findDiameter(root)
console.log(max)
