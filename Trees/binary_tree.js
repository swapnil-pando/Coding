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


function levelOrderTraversal(root){
    if(!root){
        return [];
    }
    const levels = [];
    const queue = [root];
    while(queue.length){
        let level = [];
        const queueLength = queue.length;
        for(let i = 0; i < queueLength; i++){
            const node = queue.shift();
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            level.push(node.data);
        }
        levels.push(level);
    }
    console.log(levels);
}

function levelOrderTraversalLevelWise(root){
    if(!root){
        return [];
    }
    const levels = [];
    const queue = [root];
    while(queue.length){
        let level = [];
        const queueLength = queue.length;
        for(let i = 0; i < queueLength; i++){
            const node = queue.shift();
            console.log(node.data);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            
            level.push(node.data);
        }
        console.log("***************");
        levels.push(level);
    }
    console.log(levels);
}

// Function to print the left view of the binary tree --> In left view the first element of every level will be printed
function leftView(root){
    if(!root){
        return [];
    }
    const levels = [];
    const queue = [root];
    while(queue.length){
        let level = [];
        let rowSize = 0;
        const queueLength = queue.length;
        for(let i = 0; i < queueLength; i++){
            const node = queue.shift();
            if(rowSize === 0){
                console.log(node.data);
            }
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            rowSize++;
            level.push(node.data);
        }
        levels.push(level);
    }
}

function rightView(root){
    if(!root){
        return [];
    }
    const levels = [];
    const queue = [root];
    while(queue.length){
        let level = [];
        let rowSize = 0;
        const queueLength = queue.length;
        for(let i = 0; i < queueLength; i++){
            const node = queue.shift();
            if(rowSize === queueLength - 1){
                console.log(node.data);
            }
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            rowSize++;
            level.push(node.data);
        }
        levels.push(level);
    }
}


// This function return true if the sum of the value of left child and right child of a node is equal to the node's value.
// If one of the child is not present, take its value as zero...
function childrenSum(root){
    if(!root)
        return true;
    
        // The below case is very important since you missed it the first time...
    if(!root.left && !root.right)
        return true;
    let res = childrenSum(root.left) && childrenSum(root.right);
    let sum = 0;
    if(root.left) sum+=root.left.data;
    if(root.right) sum+=root.right.data;
    if (sum === root.data)
        res = res && true;
    else
        res = false;
    return res;
}



function maxWidthOfBinaryTree(root){
    if(!root){
        return [];
    }
    const queue=[root];
    let width = 0;
    while(queue.length){
        const queueLength = queue.length;
        width = Math.max(width,queueLength);
        for(let i = 0;i < queue.length ; i++){
            const node = queue.shift();
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
    }
    return width;
}

function sizeOfBinaryTree(root){
    if(!root)return 0;
    return 1+sizeOfBinaryTree(root.left)+sizeOfBinaryTree(root.right);
}

function heightOfBinaryTree(root){
    if(!root){
        return 0;
    }
    return 1+Math.max(heightOfBinaryTree(root.left),heightOfBinaryTree(root.right));
}

function maxInBinaryTree(root){
    if(!root){
        return Number.MIN_VALUE;
    }
    return Math.max(root.data,Math.max(maxInBinaryTree(root.left),maxInBinaryTree(root.right)));
}

let tree = new Tree();
let newNode = new node(4);
tree.root = newNode;
newNode.left = new node(6);
newNode.right = new node(7);
newNode.left.left = new node(8);
newNode.left.right = new node(9);
// inOrderTraversal(tree.root);
// preOrderTraversal(tree.root);
// postOrderTraversal(tree.root);
// console.log(heightOfBinaryTree(tree.root));
// console.log(maxInBinaryTree(tree.root));
levelOrderTraversal(tree.root);
console.log(maxWidthOfBinaryTree(tree.root));
console.log(sizeOfBinaryTree(tree.root));
levelOrderTraversalLevelWise(tree.root);
leftView(tree.root);
rightView(tree.root);

console.log(childrenSum(tree.root));

module.exports ={
    node:node,
    Tree:Tree
}