function random_bg_color() {
    var x = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    var bgColor = x;


 var x1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
 var y1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
 var per2 = Math.floor(Math.random() * 365);


     var bgimage = "linear-gradient(" + per2 +"deg," + x1 +" "+ "00%," + y1 +" "+ "100%)";
  
    document.getElementById('col--character').style.backgroundColor=  bgColor;
    document.getElementById('col--character').style.backgroundImage = bgimage;
    }


function getApiData() {
  let input = prompt("Entrer le nom du super héros");


random_bg_color();

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      const data = JSON.parse(xhr.responseText);

      const comics = data.data.results[0].comics.items;
      const HeroName = data.data.results[0].name;
      const HeroDes = data.data.results[0].description;
      const HeroPic = data.data.results[0].thumbnail.path;
      const HeroPicExt = data.data.results[0].thumbnail.extension;

      
      templateHeroImg(HeroPic, HeroPicExt);
      templateHeroName("Héros :", HeroName);
      templateType("nom :", comics);
      templateHeroDes("Description :", HeroDes);
      
    }
  };
  xhr.open(
    "GET",
    "https://gateway.marvel.com:443/v1/public/characters?name=" +
      input +
      "&apikey=cca811438d0318ea058045c3adf8de2f"
  );
  xhr.send();
}

function templateType(title, name) {
  let templateComicsName = document.querySelector(".col--character");
  const names = name.length;

  

  for (let i = 0; i < names; i++) {
    templateComicsName.innerHTML +=
      '<div class="col-sm-12 ">' + title + " " + name[i].name + "</div>";
  }
}

function templateHeroImg(title, name) {
    let templateHeroImg = document.querySelector(".col--Hero");
    templateHeroImg.innerHTML +=
    '<div class="col-sm-12"> <img src="' + title + "." + name  + '" ></img></div>';
  }




function templateHeroDes(title, name) {
    let templateHeroDes = document.querySelector(".col--Hero");
    templateHeroDes.innerHTML +=
      '<div class="col-sm-12"><h1> </h1>' + title + " " + name + "<h1> </h1></div>";
  }
  
  function templateHeroName(title, name) {
  let templateHeroName = document.querySelector(".col--Hero");
  templateHeroName.innerHTML +=
    '<div class="col-sm-12 ">  ' + title + " " + name + "</div>";

    let templateComics = document.querySelector(".col--character");
    templateComics.innerHTML +=
      '<div class="col-sm-12 "><h1>Some comics where ' + name + " appears !</h1></div>";
}

getApiData();
