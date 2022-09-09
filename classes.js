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
        ctx.fillStyle = "black"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const platform = new Platform()

// our characters
class Fighter {
    constructor({position, velocity, color = "blue", offset}) {
        this.position = position
        this.velocity = velocity
        this.width= 50
        this.height = 150
        this.hitRadius = {
            position:  {
                //moves our hit box with our position
                x: this.position.x, 
                y: this.position.y
            },
            offset,
            width: 100,
            height: 50,
        }
        this.color= color
        this.isAttacking
    }

     draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

        //hit radius
        if(this.isAttacking) {
        ctx.fillStyle ="black"
        ctx.fillRect(this.hitRadius.position.x, this.hitRadius.position.y, this.hitRadius.width, this.hitRadius.height)
        }
}
//updates properties as it change while it moves aronud
refresh() {
    this.draw()
    this.hitRadius.position.x = this.position.x - this.hitRadius.offset.x 
    this.hitRadius.position.y = this.position.y

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    // allows for our characters fall below the screen
    if (this.position.y + this.height + this.velocity.y >= canvas.height) {        
        this.velocity.y = 10
    } else this.velocity.y += gravity
  }
//
  attack() {
    this.isAttacking = true
    setTimeout(() => {
      this.isAttacking = false
    }, 100)

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
 },
 offset: {
    x: 0,
    y:0
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
  },
  color: "red",
  offset: {  //turns hands towards the opp
    x: 50,
    y: 0
 }
})