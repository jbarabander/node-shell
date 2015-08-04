var fs = require('fs');

module.exports = {
  pwd: function(file) {
    process.stdout.write(process.cwd() + '\n');
    process.stdout.write('prompt > ');
  },
  date: function(file) {
    process.stdout.write(Date() + '\n');
    process.stdout.write('prompt > ');
  },
  ls: function(file) {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write('prompt > ');
    });
  },
  echo: function(file) {
    if(file[0] === "$") {
      var envVarName = file.slice(1);
      process.stdout.write(process.env[envVarName].toString() + "\n");
    }
    else {
      process.stdout.write(file.toString() + "\n");
    }
    process.stdout.write('prompt > ');
  }
}
