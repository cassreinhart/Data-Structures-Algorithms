/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) {
      this.push(val);
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val); //create a new node to store value
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    let i = 0;
    let deleteMe = this.tail;
    let prev;

    while (currentNode !== null && i != this.length - 1) { //find the last node with next value that is not null
      i++
      prev = currentNode
      currentNode = currentNode.next
    }
    if (this.head === this.tail) { //if there is only one Node in LinkedList, set head and tail to null
      this.head = null
      this.tail = null
    }
    console.log(prev)
    prev.next = null
    this.tail = prev
    this.length--;
    return deleteMe.val
  }

  /** shift(): return & remove first item. */

  shift() {
    let newHead = this.head.next;
    let oldHead = this.head;
    this.head = newHead;
    this.length--;
    return oldHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("ERROR: Invalid Index")
    }

    let currentNode = this.head;
    
    for (let i = 0; i < this.length - 1; i++) {
      if (i == idx) {
        console.log(i, idx, currentNode.val)
        return currentNode.val
      }
      currentNode = currentNode.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("ERROR: Invalid Index")
    }

    let currentNode = this.head;
    const newNode = new Node(val);
    for (let i = 0; i < this.length; i++) {
      if (i === idx) {
        let nextNode = currentNode.next;
        currentNode = newNode;
        currentNode.next = nextNode;
      }
      currentNode = currentNode.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("ERROR: Invalid Index")
    }

    let currentNode = this.head;
    const newNode = new Node(val);
    for (let i = 0; i < this.length; i++) {
      if (i === idx - 1) {
        let nextNode = currentNode.next;
        currentNode = newNode;
        currentNode.next = nextNode;
        this.length++
      }
      currentNode = currentNode.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("ERROR: Invalid Index")
    }

    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === idx - 1) {
        let deleteMe = currentNode.next;
        let nextNode = currentNode.next.next;
        currentNode.next = nextNode;
        return deleteMe;
      }
      currentNode = currentNode.next
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      total += currentNode.val;
      currentNode = currentNode.next;
    }
    return this.length === 0 ? 0 : total/this.length
  }
}

module.exports = LinkedList;
