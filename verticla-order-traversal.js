/*

var m = {}
if (m[x] === undefined) {
    m[x] = {}
    m[x][y] = [node.data]
} else if (m[x][y] == undefined) {
    m[x][y] = [node.data]
} else {
    m[x][y].push(node.data)
}
verticalOrderTraversal(node.left, x - 1, y + 1)
verticalOrderTraversal(node.right, x + 1, y + 1)

*/


class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class Queue {
    constructor() {
        this.items = []
    }
    enqueue(item) {
        if (item) {
            return this.items.push(item)
        }


    }
    dequeue() {
        if (this.items.length > 0)
            return this.items.shift()
    }
}
var m = {}
const verticalOrderTraversal = (node, x, y) => {

    if (node == null) return
    if (m[x] === undefined) {
        m[x] = {}
        m[x][y] = [node.data]
    } else if (m[x][y] == undefined) {
        m[x][y] = [node.data]
    } else {
        m[x][y].push(node.data)
    }
    verticalOrderTraversal(node.left, x - 1, y + 1)
    verticalOrderTraversal(node.right, x + 1, y + 1)

}
/*

        1
    2       3
4       10 9    10
    5
        6   
*/
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.left.left.right = new Node(5);
root.left.left.right.right = new Node(6);
root.right.left = new Node(9);
root.right.right = new Node(10);

verticalOrderTraversal(root, 0, 0)
/*

4
2 5
1 9 10 6
2
10

*/
console.log(m)