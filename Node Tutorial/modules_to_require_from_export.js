// CommonJS - Because Node has commonJS built-in every file (in node) is a module by default
// modules

const sayHi_func = require('./modules_to_export_function');
console.log(sayHi_func);


const names = require('./modules_to_export_variables');
console.log(names);

sayHi_func('susan');
sayHi_func(names.john);
sayHi_func(names.peter);


// or you can destructor the object
const {john, peter} = require('./modules_to_export_variables');
console.log(john, peter);

sayHi_func('susan');
sayHi_func(john);
sayHi_func(peter);

