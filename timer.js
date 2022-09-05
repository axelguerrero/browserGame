//function for our timer
let timer = 60
function countdown() {
    //if our timers value is greater than 0
        setTimeout(countdown, 1000)
        if (timer > 0) {
        timer--
        document.querySelector("#timer").innerHTML = timer
    }

}
countdown()