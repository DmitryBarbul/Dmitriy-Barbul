function http() {
  return {
    async request(url, options) {
      const response = await fetch(url, options)
        .then(response => {
          if (Math.round(response.status / 100) !== 2) {
            return Promise.reject(response);
          }
          return response.json();
        });
      return response;
    }
  };
}

const myHttp = http();

async function postUser(user) {
  try {
    const response = myHttp.request('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
      'Content-Type': 'application/json',
      },
    });
    return response;
  }catch(err) {
    console.log(err);
    return Promise.reject(err);
  }
}

async function renderUsers(arrOfPostedUsers) {
  const userNameList = arrOfPostedUsers.map(user => user.name).join(', ');

  const userInfo = document.createElement('span');
  userInfo.textContent = `created ${arrOfPostedUsers.length} users: ${userNameList}`;

  document.body.appendChild(userInfo);
}

async function createUsers(arrayOfUsers) {
  const userPostResult = await Promise.all([...arrayOfUsers.map(postUser)]);
  console.log(userPostResult);
  renderUsers(userPostResult);
}

createUsers([{name: 'Vasya', age: 25}, {name: 'Petya', age: 40}]);
