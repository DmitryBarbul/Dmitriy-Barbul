//High order function. Task №1

let firstCallback = ['My', 'Name', 'is', 'Trinity']; 
let secondCallback = [10, 20, 30];
let thirdCallback = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}]
let fourthCallback = ['cba', '321'];
 
function firstFunc(arr, handler){
  return 'New value: ' + handler(arr)
};
 
function handler1(arr){
  return arr.reduce((prev, item) => prev += item.charAt(0) + item.slice(1))
};
 
function handler2(arr){
  return arr.map(item => item * 10)
};

function handler3(arr){
  return arr.map( item => `${item.name} is ${item.age}`)  
};
 
function handler4(arr){
  return arr.map(item => item.split("").reverse("").join(""))
};
 
console.log(firstFunc(firstCallback, handler1));
console.log(firstFunc(secondCallback, handler2));
console.log(firstFunc(thirdCallback, handler3));
console.log(firstFunc(fourthCallback, handler4));

//High order function. Task №2 

function every (arrOfNumb , callback){
  if (!Array.isArray(arrOfNumb)) return false;
  if (typeof callback !== 'function') return false;

  const res = [];

  for (let i = 0; i < arrOfNumb.length; i++) {
		const callbackRes = callback(arrOfNumb[i], i , arrOfNumb);
        res.push(callbackRes);
      }
  return res;
};

function callbackfunc (el, index, arr) {
if (el >= 5) return true;
if (el < 5) return false;   
};

const ResFunction = every([1,2,3,4,5,6,7,8], callbackfunc);
console.log(ResFunction);

// Destructurization. Task №1

function destr (first, ...other) {
  console.log({first,other});
};
  destr ('a','b','c','d');

// Destructurization. Task №2

const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"]
  }
};

function getInfo({ name = 'Unknown', partners } = {}) {
    console.log(organisation.name, organisation.info.partners.splice(0, 2));
}
getInfo();


//Arrow function. Task №1

const sum = (...parameters) => {
  if (!parameters.length) return 0;

  return parameters.reduce((prev, next) => prev + next);
}

console.log(sum());
console.log(sum(1, 2, 3, 4));