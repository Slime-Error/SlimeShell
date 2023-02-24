const fs = require('fs');

// use fs.writeFile for creating a new log instance each time or use fs.appendFile for appending this line break without loosing log data. Default: Append Log Data
fs.appendFile('./logs/log.txt', "\n---New Instance Log---", function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Data written to file.');
});

module.exports.log = function (logData) {
  fs.appendFile('./logs/log.txt', `\n${logData}`, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Data written to file.');
  }
)};

module.exports.logRead = function () {
  fs.readFile('./logs/log.txt', 'utf8', function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Read from file: ${data}`);
  }
)};