class node{
    constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
    }
};


class Tree{
    constructor(){
        this.root = null;
        
    }
}

// 0(n) --> You are going through every node only once and doing constant work
function inOrderTraversal(root){
    if(!root)
        return;
    inOrderTraversal(root.left);
    console.log(root.data);
    inOrderTraversal(root.right);
}

// 0(n) --> You are going through every node only once and doing constant work
function preOrderTraversal(root){
    if(!root)
        return;
    console.log(root.data);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
}

// 0(n)  --> You are going through every node only once and doing constant work
function postOrderTraversal(root){
    if(!root)
        return;
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.data);
}

function heightOfBinaryTree(root){
    if(!root){
        return 0;
    }
    return 1+Math.max(heightOfBinaryTree(root.left),heightOfBinaryTree(root.right));
}

let tree = new Tree();
let newNode = new node(5);
tree.root = newNode;
newNode.left = new node(6);
newNode.right = new node(7);
newNode.left.left = new node(8);
newNode.left.right = new node(9);
// inOrderTraversal(tree.root);
// preOrderTraversal(tree.root);
// postOrderTraversal(tree.root);
console.log(heightOfBinaryTree(tree.root));








