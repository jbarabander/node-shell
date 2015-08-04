// console.log(Object.keys(process));
var commands = require('./commands.js');
// process.stdout.write('prompt > ');
//
// process.stdin.on('data', function(d) {
//   var cmd = d.toString().trim();
//   if(cmd === 'pwd'){
//     process.stdout.write(process.cwd() + "\n");
//   }
//   else if(cmd === 'date') {
//     process.stdout.write(Date() + '\n');
//   }
//
//   process.stdout.write('prompt > ');
//
// });

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(d) {

  var cmd = d.toString().trim(); // remove the newline
  cmd = cmd.split(' ');
    // console.log(process.argv);
    commands[cmd[0]](cmd[1]);
});
// commandName = process.argv[3];
