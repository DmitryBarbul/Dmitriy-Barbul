//Task №1

function minus(num = 0){
  return function(numb = 0){
      return num - numb;
  }
};


//Task №2

function multiplyMaker(num){
  return function(numb){
      return num *= numb;
  }
};

const multiply = multiplyMaker(2);

//Task №3

const mainFunction = ( function  (string) {
function checkStr (value){
  if (typeof value === 'undefined') {value = ''}
  if (typeof value === 'number') {value + ''}

  string = value;
    return string;
}
function getStr (value){
    return value.valueOf();
}
function lengthStr(){
    return string.length;
}
function reverseStr (value){
    let defaultValue = "";
    string = value;

    for (let i = string.length - 1; i >= 0; i--){
      defaultValue += string[i];
    }
    return defaultValue;
}
return {
  checkStr,
  getStr,
  lengthStr,
  reverseStr 
}
})();

console.log(mainFunction.checkStr('abcd'));
console.log(mainFunction.getStr('abcd'));
console.log(mainFunction.lengthStr());
console.log(mainFunction.reverseStr('abcd'));

//Task №4

const calculator = ( function() {
  let num = 0;
  function putNum(value){
      num = value;
      return this;
  }
  function plus(value){
      num += value;
      return this;
  }
  function multiply(value){
      num *= value;
          return this;
  }
  function minus(value){
      num -= value;
      return this;
  }
  function power(value){
      num = Math.pow(num,value);
      return this;
  }
  function getValue(){
      num = Math.round(num);
      return num;
  }
  return{
    putNum,
    plus,
    minus,
    multiply,
    power,
    getValue
  }
})();

console.log(calculator.putNum(10).power(2).getValue());
