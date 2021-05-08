// an inner function can access the outer function variables and the global scope varaibles.s

const ageTwo = 25;

const init = () => {
  const age = 21;
  const displayAge = () => {
    console.log(age);
    console.log(ageTwo);
  };
  displayAge();
};

init();
