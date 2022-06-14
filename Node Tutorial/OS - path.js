const path = require('path');

// console.log(path);
// console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);


const base = path.basename(filePath);
console.log(base);


const absolute_00 = path.resolve(__dirname);
console.log(absolute_00);


const absolute_01 = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute_01);