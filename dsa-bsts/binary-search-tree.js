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

    while (node.val !== val) { //need a loop here so we can continue traversing
      if (node.val > val) {
        if (node.left === null) {
          node.left = new Node(val)
          return this;
        } else {
          node = node.left
        }
      } else if (node.val < val) {
        if (node.right === null) {
          node.right = new Node(val)
          return this;
        } else {
          node = node.right
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {

    if (node === null) { //tree is empty
      this.root = new Node(val) //insert node at root
      return this;
    }

    if (val < node.val) {
      if (node.left === null) {
        node.left = new Node(val)
        return this;
      } else {
        return this.insertRecursively(val, node.left)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(val)
        return this;
      } else {
        return this.insertRecursively(val, node.right)
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let node = this.root;
    let found = false;

    if (val === node.val) return node;

    while (node && !found) {
      if (val < node.val) {
        node = node.left;
      } else if (val > node.val) {
        node = node.right;
      } else {
        found = true
      }
    }

    if (!found) return undefined;

    return node;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, found = false, node = this.root) {
    if (!node) return undefined

    if (val < node.val) {
      node = node.left
    } else if (val > node.val) {
      node = node.right
    } else {
      found = true
      return node
    }
    return this.findRecursively(val, found, node)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];
    let node = this.root;

    function traverse(node) {
      visited.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(node);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];
    let node = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left)
      visited.push(node.val)
      if (node.right) traverse(node.right)
    }
    traverse(node);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];
    let node = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      visited.push(node.val)
    }
    traverse(node);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = [];
    let node = this.root;
    const toVisitQueue = [node];
    
    while (toVisitQueue.length) {
      node = toVisitQueue.shift()
      visited.push(node.val)
      if (node.left) toVisitQueue.push(node.left)
      if (node.right) toVisitQueue.push(node.right)
    }
    return visited
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
