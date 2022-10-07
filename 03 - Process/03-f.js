/* Another advantage of using stdout over console.log is that the program has access to the stdout
  stream and it can clear previous messages and over write messages
*/

process.stdout.write('This is the text...');
process.stdout.clearLine(); //Clears the stdout stream and thus the terminal
process.stdout.cursorTo(0); //Even if prev message is cleared, the cursor still needs to be reset.
process.stdout.write('New text');