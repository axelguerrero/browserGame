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
        this.height = 40
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
        this.lastKey     //makes it so if multiple keys are pressed, the most recent key wont be interupted ny removal of other keys
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
        this.color= color //gets color from constructor
        this.isAttacking  //after click of space bar makes our character hit
        this.health = 100 //sets hp to 100
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
//function for creating a time space of attack by the flick of a button
  attack() {
    this.isAttacking = true
    setTimeout(() => {   //sets to false after at the set speed of our time (100ms)
      this.isAttacking = false
    }, 100)

  }
}

//creating usabale character
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
  offset: {  //turns hands towards the oppdd
    x: 50,
    y: 0
 }
})