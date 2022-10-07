/*
All properties and functions available in path module:
{
  resolve: [Function: resolve],
  normalize: [Function: normalize],
  isAbsolute: [Function: isAbsolute],
  join: [Function: join],
  relative: [Function: relative],
  toNamespacedPath: [Function: toNamespacedPath],
  dirname: [Function: dirname],
  basename: [Function: basename],
  extname: [Function: extname],
  format: [Function: bound _format],
  parse: [Function: parse],
  sep: '\\',
  delimiter: ';',
  win32: [Circular *1],
  posix: <ref *2> {
    resolve: [Function: resolve],
    normalize: [Function: normalize],
    isAbsolute: [Function: isAbsolute],
    join: [Function: join],
    relative: [Function: relative],
    toNamespacedPath: [Function: toNamespacedPath],
    dirname: [Function: dirname],
    basename: [Function: basename],
    extname: [Function: extname],
    format: [Function: bound _format],
    parse: [Function: parse],
    sep: '/',
    delimiter: ':',
    win32: [Circular *1],
    posix: [Circular *2],
    _makeLong: [Function: toNamespacedPath]
  },
  _makeLong: [Function: toNamespacedPath]
}
*/


const path = require('path');

const baseName = path.basename(__filename);
const delimiter = path.delimiter;
const dirName = path.dirname(__filename);
const extName = path.extname(__filename);
const formatted = path.format({ dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' });
const isAbsolute = path.isAbsolute(__filename);
const completeName = path.join('Users', 'Refsnes', 'demo_path.js');
const normalizedPath = path.normalize(__filename);
// const relativePath = path.relative('/Users/Refsnes/demo_path.js');
const seperator = path.sep;
const win = path.win32;

console.log(baseName);
console.log(delimiter);
console.log(dirName);
console.log(extName);
console.log(formatted);
console.log(isAbsolute);
console.log(completeName);
console.log(normalizedPath);
// console.log(relativePath);
console.log(seperator);
console.log(win);
