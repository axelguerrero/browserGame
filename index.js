//setting up our canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
//calls our canvas dimenstions from our html
ctx.fillRect(0,0, canvas.width, canvas.height)

const gravity = 0.7

//calling our background class 
const bg = new Background({
    position: {    //starts image at the 0,0 values
        x: 0,
        y: 0
    },
    imageSrc: "./images/background.png" //an image the size of our canvas
})

const keys = {
    w: {
        pressed: false
    },
    
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

let lastKey

//when applied to each class of fighter they will become recatanlge one
function colliisoin({rectangle1, rectangle2}) {
    return (
            rectangle1.hitRadius.position.x + rectangle1.hitRadius.width >= rectangle2.position.x &&
            rectangle1.hitRadius.position.x <= rectangle2.position.x + rectangle2.width && // covers left and right side of enemy
            rectangle1.hitRadius.position.y + rectangle1.hitRadius.height >= rectangle2.position.y && 
            rectangle1.hitRadius.position.y <= rectangle2.position.y + rectangle2.height) //breaks contact after a jump
}

function aniloop() {
    window.requestAnimationFrame(aniloop) 
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    bg.refresh()
    user.refresh()
    ai.refresh()
    platform.draw()

user.velocity.x = 0
// movement
// if statement for pressed button to determine direction and if 2 buttons are clicked and the first button clicked is no longer it wont stop
if (keys.a.pressed && lastKey === "a") {
    user.velocity.x = -1
} else if(keys.d.pressed && lastKey === "d") {
    user.velocity.x = 1
}

//prevents our useable chracter from falling through the platform until a certain pos is reached
    if(user.position.y + user.height < platform.position.y && //keeps on platform
        user.position.y + user.height + user.velocity.y >= platform.position.y && //keeps on platform while moving
        user.position.x >= platform.position.x && //allows to fall off of left side
        user.position.x <= platform.position.y + platform.position.y - platform.position.x + platform.height) { //if our characters x position is greather than those things gravity will pull it down
        user.velocity.y = 0
    }    
// prevents ai from falling until a certain position is reached
    if(ai.position.y + ai.height < platform.position.y && //keeps on platform
        ai.position.y + ai.height + ai.velocity.y >= platform.position.y && //keeps on platform while moving
        ai.position.x >= platform.position.x &&  //allows to fall off of left side
        ai.position.x <= platform.position.y + platform.position.y - platform.position.x + platform.height) { //if our characters x position is greather than those things gravity will pull it down
        ai.velocity.y = 0
    }
    //Collision detection for our user
    if(colliisoin({
        rectangle1: user,
        rectangle2: ai
    }) && user.isAttacking
    ){
            user.isAttacking = false //sets default hit status off
            ai.health -= 20 //how much is taken off the bar
        document.getElementById("aibar").style.width = ai.health + "%" //subtaracts off of bar
    }
//colliisoin detection for the ai
if(colliisoin({
    rectangle1: ai,
    rectangle2: user
}) && ai.isAttacking
){
        ai.isAttacking = false //sets default hit status off
        user.health -= 20 //how much is taken off the bar
        document.getElementById("plbar").style.width = user.health +"%" //subtaracts off of bar in ammout of percentage
}

if(user.health <= 0 || ai.health <= 0) { //if statement that says once any fighters health reaches 0 to call determine winner for these two arguments
    determineWinner({user, ai})
}

//ends game if user falls
if(user.position.y > canvas.height){
    user.health -= 100
    document.getElementById("plbar").style.width = user.health +"%" //subtaracts off of bar in ammout of percentage
}

//ends game if ai falls
if(user.position.y > canvas.height){
    user.health -= 100
    document.getElementById("plbar").style.width = user.health +"%" //subtaracts off of bar in ammout of percentage
}

}

aniloop()