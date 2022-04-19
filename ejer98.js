const microMacro = () => {
function logA() { console.log('A') };
function logB() { console.log('B') };
function logC() { console.log('C') };
function logD() { console.log('D') };
function logE() { console.log('E') };
function logF() { console.log('F') };
function logG() { console.log('G') };
function logH() { console.log('H') };
function logI() { console.log('I') };
function logJ() { console.log('J') };

logA();
setTimeout(logG, 0); // Macrotask 
Promise.resolve() // Microtask, se resolverá primero que setTimeout 
  .then(logC)
  .then(setTimeout(logH))
  .then(logD)
  .then(logE)
  .then(logF);
setTimeout(logI); // Macrotask 2 
setTimeout(logJ); // Macrotask 3
logB(); // Sincrono. Se resolvera antes que todas las instrucciones anteriores de promise y timeout
}

console.log(microMacro());

// A B C D E F G H I J