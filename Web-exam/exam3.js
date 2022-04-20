async function getResponse () {
  let response = await fetch('http://exam-2022-1-api.std-900.ist.mospolytech.ru/api/restaurants?api_key=5e9df792-960e-467b-a3bd-c8ff759e9dfd')
  let content = await response.json()
  content = content.splice(0, 10)

  let row = document.querySelector('.tbody')

  let key;
  let counter=1
  let choice = 1
  for(key in content) {
    row.innerHTML += `<tr>
    <th scope="row">
      <div class="form-choice">
        <input type="radio" name="group" id="choice${key}">
        <label for="choice${key}">${choice++}</label>
      </div>
    </th>
    <td class="td-1">${content[key].name}</td>
    <td>${content[key].typeObject}</td>
    <td>${content[key].address}</td>
  </tr>
  
  `
   
  }
}
getResponse ()




