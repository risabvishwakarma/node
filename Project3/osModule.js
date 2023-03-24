const os=require('os')

const currentOS={
    name:os.userInfo(),
    cpu:os.cpus(),
    totalmem:os.totalmem()/(1024*1024*1024),
    remainmem:os.freemem()/(1024*1024*1024),
    plateform:os.platform(),
    hostname:os.hostname(),


}

console.log(currentOS);
console.log();