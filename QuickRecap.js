class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
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

let heightOfTree = (node) => {
  if (node === null) return 0
  let leftHeight = heightOfTree(node.left)
  let rightHeight = heightOfTree(node.right)
  if (leftHeight > rightHeight) {
    return leftHeight + 1
  } else {
    return rightHeight + 1
  }
}
console.log(heightOfTree(root))
let array = []
// This LeftView Of a Tree
// For rightView Change the order
let viewOfTree = (node, level) => {
  if (node === null) return null
  if (array.length == level) {
    array.push(node.data)
  }
  viewOfTree(node.left, level + 1)
  viewOfTree(node.right, level + 1)
  return null
}
viewOfTree(root, 0)
console.log(array)
// This preorder traversal root->left->right
// For inorder and postorder traversal change the order
let traversal = (node) => {
  if (node === null) return null
  console.log(node.data)
  traversal(node.left)
  traversal(node.right)
  return
}
traversal(root)
