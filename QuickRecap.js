heightOfTree(node){
if(node===null) return 0
let leftHeight=heightOfTree(node.left)
let rightHeight=heightOfTree(node.right)
if(leftHeight>rightHeight){
leftHeight+1
}else{
  rightHeight+1
}
}
