function tableCreate() {
  const users =[{name: 'd'},{name: 'q'},{name: 'e'}]
  const body = document.querySelector('body');
  const table = document.querySelector("table");
  const tBody = document.querySelector("tbody");
  
  for (let j = 0; j < 3; j++) {
    
    let row = document.createElement("tr");

    for (let i = 0; i < 4; i++) {
      
      let cell = document.createElement("td");
      let forArr = users.forEach(function(name) {
         this.name
      })
      let cellText = document.createTextNode(`${forArr}`);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    
    tBody.appendChild(row);
  }
  // let test = document.querySelector('td')
  // let text = test.insertAdjacentElement()
  table.appendChild(tBody);
  table.setAttribute("border", "2");
  console.log(body)
}
tableCreate()