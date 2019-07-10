//This task №1
const rectangle = {
  width: 10, 
  height: 20, 
  getSquare: function () { return this.width * this.height }
};
let res = rectangle.getSquare.bind(rectangle);
console.log(res());

//This task №2
const product = {
  price: 10,
  discount: '15%',
  getPrice: function() { return this.price },
  getPriceWithDiscount: function() {
    const discount = parseInt(this.discount)
    return (this.price - ((this.price *  discount)/100))
  }
};

console.log(product.getPrice());
console.log(product.getPriceWithDiscount());

//This task №3
const object = {
  height:10,
  increasedHeight: function() {return this.height +1}
};
console.log(object.increasedHeight());

//This task №4

const numerator = {
  value: 1,
  double: function () { this.value *= 2; return this },
  plusOne: function () { this.value++; return this },
  minusOne: function () { this.value--; return this },
};

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

//This task №5
const prod = {
  price: 100,
  quantity: 10,
  allProductsPrice: function () { return this.price * this.quantity }
};

console.log(prod.allProductsPrice());

//This task №6
const newProduct = {
  price: 250,
  quantity: 12,
}

console.log(prod.allProductsPrice.call(newProduct));

//This task №7
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};

console.log(getSquare.call(sizes));

//This task №8
let element = {
  height: 25,
  getHeight: function () { return this.height }
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());

//Array methods task №1
let array1  = [1,2,3,5,8,9,10];

let result1 = array1.map((number) => { 
    const digit = number;
    const odd = ((number % 2) == 0);
    return { digit , odd }
});
console.log(result1);

//Array methods task №2
array2 = [12, 4, 50, 1, 0, 18, 40];
let result2 = array2.some(number => number == 0);
console.log(result2);

//Array methods task №3
array3 = ['yes', 'hello', 'no', 'easycode', 'what'];
let result3 = array3.some(word => word.length > 3);
console.log(result3);

//Array methods task №4
array4 = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

array4.sort((x, y) => x.index - y.index);
const result4 = array4.reduce((previousValue, currentItem) => {
    return previousValue + currentItem.char;
}, ''); 
console.log(result4);

//Array methods task №5
array5 = [  [14, 45],  [1],  ['a', 'c', 'd']  ] ;
array5.sort((x,y) => x.length - y.length);
console.log(array5);

//Array methods task №6
array6 = [
  {cpu: 'intel', info: {cores:2, сache: 3}},
  {cpu: 'intel', info: {cores:4, сache: 4}},
  {cpu: 'amd', info: {cores:1, сache: 1}},
  {cpu: 'intel', info: {cores:3, сache: 2}},
  {cpu: 'amd', info: {cores:4, сache: 2}}
];

array6.sort((x,y) => x.info.cores - y.info.cores);
console.log(array6);

//Array methods task №7
let products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterProducts(products, minPrice, maxPrice) {
  const sortProducts = products.filter(x => x.price >  minPrice && x.price < maxPrice);
  sortProducts.sort((x, y) => x.price - y.price);
  return sortProducts;
}

console.log(filterProducts(products, 15, 30));

