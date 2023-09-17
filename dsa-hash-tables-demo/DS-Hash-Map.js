class SimpleMap {
  constructor() {
    this._items = []; //stores data
  }

  set(k, v) {
    this._items.push([k, v]); //store data as key, value pair in an array into our main array
  }

  get(k) {
    let kv = this._items.find((kv) => k === kv[0]); //first index is the key itself
    return kv ? kv[1] : undefined; //second index stores the value
  }

  has(k) {
    return this._items.find((kv) => k === kv[0]) !== undefined;
  }

  delete(k) {
    let i = this._items.findIndex((kv) => k === kv[0]);
    if (i !== -1) this._items.splice(i, 1);
  }

  //map into a new array with these values
  keys() { 
    return this._items.map((kv) => kv[0]);
  }
  values() {
    return this._items.map((kv) => kv[1]);
  }
  entries() {
    return this._items;
  }
}

// [['color', 'orange'], ['age', 29]]
//above is pretty inefficient... there IS a better way!

//enter the hash table (hash map)
//implements an associative array abstract data type, a structure that can map keys to values;
//uses a hash function to compute an INDEX, aka "hash code" into an array of buckets/slots 
// from which the desired value can be found.

//this function will give us a number from a string, and we can use this number to store the data at a certain index in an array.
// function hash(key) {
//   return Array.from(key).reduce(
//     (accum, char) => accum + char.charCodeAt(),
//     0
//   );
// }
//the problems with above hashing functions include that the runtime is not constant time
//a long string is more expensive to hash
//also, if we hash a large string, we will get a very long index and a very long, very sparse array.


function hash(key, arrayLen) {
  const hash = Array.from(key).reduce(
    (accum, char) => accum + char.charCodeAt(),
    0
  );

  return hash % arrayLen; //use arr length to chop down the hash we get 
};

//hash('grape', 10) //7
//hash('apple', 10) //0

// const map = new HashMap()
// map.set('apple', 'red')
// map.set('grape', 'purple')

//hash('cat', 10) //2
//hash('act', 10) //2

//will have collisions due to similar text hashing similarly
//enter horner's method using prime numbers
//by multiplying the sum by a prime number, it will make the order of the text meaningful.

function hash(key, array_len) {
  // Prime number to use with Horner's method
  const H_PRIME = 37;

  let numKey = Array.from(key).reduce(
    (accum, char) => accum * H_PRIME + char.charCodeAt(),
    0
  );

  return numKey % array_len;
}

//hash('cat', 10) //6
//hash('act', 10) //2

class HashMap {
  constructor() {
    this._items = [];
  }
  set(k, v) {
    const hashedKey = hash(k, 10);
    this._items[hashedKey] = v;
  }
  get(k) {
    const hashedKey = hash(k, 10);
    return this._items[hashedKey];
  }
}

//collision strategies
//separate chaining: storing multiple values in a bucket

//runtime 
//set //O(1) constant time
//get, has //mostly O(1)
//delete //mostly O(1)
//keys, values, entries //O(n) linear