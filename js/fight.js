let QuerryFight = document.querySelector(".VSContener h2");

function Fight() {

               document.getElementById('hide').style.opacity = "0.5";
               document.getElementById('VS').style.color = "rgb(128, 128, 128)";
          document.getElementById('hide').style.visibility="visible";

      

  CardMinion = Array.from(String(window.numbersCards).split(","), Number);
  Pokemon = Array.from(String(window.numbersPoke).split(","), Number);
  HPPOKE = Pokemon[1] - CardMinion[0];
  HPCARD = CardMinion[1] - Pokemon[0];
  console.log(HPCARD);
  console.log(HPPOKE);

  switch (true) {
    case 0 >= HPCARD:
      if (0 >= HPPOKE) {
        QuerryFight.innerHTML = "Les deux sont mort ! Match Nul";
        console.log("A");
        stop()
      }
      else if (HPPOKE > 0) {
        QuerryFight.innerHTML = "Le pokemon l'emporte avec "+ HPPOKE +" HP restant !";
        console.log("D");
        stop()

      }
      break;

    case HPCARD > 0:
      if (0 >= HPPOKE) {
        QuerryFight.innerHTML = "La carte l'emporte avec "+ HPCARD +" HP restant !";
        console.log("B");
        stop()

      }
      else if (HPPOKE > 0) {
        QuerryFight.innerHTML = "Les deux sont encore en vie ! Recommencez !";
        console.log("C");
        stop()

      }
      break;
      

    default:
      console.log("nani");
  }
  document.getElementById("Fight").disabled = true;

}
