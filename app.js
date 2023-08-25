function showAll() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

let [a, b, c, d, e, ...f] = showAll();

console.log(a, b, c, d, e, f);
