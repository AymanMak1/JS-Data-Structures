class Node{
    constructor(data){
        this.left = null;
        this.right = null;
        this.data = data;
    }
}
// Binary Search Tree
class BST{
    constructor(){
        this.root = null;
    }

    insert(data){
        const node = new Node(data);
        if(this.root === null){
            this.root = node;
            return;
        }

        let current = this.root;
        while(true){
            if(data < current.data){
                if(current.left === null){
                    current.left = node;
                    return;
                }
                current = current.left;
            } else{
                if(current.right === null){
                    current.right = node;
                    return;
                }
                current.right;
            }
        }
    }
}

const tree = new BST();

//console.log(tree);
tree.insert(40);
tree.insert(31);
tree.insert(50);
tree.insert(38);
tree.insert(42);
tree.insert(80);


let result = [];
let toVisit = [tree.root];
while(toVisit.length){
    let currentNode = toVisit.shift();
    if(currentNode === null){
        result.push('null');
        continue;
    }
    result.push(currentNode.data);
    toVisit.push(currentNode.left);
    toVisit.push(currentNode.right);
}

console.log(result);  
