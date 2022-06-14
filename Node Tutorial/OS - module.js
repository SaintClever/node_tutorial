const os = require('os');

// console.log(os);


// info about user
const user = os.userInfo();
console.log(user);


// metthod returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} in seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);
