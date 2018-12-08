const factorial = function(number){
  if(isNaturalNumber(number)){
    return number * factorial(number-1);
  }else{
    return 1;
  }
}

const isNaturalNumber = function(number){
  return number >= 1;
}

module.exports = {factorial}
