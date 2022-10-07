/*
  In previous example we noticed that when we used the event callback based mechanism to 
  access user input data, the process was running indefinitly and it needed the user intervention
  to kill it from terminal.
  This can be done programatically from within the process using process.kill();
*/

process.stdin.on('data', function(data) {
  console.log(data.toString());
  process.exit();
});