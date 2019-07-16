//Event Task №1
const btn = document.getElementById('btn-msg');
btn.addEventListener('click', event => alert(event.target.getAttribute('data-text')))

//Event Task №2
const getElement = document.getElementById('tag');
document.addEventListener('click', function (event) {
  getElement.textContent = event.target.tagName;
});