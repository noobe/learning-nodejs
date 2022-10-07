/*
Printing 'Hello World'
*/

console.log('Hello world')

/*
Here, console.log() is available in the global context. Global is the context here similar 
  to 'window' in browser JS runtime.
*/

globalThis.console.log('This also works');

/*
But unlike browser JS, every globally scoped value does not get appended to 
  the common 'global' object maintained by the node runtime.
  Instead they get associated to the file's global scope
*/

let hello = 'Hello world globally';

console.log(global.hello); // Prints undefined when placed in another module and imported here
console.log(hello);        // Prints the text

/*
The global object has many more inbuilt items:
- queueMicrotask
- setImmediate | clearImmediate
- setTimeout | clearTimeout
- setInterval | clearInterval
- atob | btoa
- performance
- fetch
- structuredClone
*/

for (key in global) {
  console.log(key)
}

/*
Other items in global:
__dirname
__filename
*/

console.log(__dirname);
console.log(__filename);

/*
require(); - CommonJS module pattern
Just like in front end coding, putting all the code into a single file has many problems.
Hence we divide the functionality and place them in various files that can be refernced 
among each other using the module patterns. NodeJS supports commonJS patterns.
Here we import the exported item in a file into another file using require();
*/

const path = require("path");
console.log(path.basename(__filename)); // Gives the file name from the complete file path