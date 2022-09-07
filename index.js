//I spent so much time trying to get this to work that i had deleted my code and this worked
 https://www.encodedna.com/html5/canvas/add-image-to-html5-canvas-using-javascript.htm
// window.onload = function () {
//     let img = new Image();
//     img.src = "./images/background.png"

//     img.onload = function () {
//         fillCanvas(img);
//     }

//     function fillCanvas(img) {
//         const canvas = document.getElementById('canvas');
//          const ctx = canvas.getContext('2d');

//         canvas.width = img.width;
//         canvas.height = img.height;
//          ctx.drawImage(img, 0, 0);
//     }
// }

// const img = new Image() {
//     img.src = "fw"
// }

var canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillRect(0,0, canvas.width, canvas.height)

const gravity = 0.2

class Platform {
    constructor() {
        this.position = {
            x: 250,
            y: 450
        }

        this.width = 500
        this.height = 40
    }

    draw() {
        ctx.fillStyle = "blue"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const platform = new Platform()
platform.draw()

class Fighter {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 150
    }

     draw() {
        ctx.fillStyle = "red"
        ctx.fillRect(this.position.x, this.position.y, 50, this.height)
    }
//updates properties as it change while it moves aronud
refresh() {
    this.draw()
    this.position.y += this.velocity.y

    //stops from falling past 0 level
    if (this.position.y + this.height + this.velocity.y >= canvas.height) {        
        this.velocity.y = 0
    } else this.velocity.y += gravity
  }
}
const user = new Fighter({
    position: {
    x: 350,
    y: 150
 },
 velocity: {
    x: 0,
    y: 0
 }
})

user.draw() 

const ai = new Fighter({
    position: {
    x: 600,
    y: 150
  },
  velocity: {
    x: 0,
    y: 0
  }
})

ai.draw()

function aniloop() {
    window.requestAnimationFrame(aniloop) 
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    user.refresh()
    ai.refresh()
}

aniloop()