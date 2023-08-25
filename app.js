function foo() {
  return [1, 3, 5, 7, 9];
}

let [a, b, c, ...d] = foo();

console.log(a, b, c, d);
