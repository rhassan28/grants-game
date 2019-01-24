let nameHP = 40;
let grantHP = 10;
let wins = 0;
let damage;

startGame();
function startGame() {
  let user = prompt ("do you want to play my game?")
  if (user == "yes"){
    let name = prompt("what is your name then?");
    startCombat(name);
  }else {
      console.log("leave then peasant");
  //checking for Player's Health
  }
}
function startCombat(name){
    let action = prompt(`attack or quit?`);
    damage = getDamage();
      if (action == "attack"){
      nameHP = nameHP - damage;
      console.log(`${name} dealt ${damage} to Grant`);
  }else{
    console.log(`Game Over`);
  }while (nameHP >= 0){
    damage = getDamage();
    nameHP = nameHP - damage;
    if (nameHP > 0) {
      console.log(`${name} has ${nameHP} health`);
    }if (grantHP = grantHP - damage) {
      console.log(`Grant has ${grantHP} health.`);
    }if (nameHP <= 0) {
      console.log(`BOY YA LOST. TRY AGAIN! YOU SHOULDN'T EVEN TRY YA BUM`);
    break;
    grantHP = (grantHP - damage)
  }if (grantHP <= 0) {
      //grantHP = 0;
      wins++, grantHP = 10;
      console.log(`Almost There! Grant leakin on the HP so you almost got him`);
    }if (wins === 3) {
      console.log(`I had my doubts but you clapped Grant. Play Again?`);
    break;

    }
  }
}
function getDamage(){
  return Math.floor(Math.random() * 5 + 1);
  }
