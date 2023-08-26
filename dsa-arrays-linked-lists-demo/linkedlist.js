// /** Node class for item in linked list. */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// // end

// /** LinkedList class, keeping track of head and tail. */
// //not built into js, but we can make our own
// //items are not stored in contiguous memory- instead, each item references
// // the next item in the sequence
// //consists of nodes, which point to the next node or nothing (null) if its the dead end of the list
// // pro: can rearrange without moving other items in memory

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   /** push(val): add node w/val to end of list. */

//   push(val) {
//     let newNode = new Node(val);

//     if (this.head === null) this.head = newNode;

//     if (this.tail !== null) this.tail.next = newNode;

//     this.tail = newNode;
//   }
//   // end

//   /** print(): traverse & console.log each item. */

//   print() {
//     let current = this.head;

//     while (current !== null) {
//       console.log(current.val);
//       current = current.next;
//     }
//   }
//   // end

//   /** find(val): is val in list? */

//   find(val) {
//     let current = this.head;

//     while (current !== null) {
//       if (current.val === val) return true;

//       current = current.next;
//     }

//     return false;
//   }
//   // end
// }

// /* TEST CODE */

// let ll = new LinkedList();

// ll.push("apple");
// ll.push("berry");
// ll.push("cherry");

// ll.print();

// if (ll.find("berry")) {
//   console.log("Found berry");
// }

// if (ll.find("durian")) {
//   console.log("Found durian");
// }




// class Node { 
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const firstPage = new Node('google.com') //Node {val: 'google.com', next: null}
// const secondPage = new Node('reddit.com') //Node {val: 'reddit.com', next: null}
// const thirdPage = new Node('amazon.com')

// firstPage.next = secondPage;
// firstPage //Node {val: 'google.com', next: Node {val: 'reddit.com', next: null}}
// secondPage.next = thirdPage;

//rewrite to accept optional next argument

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// const firstPage = new Node('google.com', 
//                     new Node('reddit.com',
//                       new Node('amazon.com')))

// firstPage.next.next.next = new Node('twitter.com')
//using the above method of chaining nodes together, the tail will always be null because we didn't append 
//create a new LinkedList... line 168

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val)
      currentNode = currentNode.next;
    }
  }
  find(val) {
    let temp = this.head;
    while (temp) {
      if (temp.val === val) return true
      temp = temp.next;
    }
    return false
  }
  // append(val) { //inefficient linear time to find last node and append
  //   let currentNode = this.head;
  //   while(currentNode.next) { //stop before we are at null
  //     currentNode = currentNode.next
  //   }
  //   console.log('AT THE LAST NODE', currentNode.val)
  //   currentNode.next = new Node(val);
  // }
  
  //append using constant time (more efficient) to append using tail
  append(val) {
    let newNode = new Node(val); //create a new node to store value
    if (!this.head) { //allows us to append to an empty LinkedList
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode //point the current tail to lead to new node
    this.tail = newNode //specify the linked list tail to new node
  }
}

const history = new LinkedList();
history.head = firstPage;
history //LinkedList {head: Node}
history.head //Node {val: 'google.com', next: Node}
history.head.next //Node {val: 'reddit.com', next: Node}
history.head.next.next //Node {val: 'amazon.com', next: null}
history.head.next.next.next //null

history.traverse()
//'google.com'
// 'reddit.com'
// 'amazon.com'

//create a new LinkedList using append method
const train = new LinkedList(); //starts empty (head and tail are both null)
train.append('Engine') //we have to set this.head AND this.tail to be the initial node to start
train.append('Freight Car 1')
train.append('Freight Car 2')
train.append('Caboose')