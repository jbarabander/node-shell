// console.log(Object.keys(process));
var commands = require('./commands.js');

process.stdout.write('prompt > ');

var done = function(output) {
  process.stdout.write(output);
  process.stdout.write('prompt > ');
}
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(d) {

  var cmd = d.toString().trim(); // remove the newline
  cmdList = cmd.split(/\s*|\s*/g);
  var cmd1 = cmdList[0];
  var cmd1 = cmd.split(' ');
  // console.log(process.argv);
  commands[cmd1[0]](cmd1[1],done);
});
// commandName = process.argv[3];
