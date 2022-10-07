/* setTimeout and setInterval works like in browsers */

console.log('Startig timer.');
setTimeout(function(){
  console.log('Printing after 2 seconds.')
}, 2000);
setInterval(function(){
  console.log('Ticks once in 3 seconds.')
}, 3000);