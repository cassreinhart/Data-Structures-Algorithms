function a() {
  console.log("hello");
  b();
  console.log("coding");
}

function b() {
  console.log("world");
  c();
  console.log("love");
}

function c() {
  console.log("i");
}

// function count() {
//   let n = 1;

//   while (n <= 3) {
//     console.log(n);
//     n += 1;
//   }
// }

// count();

// function count(n=1) {
//   if (n > 3) return;

//   console.log(n);
//   count(n + 1);
//   console.log(n);
// }

// count();

function count(n = 1) {
  if (n <= 3) {
    console.log(n);
    count(n + 1);
  }
}

// count()


function sum(nums) {
  //base case
  if (nums.length === 0) return 0;
  //normal case
  return nums[0] + sum(nums.slice(1)) //making a new array every time isn't ideal //O(n^2) runspace and runtime...
}

function sum(nums, i = 0){
    //Base Case
    if(nums.length === 0) return 0;
    //Normal Case
    return nums[0] + sum(nums, i + 1) //Linear O(n) runtime and runspace complexity
}

// sum([3,4,5])
//      3 + sum([4,5])
//                 4 + sum([5])
//                         5 + sum([])
//                                 0
// sum([3,4,5])
// function doubler(nums) {
//   stack = nums.reverse();

//   while (stack.length > 0) {
//     console.log(stack);
//     let n = stack.pop();
//     if(Array.isArray(n)) {
//       // If array, add it to stack, reversed
//       for (let inner of n.reverse()) {
//         stack.push(inner);
//       }
//     } else {
//       console.log(n * 2);
//     }
//   }
// }

function doubler(nums) {
  for (let n of nums) {
    if (Array.isArray(n)) {
      doubler(n)
    } else {
      console.log(n * 2)
    }
  }
}

//js call stack acts as stack which we created on line 69;
//when working with arbitrary nesting, these often lend themselves towards recursive approaches.
function doubler(nums) {
  for (let n of nums) {
    if (Array.isArray(n)) {
      doubler(n);
    } else {
      console.log(n * 2);
    }
  }
}

doubler([5, 6, [7, 8, 9, [10, 11]]]);


//anything to do with a file system, fractals, parsing mathematical expressions, etc. nested data (dom, arrays, etc.),
//you can write anything iterative recursively, and you can write anything recursive iteratively. 