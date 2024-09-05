const os = require('os')

//info about the user
const user = os.userInfo()
console.log(user);

//method returns system uptime
console.log(`The system uptime is ${os.uptime()/3600} hours`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOs);