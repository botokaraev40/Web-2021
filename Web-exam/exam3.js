

        fetch(url = 'http://exam-2022-1-api.std-900.ist.mospolytech.ru/api/restaurants', {
            method: 'GET',
            body: JSON.stringify(dataToGET),
            mode: 'cors',
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          })
          .then(response => response.json())
          .then(json => console.log('Response', json))