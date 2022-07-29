class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
let m = {}
const topView = (node, x, y) => {
    if (node == null) return
    if (m[x] == undefined) {
        m[x] = {}
        m[x][y] = [node.data]
    } else if (m[x][y] == undefined) {
        m[x][y] = [node.data]
    } else {
        m[x][y].push(node.data)
    }
    topView(node.left, x - 1, y + 1)
    topView(node.right, x + 1, y - 1)
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
topView(root, 0, 0)
console.log(m)
const keys = Object.keys(m).sort((a, b) => a - b)
let innerkey;
for (let i = 0; i < keys.length; i++) {
    innerkey = Object.keys(m[keys[i]])[0]
    console.log(m[keys[i]][innerkey][0])

}
