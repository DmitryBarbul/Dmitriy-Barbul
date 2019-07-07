//task  1

function multiply(arr) {
  if (arr.length) {
    let num = 1;
    for (let i=0; i < arr.length; i++) {
      num *= arr[i];
    }
    return num;
  } else {
    return arr = 0;
  }
};
console.log(multiply([8,2]));//enter here the arguments that you want to multiply

//task  2

function reverseString(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
};
console.log(reverseString('EasyCode'));//enter here the string that you want to reverse

//task 3

function unicodeStr(stringValue) {
  let res = '';
  let result ='';
  for (let i = 0; i < stringValue.length; i++ ) {
    res = res + stringValue[i];
    result += stringValue.charCodeAt(res.length-1) + ' ';
  }
  console.log(result);
}

unicodeStr('EasyCode');//enter here the string that you want to charcode


//task  4

function whatNumber (number) {
  let numb = Math.floor(Math.random()*10 + 1);
  if (number > 0 && number <= 10) {
      if (number > 0 && number < 11 && number == numb){
        console.log(`You won!`);
      }else if (number > 0 && number < 11 && number != numb){
        console.log(`Sorry, but you lose. The number is - ${numb} your number - ${number}`);
      }
  }else{
        console.log('Please enter a valid number (number needs to be grater than 0 and smaller than 10');
  }
};
whatNumber(6);//enter the number here and pray to the God of the random :)

//task  5

function getArray(n) {
  
  let result = [];
  for (let i = 1; i <= n; i++) {
   result.push(i);
   
  }
  return result
}
console.log(getArray(10));//enter here number wich you whant to fill to it

//task  6

const arr = [1,2,3]; //enter your array here 

function doubleArray(arr, fn) {
  const res = [];
    for (let i = 0; i < arr.length; i++){
      res.push(fn(arr[i]));
  }
    return fn(arr);
}

function concatArr() {
  return arr.concat(arr);
}
console.log(doubleArray (arr, concatArr));



//task  7

let firstArr = [1, 2, 3];
let secondArr = ['a', 'b', 'c'];

function changeCollection() {
  let result = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      let array = arguments[i];
        result(array);
  }
}

function deleteFunc(array) {
  array.shift();
}

changeCollection(firstArr, secondArr, deleteFunc);
console.log(firstArr, secondArr);

//task 8

const users = [{
  name: 'Den',
  age: 30,
  gender: 'male'
},
{
  name:'Dima',
  age: 22,
  gender: 'male'
},
{
  name: 'Lena',
  age: 24,
  gender: 'female' 
}];


function filterUsers(arr, field = '', value = '') {
	if (!Array.isArray(arr)) return [];
	const result = [];
	  for (let i = 0; i < arr.length; i++) {
		  if (arr[i][field] === value) {
			  result.push(arr[i]);
		}
	}
	return result;
}

const filteredUsers = filterUsers(users, 'gender', 'female');
console.log(filteredUsers);