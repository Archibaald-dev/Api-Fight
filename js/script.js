function getApiData() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);

      const imggif = data;

      templateCardImg("Card Image :", imggif);
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

function templateCardImg(title, name) {
  // var x1 = Math.floor(Math.random() * 392);

  let templateCardImg = document.querySelector(".col--character");
  const names = name.length;
  for (let x1 = 0; x1 < names; x1++) {
    templateCardImg.innerHTML +=
      '<div class="col-sm-12 bonsoir '+ x1 +'" id=" ' +
      x1 +
      '">' +
      title +
      ' <img onerror=this.src="img/no-image-available.png" id="' + x1 + '" src="' + name[x1].img + '" ></div>';

    if (name[x1].img.status == 404) {
      document.getElementById(x1).style.display = "none";
    }
    name[x1].img.onerror = function() {
      document.getElementById(x1).style.display = "none";
    };
  }
}

/*
for (let i = 0; i < names; i++) {
  // let img = document.getElementById(name[i].img);

   if (name[i].img.status == 404) {
    // img.onerror = function () {
     document.getElementById(name[i].img).style.display="none";
   
 //  alert('a')}

       
 
}

     templateCardImg.innerHTML +=
       '<div class="col-sm-12" id=" ' +
       name[i].img +
       '">' +
       title +
       ' <img id="' + name[i].img + '" src="' +

       name[i].img +
       '" ></div>';

       if (name[i].img.status == 404) {
       //  img.onerror = function () {
         document.getElementById(name[i].img).style.display="none";
  // }
 }
}
}*/
