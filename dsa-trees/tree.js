/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    //below won't work because we have to traverse the whole tree and then sum up all the children...
    // return this.children.reduce((accum, curr) => accum + curr, 0)

    let current = this.root;
    let sum = 0;

    for (let i = 0; i < current.children.length; i++) {
      for (let val of current.children) {
        sum += val;
      }
      current = current.children[i]
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // return this.children.reduce((accum, curr) => {
    //   if (curr % 2 === 0) {
    //     accum + curr
    //   } else {
    //     accum + 0
    //   }
    // }, 0)

    let current = this.root;
    let sum = 0;

    for (let i = 0; i < current.children.length; i++) {
      for (let val of current.children) {
        if (val % 2 === 0) sum += val;
      }
      current = current.children[i]
    }
    return sum;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
