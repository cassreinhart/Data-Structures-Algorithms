//typed array-- not super commonly used. good for optimization with binary data
//does not have push/pop, shift/unshift methods
//our typical, standard js array is called an indirect array
//indirect arrays don't store values, but rather a space in memory where the actual value is located

const arr = new Uint8Array(3);
arr //[0,0,0]

arr[0] = 67;
arr //[67, 0, 0]

arr[1] = 7999; //exceeds allowed space
arr //[67, 63, 0]

arr[2] = 'hello'; // not an integer
arr //[67, 63, 0]

