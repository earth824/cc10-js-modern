// function sum(...operands) {
//   return operands.reduce((acc, el) => acc + el, 0);
// }

// console.log(sum(1)); // operands: [1]
// console.log(sum(1, 5, 7)); // operands: [1, 5, 7]
// console.log(sum(9, 8, 7, 2, 3, 11, 98, 56, 23)); // operands: [9, 8, 7, 2, 3, 11, 98, 56, 23]

// splice (startIndex, numberDelete, ...insertElement)
// splice (...insertElement, startIndex, numberDelete ) Don't do this

// let arr = [3, 5, 1];
// console.log(Math.max([3, 5, 1])); // NaN
// console.log(Math.max(3, 5, 1)); // what we want
// console.log(Math.max(...[3, 5, 1])); // ...[3, 5, 1] spread to 3, 5, 1

// const arr = [
//   ...[1, 2, 3],
//   ...[4, 5, 6]
// ]; // [1, 2, 3, 4, 5, 6]
// let set = new Set([4, 7, 3]); // { 4, 7, 3 }
// ...set // 4, 7, 3
// [4, 7, 3]

// let str = 'CodeCamp';
// // 'C', 'o' ..., 'p'
// console.log([...str]);

// const a = [1, 2, 3, 4, 5, 6];
// const b = [...a];

// const per = { canView: true };
// const per2 = { canEdit: false, canDelete: false };
// const per3 = { canView: false, canEdit: true };

// const clonePer = { ...per }; // { canView: true }
// const cloned = { ...per, ...per2, ...per3 }; // { canView: true, canEdit: false, canDelete: false, canView: false, canEdit: true }

// const user = {
//   email: 'john@gmail.com',
//   address: ['Bangkok', 'Chiangmai'],
//   father: {
//     name: 'Jim',
//     phone: '0889991111'
//   },
//   mother: {
//     name: 'Jane',
//     phone: '0967890123'
//   }
// };

// อยากได้ชื่อพ่อ
// user.father.name ยาว อยากได้สั้นๆ
// const fatherName = user.father.name;
// const motherName = user.mother.name;

// const {
//   father: dad, // change variable name
//   mother: { name, phone },
//   email = 'abobymous@gmail.com',
//   gender = 'Male' // define default value
// } = {
//   email: 'john@gmail.com',
//   address: ['Bangkok', 'Chiangmai'],
//   father: {
//     name: 'Jim',
//     phone: '0889991111'
//   },
//   mother: {
//     name: 'Jane',
//     phone: '0967890123'
//   }
// };

// console.log(dad);

// const user = {
//   id: 1,
//   firstName: 'John',
//   lastName: 'Doe',
//   gender: 'Male',
//   birthDate: '1/1/1990'
// };

// const { id, firstName, ...otherInfo } = user;
// console.log(otherInfo);

// const user = [1, 'John', 'Doe', 'Male', '1/1/1990'];
// // const [id, firstName, lastName] = user;
// const [, , , , birthDate] = user;
// const [id, ...otherInfo] = user;
// console.log(otherInfo);

