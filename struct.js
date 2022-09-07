//function for our timer
let timer = 60
function countdown() {
    //if our timers value is greater than 0 we will subtract one over and over
    if (timer > 0) {    
    setTimeout(countdown, 1000)
        timer--
        document.querySelector("#timer").innerHTML = timer
    }

}
countdown()

// move on the x axis
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case"w":
            player.velocity.y = -10
            break
        case"a": 
             keys.a.pressed = true
             lastKey = "a"
             break
        case"d": 
            keys.d.pressed = true
            lastKey = "d"
              break
        
    }
    console.log(event.key)
})
// stops you from moving after a button is no longer being pressed down on
window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case"w":
        keys.w.pressed = false
            lastKey = "w"
            break
            case"a": 
        keys.a.pressed = false
        lastKey = "a"
            break
        case"d": 
        keys.d.pressed = false
        lastKey = "d"
            break
        
    }
    console.log(event.key)
})
