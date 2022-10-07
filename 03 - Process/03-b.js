/* Lets try to grab the command line argument when this program is being executed*/
// Sample cmd line: node 03-b.js --user Sarath --gender Male --age 34

function grab(flag) {
  const flagIndex = process.argv.indexOf(flag);
  return flagIndex === -1 ? 'N/A' : process.argv[flagIndex+1];
}

const nameValue = grab('--name');
const genderValue = grab('--gender');
const ageValue = grab('--age');

console.log(`The entered values are: 
    name: ${nameValue}, 
    gender: ${genderValue},
    age: ${ageValue}.`);