const {factorial} = require('../src/factorialOfNumber.js');
const {deepEqual} = require('assert');

describe('Factorial Of A Number',function(){
  it('should return 1 when given 1 or 0',function(){
    deepEqual(factorial(1),1); 
    deepEqual(factorial(0),1); 
  });
});
