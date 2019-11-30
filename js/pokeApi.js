function getApiData() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
  
        const imgPoke = data.sprites.front_default;
        const NamePoke = data.name;
        const PokeATK = data.stats[4].base_stat;
        const PokeHP = data.stats[5].base_stat;
  
        templatePokemonImg(imgPoke);
        templatePokemon(NamePoke, PokeATK,PokeHP);
      }
    };
  
    xhr.open(
      "GET",
      "https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 802)
    );
    xhr.send();
  }
  getApiData();

  let templateQuerryPoke = document.querySelector(".col--character2");

function templatePokemonImg(name) {
    // var x1 = Math.floor(Math.random() * 392);

    templateQuerryPoke.innerHTML +=
        '<div class="col-sm-12 pokemon"><img onerror=this.src="img/no-image-available.png" src="' + name + '" ></div>';
  
  }

  function templatePokemon(name,atk,hp) {
    // var x1 = Math.floor(Math.random() * 392);
  
    if(99>atk) {
        var atkmin = Math.ceil(atk/14)
    }
    else if(100<=atk){
        var atkmin = Math.ceil(atk/16)
    }

    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
          if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
          return index == 0 ? match.toLowerCase() : match.toUpperCase();
        });
      }
      var NAME = name.charAt(0).toUpperCase() + name.slice(1);

    templateQuerryPoke.innerHTML +=
    '<div class="col-sm-12">Pokemon : '+ NAME +'<br> ATK : ' +
    atkmin +
    '<br> HP : ' +  Math.ceil(hp/10) + '</div>';
  }