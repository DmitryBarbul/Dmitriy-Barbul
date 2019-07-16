let users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
		"nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
		"nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
  }
];
//UI
const body = document.querySelector('body');
const table = document.querySelector('table');
const tBody = document.querySelector('tbody');
const mainContainer = document.getElementById('app');
const mainTable = document.createElement('table');
mainTable.id = 'main-table';
//button sort with removing
document.addEventListener('click', function (event) {
  //sort if < or > 
  if (event.target.className === 'sort-button') {
    users = users.sort((user1, user2) => (
      user1.balance < user2.balance ? -1 : 1
    ));
    
    const oldTbody = document.getElementById('main-tbody');
    const oldThead = document.getElementById('main-thead');
    const mainTable = document.getElementById('main-table');
    //removing previous table
    const tableButton = document.getElementsByClassName('sort-button')[0];
    mainTable.removeChild(oldThead);
    mainTable.removeChild(oldTbody);
    mainTable.removeChild(tableButton);
    createTable(users)
  }
});

//Main func
function createTable(userList) {
  const mainTbody = document.createElement('tbody');
  mainTbody.id = 'main-tbody';
  const mainHeader = document.createElement('thead');
  mainHeader.id = 'main-thead';
  const theadTitles = ['#', 'Name', 'Email', 'Balance'];
  let totalBalance = 0;
  //th adding into header
  theadTitles.map(item => {
    let th = document.createElement('th');  
     th.textContent = item;
     mainHeader.appendChild(th);
    });
  
    //loop with conditions to add statement in order
    userList.forEach((user, i) => {
    let trCheck = document.createElement('tr');
    theadTitles.forEach((title) => {
      if (title === '#') {
        let td = document.createElement('td');
        td.textContent = i + 1;
        trCheck.appendChild(td);
      }

      if (title === 'Name') {
        let td = document.createElement('td');
        td.textContent = user.name;
        trCheck.appendChild(td);
      }

      if (title === 'Email') {
        let td = document.createElement('td');
        td.textContent = user.email;
        trCheck.appendChild(td);
      }

      if (title === 'Balance') {
        let td = document.createElement('td');
        td.textContent = user.balance;
        trCheck.appendChild(td);
        totalBalance += user.balance;
      }
    })
      mainTbody.appendChild(trCheck);
  });

  mainTable.appendChild(mainHeader);
  mainTable.appendChild(mainTbody);

  //total blance
  let trTotalBalance = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = 'total balance: ' + parseInt(totalBalance);
    trTotalBalance.appendChild(td);
    mainTbody.appendChild(trTotalBalance);
  //sort-button
  const sortButton = document.createElement('button');
  sortButton.textContent = 'sort';
  sortButton.className = 'sort-button';
  mainTable.appendChild(sortButton);
} 

createTable(users);
mainContainer.appendChild(mainTable);

console.log(body);