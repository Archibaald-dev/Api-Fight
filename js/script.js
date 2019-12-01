document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.opacity = "0";
         setTimeout(function(){
          document.getElementById('load').style.visibility = "hidden";
       },1000);
      },2500); 
      
  }
}



var x1 = Math.floor(Math.random() * 392);

function getApiData() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);

      const imggif = data;
      const CardNAME = data[x1].name;
      const CardATK = data[x1].attack;
      const CardLIFE = data[x1].health;

      templateCardImg(imggif);
      templateCard(CardNAME, CardATK, CardLIFE);
    }
  };

  xhr.open(
    "GET",
    "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/Minion?cost=4&?cost=5&?cost=6&?cost=7"
  );
  xhr.setRequestHeader(
    "x-rapidapi-host",
    "omgvamp-hearthstone-v1.p.rapidapi.com"
  );
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "f7519df10amshd17bb115ccac51ap1a1f85jsn4d8cb972abe4"
  );
  xhr.send();
}
getApiData();

let templateQuerry = document.querySelector(".col--character");

function templateCardImg(name) {
  //const names = name.length;
  //for (let x1 = 0; x1 < names; x1++) {
  templateQuerry.innerHTML +=
    '<div class="text-center col-sm-12 heigth ' +
    x1 +
    '" id=" ' +
    x1 +
    '"><img onerror=this.src="https://i.imgur.com/tPTuVkn.png" id="' +
    x1 +
    '" onload =console.log(this.height) src="' +
    name[x1].img +
    '" ></div>';

  // }
}

function templateCard(name, atk, def) {
  var str = "Minion : " + name + "<br> ATK : " + atk + "<br> HP : " + def;
  window.numbersCards = str.match(/\d+/g).map(Number);
  templateQuerry.innerHTML +=
    '<div class="text-center col-sm-12 textBox">' + str + "</div>";
  // }
}



