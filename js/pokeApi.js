function getApiData() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
  
        //const imggif = data;
  
        //templateCardImg("Card Image :", imggif);
      }
    };
  
    xhr.open(
      "GET",
      "https://pokeapi.co/api/v2/pokemon?limit=390"
    );
    xhr.send();
  }
  getApiData();