//DOM task №1
const isParent = (parent, child) => {
    return parent.contains(child)
};
console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

//DOM task №2
let filterLinks = () => {
  let getLinks = document.querySelectorAll('a');
  let res = [...getLinks].filter(item => !item.closest('ul')); 
return res
};
console.log(filterLinks());

//DOM task №3
let previousElement = document.querySelector('ul').previousSibling;
console.log(previousElement);
let nextElement = document.querySelector('ul').nextSibling;
console.log(nextElement);