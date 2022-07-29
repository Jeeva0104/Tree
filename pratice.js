/*
1.LCA                       done
2.Height of Tree            done
3.Balanced binary Tree      done
4.Level-order               done
5.MaximumPath               done
6.Identical Tree            done
7.boundray Traversal        done
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
const root = new Node(-15);
root.left = new Node(-10);
root.right = new Node(-20);
root.right.left = new Node(-30);
root.right.right = new Node(15);
maximumPath(root)
console.log(max)