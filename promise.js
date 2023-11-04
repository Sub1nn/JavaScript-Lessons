// promise => something that happens in future
// node => node is a single threaded (uses just one thread ata time)
// big task => loop running for billion times, image processing, api hit(accessing data through network) are examples of time consuming task
// blocking
// Node achieves non blocking through event loop

//eg 1: big task
// console.log("A");
// for (let index = 0; index < 100000000; index++) {
//   console.log(index);
// }
// console.log("B");

//In the above example it will take so much time to reach from A to B as the loop is running a billion times before reaching B and before reaching the system might also crash.

//eg 2: running something in future

// Managing data structure with node => Stack and Queue
// ? Stack => call Stack => Node piles all the synchronous task into the call stack which serves as a LAST IN FIRST OUT (LIFO) or FIRST IN LAST OUT (FILO) concept

//NODE piles all the asynchronous task into Queue
// ? Queue => whoever comes first in the line or the queue will get the service first like waiting for a drink in bar, whoever in the queue comes first will get served first.
// ? Queue works as a FIRST IN FIRST OUT (FIFO) concept

console.log("A");
setTimeout(() => {
  console.log("B");
}, 10);
setTimeout(() => {
  console.log("C");
}, 100);
console.log("D");
