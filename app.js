
/*const amount = 12;

if(amount  < 10){
  console.log('Small number');
}else{
  console.log('Big number');
}

console.log(`Hello world!!`);
*/

const _ = require('lodash');

const items = [1, [ 2, [ 3, [ 4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);