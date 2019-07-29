const body = document.querySelector('body')
const form = document.createElement('form')
form.setAttribute("style", "padding-top : 50px")
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

    form.addEventListener('click', e => {
      const divContainer = document.querySelector('.container')
      // console.log(divContainer)
      const userDetail = users.find(u => u.name === e.target.textContent);
      // console.log(userDetail)
      
          const userName = document.createElement('p');
          userName.textContent = userDetail.name;
          const userEmail = document.createElement('p');
          userEmail.textContent = `email: ${userDetail.email}`;
          const userPhone = document.createElement('p');
          userPhone.textContent = `phone: ${userDetail.phone}`;
          const userWebsite = document.createElement('p');
          userWebsite.textContent = `website: ${userDetail.website}`;

          
          divContainer.innerHTML = '';
          divContainer.appendChild(userName);
          divContainer.appendChild(userEmail);
          divContainer.appendChild(userPhone);
          divContainer.appendChild(userWebsite);
         
    
  })
  
}


console.log(document.body)

