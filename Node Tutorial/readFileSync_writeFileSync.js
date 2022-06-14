const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(`${first} \n${second}`);


// write file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result:\n${first}\n${second}`
);

// append to file
writeFileSync(
    './content/result-sync.txt',
    '\nHello append!!!',
    { flag: 'a' }
)


const resultSync = readFileSync('./content/result-sync.txt');
console.log(`${resultSync}`);