const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillRect(0,0, canvas.width, canvas.height)

const gravity = 0.7

//fighting platform
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

// our characters
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

    this.position.x += this.velocity.x
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
    platform.draw()

//prevents our useable chracter from falling throught the platform
if  (user.position.y + user.height <= platform.position.y &&
    user.position.y + user.height + user.velocity.y >= platform.position.y) {
            user.velocity.y = 0
    }

if  (ai.position.y + ai.height <= platform.position.y &&
    ai.position.y + ai.height + ai.velocity.y >= platform.position.y) {
            ai.velocity.y = 0
    }
}

aniloop()