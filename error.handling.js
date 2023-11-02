// error => Something unexpected happens
// humans make error

// ? handling error:
// Put your error prone code to try block
// put error management logic in catch block

const a = 4;

try {
  a = 10;
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finally"); // Finally block runs whatever the case it is
}