// const user = {
//   name: 'John',
//   age: 30
// };
// // loop over keys-and-values
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}:${value}`); // name:John, then age:30
// }

// const arr = [
//   ['John', 'Doe'],
//   ['Jack', 'Ma']
// ];

// const [[firstName1], [, lName2]] = [
//   ['John', 'Doe'],
//   ['Jack', 'Ma']
// ];
// console.log(firstName1);
// console.log(lName2);

// function a() {
//   function b() {
//     console.log('B Function');
//     var bScope = 'B';
//   }
//   b();
//   var aScope = 'A';
//   console.log(bScope);
// }

// a();
// console.log(bScope);

// Hoisting
// var a;
// function fc() {
//   console.log('fc');
// }
// var a = 500;
// console.log(a);
// fc();
// for (let i = 0; i < 10; i++) {
//   var a = 29;
// }
// console.log(a);
// var a = 100;
// console.log(a);
// function fc() {
//   console.log('fc');
// }

// window.a
// window.fc()

// const user = { name: 'John' };

// import aaaaaaaaaaaaa from './app.js';
// import aaaaaaaaaaaaa, { sayHi as hi, MONTH, leapYears } from './app.js';
// import * as app from './app.js';
// import { MONTH as m } from './index.js';
// hi('John');
// console.log(app.MONTH);
// console.log(aaaaaaaaaaaaa(1, 5));

// Lab 1.1
// const multiply = (...numbers) => numbers.reduce((acc, el) => acc * el, 1);

// Lab 1.2
// const filterOutOdds = (...numbers) => numbers.filter(el => el % 2 === 0);

// Lab 1.3
// const mergeObjects = (...objects) => Object.assign({}, ...objects.reverse());
// console.log(mergeObjects({ name: 'M' }, { age: 12, name: 'Ton' }, { name: 'Pipe', age: 15 }));

// Lab 1.4
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// const concatArray = [5, ...nums1, -6, -1, ...nums2];
// const sum = concatArray.reduce((acc, el) => acc + el, 0);

// Lab 1.5
// const squareIndexThree = array => {
//   const clone = [...array];
//   if (clone[3]) {
//     clone[3] = clone[3] ** 2;
//   }
//   return clone;
// };
// console.log(squareIndexThree([]));
// console.log(squareIndexThree([1, 3, 5, 2, 9]));

// Lab 1.6
// const person = (firstName, lastName, ...hobbies) => ({ firstName, lastName, hobbies, numHobby: hobbies.length });

// Lab 1.7
// const doubleAndReturnArgs = (array, ...numbers) => [...array, ...numbers.map(el => el * 2)];
// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// console.log(doubleAndReturnArgs([1], 3, 9, 6, 1));

// Lab 1.8
// const removeRandom = array => {
//   const randomIndex = Math.floor(Math.random() * array.length);
//   return [...array].splice(randomIndex, 1);
// };

// Lab 1.9
// const cloneArray = array => [...array];

// Lab 1.10
// const cloneObject = object => ({ ...object });

// Lab 2.3
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers);

// Lab 2.7
// let guest = 'Jane';
// let admin = 'Pete';
// let dummy = guest;
// guest = admin;
// admin = dummy;

// [guest, admin] = [admin, guest];
// console.log(guest);
// console.log(admin);

// Lab 2.8
// const checkAge = ({ age }) => {
//   if (age <= 18) {
//     alert('Unauthorized');
//   }
// };

// Lab 2.9
// let user = {
//   name: 'John',
//   years: 27
// };
// const { name, years: age, isActive = true } = user;

// Lab 2.10
// const topSalaries = salaries => {
//   let topSalaryName;
//   let maxSalary = 0;
//   // [key, value]
//   for (let [name, salary] of Object.entries(salaries)) {
//     if (salary > maxSalary) {
//       topSalaryName = name;
//       maxSalary = salary;
//     }
//   }
//   // return topSalaryName ?? null;
//   return topSalaryName ? topSalaryName : null;
// };

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };
// console.log(topSalaries(salaries));

// Lab 2.11
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// const [a, [b, [[[c, d], e], f]]] = arr;
// console.log(a, b, c, d, e, f);

// Lab 2.12
// const obj = { prop: 5, prop2: 10 };
// const { prop: a, prop2: b } = obj;
// console.log(a, b);

// Lab 2.13
// let a, b;
// { a, b } = {a: 1, b: 2}; // Error

// Lab 2.15
// const q = { prop: 5, prop2: [10, 100] };
// const {
//   prop: a,
//   prop2: [, b]
// } = q;
// console.log(a, b);

// Lab 2.16
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };
// const {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested: [, y]
//     }
//   }
// } = q;
// console.log(x, y);

// Lab 2.17
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for (let { firstName, lastName } of names) {
//   console.log(`${firstName} ${lastName}`);
// }

// Lab 2.18
// const users = [{ user: 'Name1' }, { user: 'Name2', age: 2 }, { user: 'Name2' }, { user: 'Name3', age: 4 }];

// for (let { user, age = 'Unknown' } of users) {
//   console.log(`${user} ${age}`);
// }

// Lab 3.3
// let phrase = 'Hello';
// if (true) {
//   let user = 'John';
//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }
// sayHi(); //

// Lab 3.4
// let x = 1;
// function func() {
//   console.log(x); // * Error
//   let x = 2;
// }
// func();

// Lab 3.5
// const inBetween = (a, b) => el => el >= a && el <= b;

// function inBetweenDeclaration(a, b) {
//   return function (el) {
//     return el >= a && el <= b;
//   };
// }

// const inArray =
//   (...numbers) =>
//   el =>
//     numbers.includes(el);

// function inArrayDeclaration(...numbers) {
//   return function (el) {
//     return numbers.includes(el);
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inBetween(3, 6))); // expected: 3,4,5,6
// console.log(arr.filter(inArray(1, 2, 10))); // expected: 1,2

// Lab 3.6
// const byField =
//   (key, type = 'asc') =>
//   (a, b) => {
//     if (type === 'desc') {
//       return b[key] > a[key] ? 1 : -1;
//     } else {
//       return a[key] > b[key] ? 1 : -1;
//     }
//   };

// let users = [
//   { name: 'John', age: 20, surname: 'Johnson' },
//   { name: 'Pete', age: 18, surname: 'Peterson' },
//   { name: 'Ann', age: 19, surname: 'Hathaway' }
// ];
// // [...users].sort(byField('name', 'desc')); // sort by name ascending
// console.log([...users].sort(byField('name', 'desc')));
// // users.sort(byField('age', 'desc')); // sort by age descending
// console.log([...users].sort(byField('age', 'desc')));
// // console.log(users);

class Employee {
  isActive = true;

  constructor(a, b, c, d, ...e) {
    this.firstName = a;
    this.lastName = b;
    this.salary = c;
    this.department = d;
    console.log(e);
  }
  // firstName, lastName, salary, department
  getFullname() {
    return this.firstName + ' ' + this.lastName;
  }

  changeFirstName(newName) {
    this.firstName = newName;
    // this.testSuper();
  }

  testSuper() {
    console.log('Call from child');
  }
}

// const emp1 = new Employee('John', 'Doe', 15000, 'Account', 'a', 'b');
// console.log(emp1.getFullname());
// console.log(emp1.firstName);
// emp1.changeFirstName('Monica');
// console.log(emp1.getFullname());

// emp1.nickname = 'J';
// console.log(emp1.nickname);

// class Manager extends Employee {
//   constructor(a, b, c, d) {
//     super(a, b, c, d);
//     this.canAccessSecretFile = true;
//   }
//   getFullname() {
//     return `I'm a manager. FirstName is ${this.firstName}. LastName is ${this.lastName}`;
//   }

