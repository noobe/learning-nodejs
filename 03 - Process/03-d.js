process.stdin.on('data', function(data) {
  console.log(data); //<Buffer 74 65 73 74 0a>
  console.log(data.toString());
});

/*
  Standard input uses the async event callback mechanism like in front end JS.
*/