const factorial = function(number){
  if(number >= 1){
    return number * factorial(number-1);
  }else{
    return 1;
  }
}

module.exports = {factorial}
