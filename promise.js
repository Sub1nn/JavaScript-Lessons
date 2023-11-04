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
// ? Stack => call Stack => Node piles all the synchronous task into the call stack which serves as a LAST IN FIRST OUT (LIFO) or FIRST IN LAST OUT (FILO) concept i.e, the event which is at the last of the stack will get rendered first.

//NODE piles all the asynchronous task into Queue
// ? Queue => whoever comes first in the line or the queue will get the service first like waiting for a drink in bar, whoever in the queue comes first will get served first.
// ? Queue works as a FIRST IN FIRST OUT (FIFO) concept
// ? In case of setTimeOut or SetInterval, the tasks only comes to the queue after the timer is up like 10ms task comes to the queue first then 100ms task.
// ? In case of API requests, the APIs that has strong server or that comes to our network first will position first in the queue and get rendered first. If the server is too slow and takes a lot of time to even comes to the queue will get handled by catch error.

// In the below example Node puts A and D in the stack as a synchronous operation and it puts B and C in the queue as an asynchronous operation.
// Node always renders the stack first and go for the queue

// ! Event loop comes in play after completing the synchronous task in the call stack. It checks if the call stack is empty and if it is, it starts to pile up tasks from the queue to the call stack as per the earlier mentioned FIFO concept. Then the tasks will get rendered as per the STACK concept.

// Below A and D will get rendered first and then comes the turn of B and C.

console.log("A");
setTimeout(() => {
  // SetTimeout is an asynchronous operation
  console.log("B");
}, 10);
setTimeout(() => {
  console.log("C");
}, 100);
console.log("D");
