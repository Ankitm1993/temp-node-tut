const os = require("os");

// first option to access os built-in Module properties and methods:
//info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
