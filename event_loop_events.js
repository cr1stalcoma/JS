const fs = require ("fs");
const dns = require("dns");

function timestamp () {
    return performance.now().toFixed(2)
}


console.log("Program start ..", timestamp());

// Timeouts

setTimeout(() => console.log("Timeout 1", timestamp(), 0))
setTimeout(() => {
    process.nextTick(() => console.log("Tick number 2", timestamp()))
    console.log("Timeout 2", timestamp())
}, 5)

//Intervals

let intervalCount = 0

const intervalId = setInterval(() => {
    console.log(`Interval ${intervalCount += 1}`, timestamp())
    if (intervalCount === 2) clearInterval(intervalId)
}, 50)

// Close events

fs.writeFile("./test.txt", "Hello Node.js", () => console.log ("File written", timestamp()))

// Promises

Promise.resolve().then(() => console.log("Promise 1", timestamp()))

// NextTicks
process.nextTick(() => console.log("Tick number 1", timestamp()))

// SetImmediate

setImmediate(() => console.log("Immediate 1", timestamp()))

//Input/OutputEvents

dns.lookup("localhost",(err, address, family) => {
    Promise.resolve().then(() => console.log("Promise 2", timestamp()))
    console.log("DNS 1, localhost", address, timestamp())
    process.nextTick(() => console.log("Next Tick 3", timestamp()))
})

console.log("Program end ..", timestamp());
