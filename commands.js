var fs = require('fs');
var request = require('request');

module.exports = {
  pwd: function(stdin,file,callback) {
    callback(process.cwd() + '\n');
  },
  date: function(stdin,file,callback) {
    callback(Date() + '\n');
  },
  ls: function(stdin,file,callback) {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      var str ='';
      files.forEach(function(file) {
        str += file.toString() + "\n";
      })
      callback(str);
    });
  },
  echo: function(stdin, file, callback) {
    if(file[0] === "$") {
      var envVarName = file.slice(1);
      callback(process.env[envVarName].toString() + "\n");
    }
    else {
      callback(file.toString() + "\n");
    }
  },
  cat: function(stdin, file, callback) {
    fs.readFile(file, {encoding: 'utf8'}, function(err, data) {
      if (err) throw err;
      callback(data + '\n');
    });
  },
  head: function(stdin, file, callback) {
    fs.readFile(file, {encoding: 'utf8'}, function(err, data) {
      if (err) throw err;
      data = data.split('\n');
      data = data.slice(0,5).join('\n');
      callback(data + '\n');
    });
  },
  tail: function(stdin, file, callback) {
    fs.readFile(file, {encoding: 'utf8'}, function(err, data) {
      if (err) throw err;
      data = data.split('\n');
      data = data.slice(-5).join('\n');
      callback(data + '\n');
    });
  },
  sort: function(stdin, file, callback) {
    fs.readFile(file, {encoding: 'utf8'}, function(err, data) {
      if (err) throw err;
      data = data.split('\n');
      data = data.sort(function(a,b){
        return b.toLowerCase() < a.toLowerCase();
      });
      data = data.join('\n');
      callback(data + '\n');
    })
  },
  wc: function(stdin, file,callback) {
    fs.readFile(file, {encoding: 'utf8'}, function(err, data) {
      if(err) throw err;
      data = data.split('\n');
      //data = data.filter(function(element){element !== '';})
      callback(data.length + '\n');
    })
  },
  uniq: function(stdin, file, callback) {
    fs.readFile(file, {encoding: 'utf8'}, function(err, data) {
      if(err) throw err;
      data = data.split('\n');
      var newArr = data.filter(function(elem,index,data) {
        return data[index] !== data[index + 1];
      })
      newArr = newArr.join('\n');
      callback(newArr + '\n');
    })
  },
  curl: function(stdin, url, callback) {
    request(url, function(err, response, body) {
      // console.log(body);
      if(err) throw err;
      if(response.statusCode == 200) {
        callback(body + '\n');
      }
    });
  }

}
