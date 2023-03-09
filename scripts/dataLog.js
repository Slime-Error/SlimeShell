const fs = require('fs');

// use fs.writeFile for creating a new log instance each time or use fs.appendFile for appending this line break without loosing log data. Default: Write (New Log) Then --> Data = dataLog.write()
fs.writeFile('./logs/log.txt', "---------------------New Instance Log---------------------", function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Data written to file.');
});

module.exports.write = function (logData) {
  fs.appendFile('./logs/log.txt', `\n${logData}`, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Data written to file.');
  }
)};

module.exports.read = function (callback) {
  fs.readFile('./logs/log.txt', 'utf8', function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    callback(data);
  })
};