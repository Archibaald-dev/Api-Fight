function getApiData() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
  
        const imgPoke = data.sprites.front_default;
        const NamePoke = data.name;
  
        templatePokemonImg(NamePoke, imgPoke);
      }
    };
  
    xhr.open(
      "GET",
      "https://pokeapi.co/api/v2/pokemon/"+ Math.floor(Math.random() * 390)
    );
    xhr.send();
  }
  getApiData();

  
function templatePokemonImg(title, name) {
    // var x1 = Math.floor(Math.random() * 392);
  
    let templatePokemonImg = document.querySelector(".col--character2");

        templatePokemonImg.innerHTML +=
        '<div class="col-sm-12 pokemon"> Pokemon : ' +
        title +
        ' <img onerror=this.src="img/no-image-available.png" src="' + name + '" ></div>';
  
  }