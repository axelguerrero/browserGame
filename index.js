const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillRect(0,0, canvas.width, canvas.height)

const gravity = 0.7

const bg = new Background({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: "./images/background.png"
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

function aniloop() {
    window.requestAnimationFrame(aniloop) 
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    bg.refresh()
    user.refresh()
    ai.refresh()
    platform.draw()

user.velocity.x = 0
// if statement for pressed button to determine direction
if (keys.a.pressed && lastKey === "a") {
    user.velocity.x = -1
} else if(keys.d.pressed && lastKey === "d") {
    user.velocity.x = 1
}

//prevents our useable chracter from falling through the platform
    if(user.position.y + user.height < platform.position.y &&
        user.position.y + user.height + user.velocity.y >= platform.position.y &&
        user.position.x >= platform.position.x ) {
        user.velocity.y = 0
    } 

if  (ai.position.y + ai.height <= platform.position.y &&
    ai.position.y + ai.height + ai.velocity.y >= platform.position.y) {
            ai.velocity.y = 0
    }

    console.log(user.velocity, user.position)
}

aniloop()