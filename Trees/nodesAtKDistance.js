const binaryTree = require("./binary_tree");


function nodesAtK(root,k){
    if(root == null || k < 0)
        return;
    if(k === 0){
        console.log(root.data);
        return;
    }
    nodesAtK(root.left,k-1);
    nodesAtK(root.right,k-1);
}



let tree = new binaryTree.Tree();
let newNode = new binaryTree.node(5);
tree.root = newNode;
newNode.left = new binaryTree.node(6);
newNode.right = new binaryTree.node(7);
newNode.left.left = new binaryTree.node(8);
newNode.left.right = new binaryTree.node(9);
nodesAtK(tree.root,1);

