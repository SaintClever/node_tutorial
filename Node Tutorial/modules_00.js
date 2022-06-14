// CommonJS - Because Node has commonJS built-in every file (in node) is a module by default
// modules
const secret = 'SUPER SECRET';
const john = 'john';
const peter = 'peter';

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

sayHi('susan');
sayHi(john);
sayHi(peter);
sayHi(secret);