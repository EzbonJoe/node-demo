const {readFile, writeFile, read} = require('fs');

console.log('Start')
readFile('./content/first.txt','utf8', (err, result) => {
  if(err){
    console.log('error');
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if(err){
      console.log('error');
      return
    }
    const second = result;
    writeFile('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
      if(err){
        console.log('error');
        return;
      }

      console.log('Done with this task');
    });
  });
});

console.log('Moving on to the next task');