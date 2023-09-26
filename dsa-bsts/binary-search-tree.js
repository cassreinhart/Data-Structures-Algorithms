class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let node = this.root;
    if (node === null) {
      this.root = new Node(val)
      return this;
    } 

    if (node.val > val) {
      if (node.left === null) {
        node.left = new Node(val)
      } else {
        node = node.left
      }
    } else if (node.val < val) {
      if (node.right === null) {
        node.right = new Node(val)
      } else {
        node = node.right
      }
    } else {
      return null;
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(val)
      return this;
    } else {
      function searchTree(node) {
        if(val < node.val) {
          if (node.left === null) {
            node.left = new Node(val)
            return;
          } else {
            return searchTree(node.left)
          }
        } else if (val > node.val) {
          if (node.right === null) {
            node.right = new Node(data)
            return;
          } else {
            return searchTree(node.right)
          }
        } else {
          return null //val is already in the tree
        }
      }
      return searchTree(node)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
