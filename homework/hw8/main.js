const body = document.querySelector('body')
const form = document.createElement('form')
body.appendChild(form)

function makeGetRequest(method, url, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.addEventListener('load', () => {
    const resBody = JSON.parse(xhr.responseText);
    cb(resBody);
  });

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send();
}

makeGetRequest('GET', 'https://jsonplaceholder.typicode.com/users', res => {
renderUsers(res);
});

function renderUsers(users) {
  users.forEach(user => {
    const div = document.createElement('div');
    div.id = user.id;
    div.textContent = user.name;
    
    form.appendChild(div)
  });
  const allDivs = document.querySelectorAll('div')
  console.log(allDivs)

  // form.addEventListener('click', e => {
  //   e.
  // })

}


console.log(document.body)

