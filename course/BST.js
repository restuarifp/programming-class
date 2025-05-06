/* membuat node */
class Node {
  constructor(value) {
    this.value = value; /* nilai node */
    this.left = null;   /* nilai anak kiri kosong*/
    this.right = null; /* nilai anak kanan kosong */
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;  /* root kosong */
  }

  /* method */
  insert(value) {   
  const newNode = new Node(value); 

if (!this.root) {  /* bila this.root kosong */
      this.root = newNode;
      return; 
    }

    let current = this.root;
    while (true) { /* looping terus*/
if (value < current.value) { 
 /* current.value yaitu nilai yg sudah diinput  */
 /*  value yaitu nilai yang akan diinput  */

  if (!current.left) { /* bila kiri jadi node */
       current.left = newNode; /* kiri jadi node */
          return;
        }
        current = current.left; /kiri jadi leaf
      } else if (value > current.value) {
        if (!current.right) {
    current.right = newNode; /*kanan jadi root */
          return;
        }
       current = current.right; /kanan jadi leaf
      } else {
        // nilai sudah ada, tidak insert duplicate
        return; /keluar dari fungsi
      }
    }
  }

  find(value) {
  let current = this.root; /mulai dari root teratas
    while (current) {
      if (value === current.value) return current;
      if (value < current.value) current = current.left;
      else current = current.right;
    }
    return null;
  }


  inOrderTraversal(node = this.root, result = []) {
    if (!node) return result;
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
    return result;
  }
}

// Contoh penggunaan:
const bst = new BinarySearchTree();
bst.insert(2);
bst.insert(2);
bst.insert(5);
bst.insert(7);
bst.insert(6);
bst.insert(5);
bst.insert(11);
bst.insert(9);
bst.insert(4);

console.log(bst.inOrderTraversal()); 

console.log(bst.find(7)); 

console.log(bst.find(6));
