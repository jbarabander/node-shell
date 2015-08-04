// Output a prompt
// console.log(process.argv);
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(d) {
  var cmd = d.toString().trim(); // remove the newline
  if(cmd === 'pwd'){
    process.stdout.write(process.cwd() + "\n");
  }
  else if(cmd === 'date') {
    process.stdout.write(Date() + '\n');
  }

  process.stdout.write('prompt > ');


});
commandName = process.argv[3];
