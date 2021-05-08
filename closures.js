/* 
  - closures: before we can talk about what is the heck is a closure, let's talk about an intersting concept called `Lexical scope`.
  
  - Lexical scope: is where the function/variables can be called or executed.
  - Ex:
    `
      const someFunc = () => {
        // the lexcial scope of `someConst` it's only available in the block of someFunc scope.
        const someConst = 'Some constant';

        // so we can use `someConst` only here.
        console.log(someConst);
      }
      // and we cannot use someConst here.. [That's what a lexical scope means].
    `

  - closures: combination of a function and a lexcial environment (scope) which that function was declared.

  - A closure is created when any function is declared [IMPORTANT].
*/

// Declare an outerFunction called init()
const init = () => {
  // define a constant called age which its lexcial scope is available only in the outerFunction and inside the innerFunction.
  const age = 21;
  // Declare an innerFunction called displayAge, that logs the `age` constant, which is available because it's lexical scope.
  const displayAge = () => console.log(age);
  // return the innerFunction from the outerFunction scope.
  return displayAge;
};

// assign the return value which is a `function` to the const `result`
const result = init();
// call the `result` function
result(); // result: 21

/* 
  1- The function `displayAge` can use any local variables that were defined in its lexical scope. [that means it can access the `age` constant].
  2- The function `init` is a reference to the instance of the function `displayAge`.
  3- The instance of the function `displayAge` maintains a reference to its lexical scope (which is the `init` function scope).
  4- Since the function `displayAge` has a reference to its lexical scope, It can managed any local variables that were defined in its lexical scope (outerFunction), hence `age` constant, even after the `init` function is invoked.
*/
