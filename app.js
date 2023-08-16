function car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
let car1 = new car("ford", "Mustang", "1969");
let car2 = new car("benz", "mersedens", "1950");
console.log(car1);
console.log(car2);
