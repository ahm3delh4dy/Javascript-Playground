// taking an array and convert it to a list [LinkedProperties].

const arrToList = (arr) => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

console.log(arrToList([30, 40]));
// → {value: 30, rest: {value: 40, rest: null}}
