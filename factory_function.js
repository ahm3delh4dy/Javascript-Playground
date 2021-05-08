/* 
    A factory function: function that produce another function, object.

    // TODO: loose copuling

*/

const add = (num1, num2) => num1 + num2;

const resultOne = add(1, 2);
const resultTwo = add(3, 4);

const calculate = (firstNumber, operation) => {
  const add = (secondNumber) => {
    return firstNumber + secondNumber;
  };

  const sub = (secondNumber) => {
    return firstNumber - secondNumber;
  };

  const mul = (secondNumber) => {
    return firstNumber * secondNumber;
  };

  const div = (secondNumber) => {
    return firstNumber / secondNumber;
  };

  // replace the if conditions with the object[key]
  const result = {
    add,
    sub,
    mul,
    div,
  };
  return result[operation];
};

// replace the if conditions with the object[keys]
//   return operation === '+'
//     ? add
//     : operation === '-'
//     ? sub
//     : operation === '*'
//     ? mul
//     : div;

const calcResult = calculate(2, 'sub');

console.log(calcResult(3));
