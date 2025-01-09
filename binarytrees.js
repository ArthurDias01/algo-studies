// Binary Tree
// - consistos of nodes with at most 2 children
// - each node has a value and 2 pointers to its children
// - the left child is the node with the smaller value
// - the right child is the node with the larger value
// - the root is the node with no parent

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  insert(value) {
    const newNode = new BinaryTreeNode(value);
    if (!this.root) {
      this.root = newNode;
      this.length++;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          this.length++;
          return this;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          this.length++;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        return this;
      }
    }
  }

  lookup(value) {
    if (this.root === null) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return null;
  }

  height() {
    return this.calculateHeight(this.root);
  }

  calculateHeight(node) {
    if (node === null) {
      return 0;
    }
    const leftHeight = this.calculateHeight(node.left);
    const rightHeight = this.calculateHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  remove(value) {
    if (this.root === null) {
      return null;
    }
    let currentNode = this.root;
    let parentNode = null
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  printTree() {
    if (this.root === null) {
      console.log("Empty Tree");
      return;
    }

    let queue = [this.root];
    let nextQueue = [];
    let height = this.height();
    let currentHeight = 0;

    while (currentHeight < height) {
      let levelWidth = queue.length;
      let levelOutput = '';

      for (let i = 0; i < levelWidth; i++) {
        let node = queue.shift();
        levelOutput += node.value + ' ';

        if (node.left) nextQueue.push(node.left);
        if (node.right) nextQueue.push(node.right);
      }

      console.log(levelOutput);
      currentHeight++;
      queue = nextQueue;
      nextQueue = [];
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      // shift returns the first element of the array and removes it from the array
      currentNode = queue.shift();
      // console.log(currentNode.value);
      list.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return list;
  }
  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
    return this.breadthFirstSearchR(queue, list);
  }

  DFSInorder() {
    return traverseInOrder(this.root, [])
  }
  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
  DFSPreorder() {
    return traversePreOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  console.log(node.value);
  if (node.left) {
    traverseInOrder(node.left, list)
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list)
  }
  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list)
  }
  if (node.right) {
    traversePreOrder(node.right, list)
  }
  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list)
  }
  if (node.right) {
    traversePostOrder(node.right, list)
  }
  list.push(node.value);
  return list;
}

//example tree
//     9
//    /  \
//   4    20
//  / \   / \
// 1  6  15 170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(99);

// console.log(JSON.stringify(traverse(tree.root), null, 2));
// console.log(tree.lookup(90))
// console.log(tree.length, "tree height", tree.height())
// tree.printTree();
// console.log(tree.height())
// console.log(tree.breadthFirstSearch());
// console.log(tree.breadthFirstSearchR([tree.root], []));

// DFS 
// inorder - [1, 4, 6, 9, 20, 15, 99]
// console.log(tree.DFSInorder());
// preorder - [9, 4, 1, 6, 20, 15, 99]
// console.log(tree.DFSPreorder());
// postorder - [1,  6, 4, 15, 99, 20, 9]
console.log(tree.DFSPostOrder());
