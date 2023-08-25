// function showAll() {
//   let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let b = [];
//   let check = a.forEach((item) => {
//     if (item % 2 != 0) {
//       return b.push(item);
//     }
//   });
//   return b;
// }

// let [a, b, ...c] = showAll();

// console.log(a, b, c);

class Enemy {
  constructor(health, damage, color, name, familyName) {
    this.health = health;
    this.damage = damage;
    this.color = color;
    this.name = name;
    this.familyName = familyName;
  }
  fullName() {
    return `its ${this.name} ${this.familyName}`;
  }
}

class strongEnemy extends Enemy {
  constructor(health, damage, color, name, familyName, age) {
    super(health, damage, color, name, familyName);
    this.age = age;
  }
  go() {
    return this.fullName();
  }
}

let frog = new Enemy(50, 1, "green", "gry", "fro");

let dragon = new strongEnemy(10000, 999, "red", "sum", "sumy", "150 years old");
console.log(frog);
console.log(frog.fullName());

console.log(dragon);
console.log(dragon.go());
