//Learned how to set up a canvas from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
//dimensions
canvas.width = 1000
canvas.height = 600

//fills in canvas
c.fillRect(0, 0, canvas.width, canvas.height);

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = "./images/background.png";
  base_image.onload = function(){
    c.drawImage(base_image, 0, 0);
  }
}

//to constantly pull our players down
const gravity = 0.2

//What we are going to be using sprites in order to get characters in the game, Sprites are essentially compilations of 2d images in order to get animations.
// OOP, using a class to group up data to program my character
class character {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.width = 50
    }
//This just makes our character appear on the screen and follows those certain criterias we added    
draw() {
     c.fillStyle = "blue"
     c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

 // updates properites to begin moving spirtes acorss the screen
  refresh() {
    this.draw()
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0
    } else this.velocity.y +=  gravity
  }
}

//usable character
let user = new character({
   position: {
    x: 300,
    y: 0
   },
   velocity: {
    x: 0,
    y: 0
   }

})

user.draw()

//enemy player
let ai= new character({
    position: {
        x: 699,
        y: 0
       },
       velocity: {
        x: 0,
        y: 0
       }
})

ai.draw()

//animation loop
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0,0, canvas.width, canvas.height)
    user.refresh()
    ai.refresh()
} 

animate()

window.addEventListener("keydown", (event) => {
    console.log(event.key)
})