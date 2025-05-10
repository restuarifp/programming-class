class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode); 
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode; 
      } else {
        this._insertNode(node.left, newNode); 
      }
    } else {
      if (node.right === null) {
        node.right = newNode; 
      } else {
        this._insertNode(node.right, newNode); 
      }
    }
  }

  find(value) {
    return this._findNode(this.root, value); 
  }

  _findNode(node, value) {
    if (node === null) {
      return false; 
    }
    if (value === node.value) {
      return true; 
    }
    return value < node.value
      ? this._findNode(node.left, value) 
      : this._findNode(node.right, value); 
  }

  inOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.inOrderTraversal(node.left, result); 
      result.push(node.value); 
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  preOrderTraversal(node = this.root, result = []) {
    if (node) {
      result.push(node.value); 
      this.preOrderTraversal(node.left, result); 
      this.preOrderTraversal(node.right, result); 
    }
    return result; 
  }

  postOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.postOrderTraversal(node.left, result); 
      this.postOrderTraversal(node.right, result); 
      result.push(node.value); 
    }
    return result; 
  }

  bfs() {
    const result = [];
    const queue = []; 
    if (this.root) {
      queue.push(this.root);
    }
    while (queue.length > 0) {
      const node = queue.shift(); 
      result.push(node.value); 
      if (node.left) {
        queue.push(node.left); 
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return result; 
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(17);

console.log("BST:", bst);
console.log("Find 7:", bst.find(7)); 
console.log("Find 100:", bst.find(100)); 
console.log("In-order:", bst.inOrderTraversal()); 
console.log("Pre-order:", bst.preOrderTraversal());
console.log("Post-order:", bst.postOrderTraversal());
