// background 
class Background {
    constructor({position, imageSrc}) {
        this.position = position
        this.width = 1000; //image width
        this.height = 600; //image height
        this.image = new Image() 
        this.image.src = imageSrc
    }
    
    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y) //draw same image twice
    }

    refresh() {
        this.draw()
    }
}

//fighting platform
class Platform {
    constructor() {
        this.position = {
            x: 250,
            y: 450
        }

        this.width = 500
        this.height = 50
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