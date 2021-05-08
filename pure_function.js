/* 
    Pure function:
        1- When it takes the same input and produce the same output.
        2- when the function has no side effects outside the function (e.g changing an object outside the function.)
*/

/* 
    Impure function:
        1- When it takes the same input and produce different output everytime (e.g multiply a number by a random number).
        2- When the function has side effects outside the function (e.g changing an object outside the function. )
*/

// Pure function
const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
// console.log(addTwoNumbers(1, 2)); =>> Result: always 3
console.log(addTwoNumbers(1, 2));

// Impure function
const multiplyByRandomNumber = (num1) => {
  return num1 * Math.random();
};
// console.log(multiplyByRandomNumber(1)); =>> Result: it depends on the return value of the Math.random().
console.log(multiplyByRandomNumber(1));

// Impure function
const users = ['Ahmed', 'Mohamed', 'Mostafa'];

const addUser = (user) => {
  // changing an object outside the function.
  users.push(user);
};
// addUser('Khalid'); =>> Result: ['Ahmed', 'Mohamed', 'Mostafa']; =>> (It has side effects: [changing the users object])
addUser('Khalid');
console.log(users);


/* 
    In general: You have to aim for pure functions, because they are predictable and you can debug them easily.
    But, It's okay if you have impure functions, Just try to downsize them.
*/
