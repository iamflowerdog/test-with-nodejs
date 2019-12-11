
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, './test.json'), { encoding: 'utf-8' }, (err, data) => {
  console.time('cost');
  console.log(JSON.parse(data));
  console.timeEnd('cost');
})