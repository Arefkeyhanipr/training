function showAll() {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let b = [];
  let check = a.forEach((item) => {
    if (item % 2 != 0) {
      return b.push(item);
    }
  });
  return b;
}

let [a, b, ...c] = showAll();

console.log(a, b, c);
