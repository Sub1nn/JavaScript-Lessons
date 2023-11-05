// ? asynchronous => not existing or occurring at the same time
// pending, success, error

// ?? callback

// const getSum = (a, b, callbackFunc) => {
//   let error = true;
//   setTimeout(() => {
//     let total = a + b;
//     if (error) {
//       callbackFunc("There's an error", "We are sorry");
//     } else {
//       callbackFunc(null, total);
//     }
//   }, 1000);
// };

// getSum(3, 5, (error, result) => {
//   console.log(error, result);
// });

// ?? promise approach then..cath

// const promise = new Promise((resolve, reject) => {
//   let error = false;
//   setTimeout(() => {
//     let total = 5 + 3;
//     if (error) {
//       reject("There's an error");
//     } else {
//       resolve(total);
//     }
//   }, 1000);
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ?? async..await

// const resolvePromise = async () => {
//   try {
//     const res = await promise;
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };
// resolvePromise();

const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(res);
    const data = await res.json();
    //console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();
