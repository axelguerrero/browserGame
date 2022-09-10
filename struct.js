//function for our timer
let timer = 60
function countdown() {
    //if our timers value is greater than 0 we will subtract one over and over till we reach 0
    if (timer > 0) {    // will only take place if whats in the parenthises is truw
    setTimeout(countdown, 1000) //how fast the value decreases
        timer-- //subtracts 1 from let timer
        document.getElementById("timer").innerHTML = timer //using the dom to link this into our html using ids (#timer)
    }
 //if time reaches 0 and the health is the same it will be a tie
 if (timer === 0) {
        determineWinner({user, ai}) //these two argu
    }
  }

  //function that determines the winner after certain criterias are met
 function determineWinner({user, ai}) {
    document.getElementById("display").style.display = "flex"  //overrides display none in html
    if(user.health === ai.health) {
        document.getElementById("display").innerHTML = "Tie"
      //this over-rides our display none in our style tag and displays tie
    } else if(user.health > ai.health) { //if users health is greater than op they win
        document.getElementById("display").innerHTML = "Player 1 Wins"
        //this over-rides our display none in our style tag and displays "Player 1 Wins"
    }else if(user.health < ai.health) { //if users health is greater than op they win
        document.getElementById("display").innerHTML = "Player 2 Wins"
        //this over-rides our display none in our style tag and displays "Player 2 Wins"
 }
 }
countdown()

// move on the x axis
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case"w":
            user.velocity.y = -15
            break
        case"a": 
             keys.a.pressed = true
             lastKey = "a"
             break
        case"d": 
            keys.d.pressed = true
            lastKey = "d"
              break
        case " ":
            user.attack()
            break
            case "f":
            ai.attack()
            break
    }
    console.log(event.key)
})
// stops you from moving after a button is no longer being pressed down on
window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case"w":
        keys.w.pressed = false
            break
            case"a": 
        keys.a.pressed = false
            break
        case"d": 
        keys.d.pressed = false
            break
        
    }
    console.log(event.key)
})
