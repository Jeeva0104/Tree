class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
const arr = []
const rightView = (node, level) => {
    if (node == null) return
    if (arr.length == level) {
        arr.push(node.data)
    }
    rightView(node.right, level + 1)
    rightView(node.left, level + 1)
}

/*

        1
    2       3
4       10 9    10
    5
        6   
*/
const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.right = new Node(10)
root.left.left = new Node(4)
root.left.left.right = new Node(5)
root.left.left.right.right = new Node(6)
root.right.left = new Node(9)
root.right.right = new Node(10)

rightView(root, 0)
console.log(arr) // 1 3 10 5 6