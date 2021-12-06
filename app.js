const user = {};

export function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

export const MONTH = ['January', 'February', 'March'];

function sayHello() {
  console.log('Hello World');
}

const leapYears = [2000, 2004, 2008, 2012];
export { leapYears, sayHello };

export default function (a, b) {
  return a + b;
}