//   getReport() {
//     super.testSuper();
//   }
// }

// const man1 = new Manager('Alice', 'Keys', 66000, 'Service');
// console.log(man1.getFullname());
// console.log(man1);
// man1.getReport();

// class Coordinator {
//   constructor(a, b, c, d) {
//     this.firstName = a;
//     this.lastName = b;
//     this.salary = c;
//     this.department = d;
//   }
// }

// const co1 = new Coordinator('Felix', 'Ma', 10000, 'IT');
// Array.prototype.map = function () {
//   console.log('Edit Array map function');
// };

// const obj = {}; // new Object();
// const arr = [1, 2]; // new Array(1, 2)
// const resyult = arr.map(el => el * 2);
// console.log(resyult);
// console.log(arr);
// console.log(arr.toString());

// setTimeout(function () {
//   console.log('Hello SetTimeout');
// }, 3000);
// console.log('After setTimeout');

// Lab 5.1
// class Calculator {
//   value = 0;

//   constructor(initialValue = 0) {
//     this.value = initialValue;
//   }

//   sum(number) {
//     this.value += number;
//     return this;
//   }

//   multiply(number) {
//     this.value *= number;
//     return this;
//   }

//   subtract(number) {
//     this.value -= number;
//     return this;
//   }

//   divide(number) {
//     this.value /= number;
//     return this;
//   }

//   show() {
//     console.log(this.value);
//     return this;
//   }
// }

// const calc = new Calculator(10);
// // calc.sum(5);
// // calc.subtract(7);
// // calc.multiply(4);
// // calc.divide(2);
// // calc.show();

// calc.sum(4).subtract(9).divide(3).show();

// Lab 5.2
// class Sale {
//   constructor(name) {
//     this.name = name;
//   }

//   calcPrice() {
//     return (this.amount * (this.price * (1 - this.discount / 100))).toFixed(2);
//   }
// }

// class Beverage extends Sale {
//   constructor(name, amount, price, discount) {
//     super(name);
//     this.amount = amount;
//     this.price = price;
//     this.discount = discount.slice(0, discount.length - 1);
//   }
// }

// const pepsi = new Beverage('Pepsi', 3, 19, '10%');
// console.log(pepsi.calcPrice());

// Lab 6.1
Array.prototype.max = function () {
  return Math.max(...this);
};

Array.prototype.sum = function () {
  return this.reduce((acc, el) => acc + el, 0);
};

const arr = [1, 4, 7, 2, 10, 5, 11, 1];
console.log(arr.max()); // 7
console.log(arr.sum());

// Lab 6.2
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log('Hello!');
}
f.defer(5000); // shows "Hello!" after 1 second
