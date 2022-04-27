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
      <button type="button" class="btn btn-primary btn-sm" id="submit${choice++}">Выбрать</button>
  
      </th>
      <td class="td-1" id="id-${choice - 1}">${content[key].name}</td>
      <td>${content[key].typeObject}</td>
      <td>${content[key].address}</td>
    </tr>
    
    `
     
    }
  
  
  
    
    
    document.querySelector("#submit1").onclick = function(){
      alert("Вы выбрали заведение " + document.querySelector('#id-'+1).innerHTML)
      
      document.querySelector('.cost1').innerHTML = `
      <p>${content[0].set_1} ₽</p>`
      document.querySelector('.cost2').innerHTML = `
      <p>${content[0].set_2} ₽</p>`
      document.querySelector('.cost3').innerHTML = `
      <p>${content[0].set_3} ₽</p>`
      document.querySelector('.cost4').innerHTML = `
      <p>${content[0].set_4} ₽</p>`
      document.querySelector('.cost5').innerHTML = `
      <p>${content[0].set_5} ₽</p>`
      document.querySelector('.cost6').innerHTML = `
      <p>${content[0].set_6} ₽</p>`
      document.querySelector('.cost7').innerHTML = `
      <p>${content[0].set_7} ₽</p>`
      document.querySelector('.cost8').innerHTML = `
      <p>${content[0].set_8} ₽</p>`
      document.querySelector('.cost9').innerHTML = `
      <p>${content[0].set_9} ₽</p>`
      document.querySelector('.cost10').innerHTML = `
      <p>${content[0].set_10} ₽</p>`
      
      
    }
  
  
    document.querySelector("#submit2").onclick = function(){
      alert("Вы выбрали заведение " + document.querySelector('#id-'+2).innerHTML)
      
      document.querySelector('.cost1').innerHTML = `
      <p>${content[1].set_1} ₽</p>`
      document.querySelector('.cost2').innerHTML = `
      <p>${content[1].set_2} ₽</p>`
      document.querySelector('.cost3').innerHTML = `
      <p>${content[1].set_3} ₽</p>`
      document.querySelector('.cost4').innerHTML = `
      <p>${content[1].set_4} ₽</p>`
      document.querySelector('.cost5').innerHTML = `
      <p>${content[1].set_5} ₽</p>`
      document.querySelector('.cost6').innerHTML = `
      <p>${content[1].set_6} ₽</p>`
      document.querySelector('.cost7').innerHTML = `
      <p>${content[1].set_7} ₽</p>`
      document.querySelector('.cost8').innerHTML = `
      <p>${content[1].set_8} ₽</p>`
      document.querySelector('.cost9').innerHTML = `
      <p>${content[1].set_9} ₽</p>`
      document.querySelector('.cost10').innerHTML = `
      <p>${content[1].set_10} ₽</p>`
      
      
    }
  
  
    document.querySelector("#submit3").onclick = function(){
      alert("Вы выбрали заведение " + document.querySelector('#id-'+3).innerHTML)
      
      document.querySelector('.cost1').innerHTML = `
      <p>${content[2].set_1} ₽</p>`
      document.querySelector('.cost2').innerHTML = `
      <p>${content[2].set_2} ₽</p>`
      document.querySelector('.cost3').innerHTML = `
      <p>${content[2].set_3} ₽</p>`
      document.querySelector('.cost4').innerHTML = `
      <p>${content[2].set_4} ₽</p>`
      document.querySelector('.cost5').innerHTML = `
      <p>${content[2].set_5} ₽</p>`
      document.querySelector('.cost6').innerHTML = `
      <p>${content[2].set_6} ₽</p>`
      document.querySelector('.cost7').innerHTML = `
      <p>${content[2].set_7} ₽</p>`
      document.querySelector('.cost8').innerHTML = `
      <p>${content[2].set_8} ₽</p>`
      document.querySelector('.cost9').innerHTML = `
      <p>${content[2].set_9} ₽</p>`
      document.querySelector('.cost10').innerHTML = `
      <p>${content[2].set_10} ₽</p>`
      
      
    }
  
  
  
  
    document.querySelector("#submit4").onclick = function(){
      alert("Вы выбрали заведение " + document.querySelector('#id-'+4).innerHTML)
      
      document.querySelector('.cost1').innerHTML = `
      <p>${content[3].set_1} ₽</p>`
      document.querySelector('.cost2').innerHTML = `
      <p>${content[3].set_2} ₽</p>`
      document.querySelector('.cost3').innerHTML = `
      <p>${content[3].set_3} ₽</p>`
      document.querySelector('.cost4').innerHTML = `
      <p>${content[3].set_4} ₽</p>`
      document.querySelector('.cost5').innerHTML = `
      <p>${content[3].set_5} ₽</p>`
      document.querySelector('.cost6').innerHTML = `
      <p>${content[3].set_6} ₽</p>`
      document.querySelector('.cost7').innerHTML = `
      <p>${content[3].set_7} ₽</p>`
      document.querySelector('.cost8').innerHTML = `
      <p>${content[3].set_8} ₽</p>`
      document.querySelector('.cost9').innerHTML = `
      <p>${content[3].set_9} ₽</p>`
      document.querySelector('.cost10').innerHTML = `
      <p>${content[3].set_10} ₽</p>`
      
      
    }
  
  
    document.querySelector("#submit5").onclick = function(){
      alert("Вы выбрали заведение " + document.querySelector('#id-'+5).innerHTML)
      
      document.querySelector('.cost1').innerHTML = `
      <p>${content[4].set_1} ₽</p>`
      document.querySelector('.cost2').innerHTML = `
      <p>${content[4].set_2} ₽</p>`
      document.querySelector('.cost3').innerHTML = `
      <p>${content[4].set_3} ₽</p>`
      document.querySelector('.cost4').innerHTML = `
      <p>${content[4].set_4} ₽</p>`
      document.querySelector('.cost5').innerHTML = `
      <p>${content[4].set_5} ₽</p>`
      document.querySelector('.cost6').innerHTML = `
      <p>${content[4].set_6} ₽</p>`
      document.querySelector('.cost7').innerHTML = `
      <p>${content[4].set_7} ₽</p>`
      document.querySelector('.cost8').innerHTML = `
      <p>${content[4].set_8} ₽</p>`
      document.querySelector('.cost9').innerHTML = `
      <p>${content[4].set_9} ₽</p>`
      document.querySelector('.cost10').innerHTML = `
      <p>${content[4].set_10} ₽</p>`
      
      
    }
  
  
    document.querySelector("#submit6").onclick = function(){
      alert("Вы выбрали заведение " + document.querySelector('#id-'+6).innerHTML)
      
      document.querySelector('.cost1').innerHTML = `
      <p>${content[5].set_1} ₽</p>`
      document.querySelector('.cost2').innerHTML = `
      <p>${content[5].set_2} ₽</p>`
      document.querySelector('.cost3').innerHTML = `
      <p>${content[5].set_3} ₽</p>`
      document.querySelector('.cost4').innerHTML = `
      <p>${content[5].set_4} ₽</p>`
      document.querySelector('.cost5').innerHTML = `
      <p>${content[5].set_5} ₽</p>`
      document.querySelector('.cost6').innerHTML = `
      <p>${content[5].set_6} ₽</p>`
      document.querySelector('.cost7').innerHTML = `
      <p>${content[5].set_7} ₽</p>`
      document.querySelector('.cost8').innerHTML = `
      <p>${content[5].set_8} ₽</p>`
      document.querySelector('.cost9').innerHTML = `
      <p>${content[5].set_9} ₽</p>`
      document.querySelector('.cost10').innerHTML = `
      <p>${content[5].set_10} ₽</p>`
      
      
    }
  
  
    document.querySelector("#submit7").onclick = function(){
      alert("Вы выбрали заведение " + document.querySelector('#id-'+7).innerHTML)
      
      document.querySelector('.cost1').innerHTML = `
      <p>${content[6].set_1} ₽</p>`
      document.querySelector('.cost2').innerHTML = `
      <p>${content[6].set_2} ₽</p>`
      document.querySelector('.cost3').innerHTML = `
      <p>${content[6].set_3} ₽</p>`
      document.querySelector('.cost4').innerHTML = `
      <p>${content[6].set_4} ₽</p>`
      document.querySelector('.cost5').innerHTML = `
      <p>${content[6].set_5} ₽</p>`
      document.querySelector('.cost6').innerHTML = `
      <p>${content[6].set_6} ₽</p>`
      document.querySelector('.cost7').innerHTML = `
      <p>${content[6].set_7} ₽</p>`
      document.querySelector('.cost8').innerHTML = `
      <p>${content[6].set_8} ₽</p>`
      document.querySelector('.cost9').innerHTML = `
      <p>${content[6].set_9} ₽</p>`
      document.querySelector('.cost10').innerHTML = `
      <p>${content[6].set_10} ₽</p>`
      
      
    }
  
  
    document.querySelector("#submit8").onclick = function(){
      alert("Вы выбрали заведение " + document.querySelector('#id-'+8).innerHTML)
      
      document.querySelector('.cost1').innerHTML = `
      <p>${content[7].set_1} ₽</p>`
      document.querySelector('.cost2').innerHTML = `
      <p>${content[7].set_2} ₽</p>`
      document.querySelector('.cost3').innerHTML = `
      <p>${content[7].set_3} ₽</p>`
      document.querySelector('.cost4').innerHTML = `
      <p>${content[7].set_4} ₽</p>`
      document.querySelector('.cost5').innerHTML = `
      <p>${content[7].set_5} ₽</p>`
      document.querySelector('.cost6').innerHTML = `
      <p>${content[7].set_6} ₽</p>`
      document.querySelector('.cost7').innerHTML = `
      <p>${content[7].set_7} ₽</p>`
      document.querySelector('.cost8').innerHTML = `
      <p>${content[7].set_8} ₽</p>`
      document.querySelector('.cost9').innerHTML = `
      <p>${content[7].set_9} ₽</p>`
      document.querySelector('.cost10').innerHTML = `
      <p>${content[7].set_10} ₽</p>`
      
      
    }
  
  
    document.querySelector("#submit9").onclick = function(){
      alert("Вы выбрали заведение " + document.querySelector('#id-'+9).innerHTML)
      
      document.querySelector('.cost1').innerHTML = `
      <p>${content[8].set_1} ₽</p>`
      document.querySelector('.cost2').innerHTML = `
      <p>${content[8].set_2} ₽</p>`
      document.querySelector('.cost3').innerHTML = `
      <p>${content[8].set_3} ₽</p>`
      document.querySelector('.cost4').innerHTML = `
      <p>${content[8].set_4} ₽</p>`
      document.querySelector('.cost5').innerHTML = `
      <p>${content[8].set_5} ₽</p>`
      document.querySelector('.cost6').innerHTML = `
      <p>${content[8].set_6} ₽</p>`
      document.querySelector('.cost7').innerHTML = `
      <p>${content[8].set_7} ₽</p>`
      document.querySelector('.cost8').innerHTML = `
      <p>${content[8].set_8} ₽</p>`
      document.querySelector('.cost9').innerHTML = `
      <p>${content[8].set_9} ₽</p>`
      document.querySelector('.cost10').innerHTML = `
      <p>${content[8].set_10} ₽</p>`
      
      
    }
  
    document.querySelector("#submit10").onclick = function(){
      alert("Вы выбрали заведение " + document.querySelector('#id-'+10).innerHTML)
      
      document.querySelector('.cost1').innerHTML = `
      <p>${content[9].set_1} ₽</p>`
      document.querySelector('.cost2').innerHTML = `
      <p>${content[9].set_2} ₽</p>`
      document.querySelector('.cost3').innerHTML = `
      <p>${content[9].set_3} ₽</p>`
      document.querySelector('.cost4').innerHTML = `
      <p>${content[9].set_4} ₽</p>`
      document.querySelector('.cost5').innerHTML = `
      <p>${content[9].set_5} ₽</p>`
      document.querySelector('.cost6').innerHTML = `
      <p>${content[9].set_6} ₽</p>`
      document.querySelector('.cost7').innerHTML = `
      <p>${content[9].set_7} ₽</p>`
      document.querySelector('.cost8').innerHTML = `
      <p>${content[9].set_8} ₽</p>`
      document.querySelector('.cost9').innerHTML = `
      <p>${content[9].set_9} ₽</p>`
      document.querySelector('.cost10').innerHTML = `
      <p>${content[9].set_10} ₽</p>`
      
      
    }
  
  
    
  
  
      
  
  }
  getResponse ()
  
  
  
  
  
  